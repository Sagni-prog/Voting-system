<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use Carbon\Carbon;
use App\Models\VoteBallot;
use App\Models\RegisteredCandidates;
use App\Models\User;
use App\Services\VoteResultService;
use  App\Repositories\Vote\VoteInterface;
use App\Http\Requests\VoteRequest;
use App\Http\Requests\ExtendVoteRequest;
use App\Http\Requests\ExtendEndDateVoteRequest;
use App\Http\Requests\ConfirmVoteRequest;

use Auth;

class VoteController extends Controller
{
    private $voteInterface;
    
    public function __construct(VoteInterface $voteInterface){
        $this->voteInterface = $voteInterface;
     }
     
    public function allVotes(){
        
        $votes = $this->voteInterface->getAllVotes();
        
        return $votes;
    }
    public function index(VoteResultService $service, $id){
          
        try {
            if(!Auth::check()){
                
               return response()->json([
                    'status' => 'fail',
                    'message' => 'Unauthorized access'
                ],403);
            }
        $user = Auth::user();
        
        if($user->role->roleable->role != 'voter'){
           return response()->json([
                   'status' => 'fail',
                   'message' => 'Unauthorized access'
             ],403);
         }
                   
        
        $candidates = RegisteredCandidates::where('vote_id',1)->get();
        
        $data = array();
        $i = 0;
        foreach($candidates as $candidate){
            $votes = VoteBallot::where('candidate_id',$candidate->candidate_id)->get();
            $voted_candidate = User::with('photos','role.roleable')->find($candidate->candidate_id);
            $total_vote_count = VoteBallot::all()->count();
            $vote_count = $votes->count();
            
            
            $voted_in_percent = $service->setVoteCount($votes->count())
                                        ->setTotalVoteCount($total_vote_count)
                                        ->calculateVotePercent();
            $dataObj = array(
                           "candidate" => $voted_candidate,
                           "candidate_id" => $candidate->candidate_id,
                           "vote_count" =>  $vote_count,
                           "voted_in_percent" => $voted_in_percent . "%"
                       );
            $data[$i] = $dataObj;
            $i++;
        }
       
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
