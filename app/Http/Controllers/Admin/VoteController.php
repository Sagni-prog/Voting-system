<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use Carbon\Carbon;
use App\Models\VoteBallot;
use App\Models\RegisteredCandidates;
use App\Models\User;
use App\Models\Candidate;

use App\Http\Requests\VoteRequest;
use App\Http\Requests\ExtendVoteRequest;
use App\Http\Requests\ExtendEndDateVoteRequest;
use App\Http\Requests\ConfirmVoteRequest;

use  App\Repositories\Vote\VoteInterface;
use  App\Repositories\User\UserRepositoryInterface;
use  App\Repositories\VoteBallot\VoteBallotRepositoryInterface;
use  App\Repositories\RegisteredCandidate\RegisteredCandidateRepositoryInterface;

use App\Builder\VoteResultBuilder;

use App\Services\VoteService;

use App\Helpers\GetCurrentDate;
use Auth;

use App\Helpers\GetLastVote;

class VoteController extends Controller
{
    private $voteInterface;
    private $userInterface;
    private $voteBallotRepository;
    private $registeredCandidateRepository;
    private $voteBuilder;
    private $voteService;
    private $dateHelper;
    private $lastVote;
    
    public function __construct(
                    VoteInterface $voteInterface,
                    UserRepositoryInterface $userInterface,
                    VoteBallotRepositoryInterface $voteBallotRepository,
                    RegisteredCandidateRepositoryInterface $registeredCandidateRepository,
                    VoteResultBuilder $voteBuilder,
                    VoteService $voteService,
                    GetCurrentDate $dateHelper,
                    GetLastVote $lastVote,
                ){
        $this->voteInterface = $voteInterface;
        $this->userRepository = $userInterface;
        $this->voteBallotRepository = $voteBallotRepository;
        $this->registeredCandidateRepository = $registeredCandidateRepository;
        $this->voteBuilder = $voteBuilder;
        $this->voteService = $voteService;
        $this->dateHelper = $dateHelper;
        $this->lastVote = $lastVote;
     }
     
     
    public function allVotes(){
        
        $votes = $this->voteInterface->getAllVotes();
        
        return $votes;
    }
    public function index($id){
          
        try {
          

        //  $this->lastVote->getLastVote();
        // $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        // $candidates = $this->registeredCandidateRepository->getRegisteredCandidatesWhereVoteId(2);
        // $data = $this->voteService->calculateVoteResult($candidates);
        // return $data;
        
        // $candidates = Candidate::with('roles.user')->where('vote_id',2)->get();
        

        $candidates = User::with('role.roleable','photos')
                            ->where([
                                     'isActive' => true,
                                     'isBanned' => false,
                                     'isDeleted' => false
                                     ])
                            ->whereHas('role.roleable',function($query){
                                   $query->where('role','candidate');
                           })->get();
        // return $candidates;
        
        $data = array();
        $i = 0;
        // $total_vote_count = 18;
        $total_vote_count = VoteBallot::all()->count();

        foreach($candidates as $candidate){
    
            $voted_candidate =  $this->userRepository->findUserById($candidate->role->roleable->id);
            $candidate_vote_count = $candidate->role->roleable->votes;
            $exam_score = $candidate->role->roleable->exam_score;
        
        
            $voted_in_percent = $this->voteBuilder->setVoteCount($candidate_vote_count)
                                        ->setTotalVoteCount($total_vote_count)
                                        ->calculateVotePercent();
                                        
            $dataObj = array(
                           "candidate" => $candidate,
                           "exam_score" => $exam_score,
                           "vote_count" =>  $candidate_vote_count,
                           "voted_in_percent" => $voted_in_percent ,
                           "totol_vote_percent" => $exam_score + $voted_in_percent,
                       );
            $data[$i] = $dataObj;
            $i++;
        }
        
        // return $data;
       
          return response()->json([
           
            'status' => 'success',
            'isConfirmed' => $this->lastVote->getLastVote()->confirmed,
            'vote_name' => $this->lastVote->getLastVote()->vote_name,
            "total_vote_count" => $total_vote_count,
            'data' => $data,
          ], 200);
                 
             } catch (\ModelNotFoundException $exception) {
                   return response()->json([
                        'status' => 'fail',
                        'message' => 'Oops! something went wrong',
                        'error' => $exception->getMessage()
                   ],500);
              }  
    }
       
    public function store(VoteRequest $request){
        
        try {
        
         $user = $this->userRepository->getCurrentlyAuthenticatedUser();
         $vote_name = !$request->vote_name ? $this->dateHelper->getDate()->format('Y')." Student Union President Election" : $request->vote_name;
        
         $data = $request->validated();
         $data['vote_status'] = 'pending';
         $data['vote_name'] = $vote_name;
         $vote = $this->voteInterface->storeVote($data);
        
        if(!$vote){
            return response()->json([
                'status' => 'fail',
                 'message' => 'Oops! something went wrong'
            ],400);
        }
        
        return response()->json([
                  'status' => 'success',
                  'message' => 'Successfully created vote'
            ],201);
                 
          
        } catch (\Exception $exception) {
            return $exception;
        }
    } 
    
    public function extendStartDate(ExtendVoteRequest $request, $id){
        
        try {
           
         $user = $this->userRepository->getCurrentlyAuthenticatedUser();
         $data = $request->validated();
         $vote = $this->voteInterface->findVote($id);
        
        if($vote->vote_status === 'ongo'){
            return response()->json([
                'status' => 'fail',
                'message' => 'The voting has already begun'
            ],400);
        }
        
        $edited = $this->voteInterface->extendStartDate($vote,$data);
        
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully extended the starting date of the vote'
        ],200);
            
        } catch (\Throwable $th) {
            throw $th;
        }
    }
    
    public function extendEndDate(ExtendEndDateVoteRequest $request, $id){
        
        try {
            
            $user = $this->userRepository->getCurrentlyAuthenticatedUser();
            $data = $request->validated();
            $vote = $this->voteInterface->findVote($id);
    
            if($vote->vote_status === 'closed'){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'The voting has already ended'
                ],400);
            }
            
        $edited = $this->voteInterface->extendEndDate($vote,$data);
        
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully extended the starting date of the vote'
        ],200);
            
        } catch (\Throwable $th) {
          
        }
    }
    
    public function confirmVote(ConfirmVoteRequest $request, $id){
        
        $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        $vote = $this->voteInterface->findVote($id);
       
        if(!$vote){
            return response()->json([
                 'status' => 'fail',
                 'message' => 'No Vote found'
            ],404);
        }
        $vote_id = $user->id;
        $edited = $this->voteInterface->confirmVote($vote,$vote_id);

        if(!$edited){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully confirmed the vote'
        ],200);
       
        
    }
    
    public function cancelVote(Request $request, $id){
      try {
        
        $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        $data = $request->validated();
        $vote = $this->voteInterface->findVote($id);
       
        if(!$vote){
            return response()->json([
                 'status' => 'fail',
                 'message' => 'No Vote found'
            ],404);
        }
        
        $edited = $this->voteInterface->cancelVote($vote,$data);
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully cancelled the vote'
        ],200);
        
      } catch (\Throwable $th) {
       
      }
       
    }
    
    public function destroy($id){
        
    }
}
