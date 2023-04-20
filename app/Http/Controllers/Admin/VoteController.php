<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use Carbon\Carbon;
use App\Models\VoteBallot;
use App\Models\RegisteredCandidates;
use App\Models\User;

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
use Auth;

class VoteController extends Controller
{
    private $voteInterface;
    private $userInterface;
    private $voteBallotRepository;
    private $registeredCandidateRepository;
    private $voteBuilder;
    private $voteService;
    
    public function __construct(
                    VoteInterface $voteInterface,
                    UserRepositoryInterface $userInterface,
                    VoteBallotRepositoryInterface $voteBallotRepository,
                    RegisteredCandidateRepositoryInterface $registeredCandidateRepository,
                    VoteResultBuilder $voteBuilder,
                    VoteService $voteService,
                ){
        $this->voteInterface = $voteInterface;
        $this->userRepository = $userInterface;
        $this->voteBallotRepository = $voteBallotRepository;
        $this->registeredCandidateRepository = $registeredCandidateRepository;
        $this->voteBuilder = $voteBuilder;
        $this->voteService = $voteService;
     }
     
     
    public function allVotes(){
        
        $votes = $this->voteInterface->getAllVotes();
        
        return $votes;
    }
    public function index($id){
          
        try {
          
        $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        $candidates = $this->registeredCandidateRepository->getRegisteredCandidatesWhereVoteId(1);
        
        $data = $this->voteService->calculateVoteResult($candidates);
        // $data = array();
        // $i = 0;
        // foreach($candidates as $candidate){
        //     $votes = $this->voteBallotRepository->getVoteBallotWhereCandidateId($candidate->candidate_id);
        //     $voted_candidate = User::with('photos','role.roleable')->find($candidate->candidate_id);
        //     $total_vote_count = VoteBallot::all()->count();
        //     $vote_count = $votes->count();
            
            
        //     $voted_in_percent = $this->voteBuilder->setVoteCount($votes->count())
        //                                 ->setTotalVoteCount($total_vote_count)
        //                                 ->calculateVotePercent();
        //     $dataObj = array(
        //                    "candidate" => $voted_candidate,
        //                    "candidate_id" => $candidate->candidate_id,
        //                    "vote_count" =>  $vote_count,
        //                    "voted_in_percent" => $voted_in_percent . "%"
        //                );
        //     $data[$i] = $dataObj;
        //     $i++;
        // }
       
          return response()->json([
           
            'status' => 'success',
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
        
           $user = Auth::user();
           
         $vote_name = !$request->vote_name ? Carbon::now()->format('Y')." Student Union President Election" : $request->vote_name;
        
         $data = $request->validated();
         $data['vote_status'] = 'pending';
         
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
           
        $user = Auth::user();
    
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
            
            $user = Auth::user();
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
        
        $user = Auth::user();
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
        
        $user = Auth::user();
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
