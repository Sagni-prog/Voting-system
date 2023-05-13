<?php

namespace App\Http\Controllers\Voter;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\VoteBallotNotFoundException;

use App\Repositories\Vote\VoteInterface;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\VoteBallot\VoteBallotRepositoryInterface;

use App\Http\Requests\CastVoteRequest;

use App\Helpers\UserHelper;

class VoteController extends Controller
{
     private $userHelper;
     private $userRepository;
     private $voteRepository;
     private $voteBallotRepository;
     
     public function __construct(
          UserRepositoryInterface $userRepository,
          VoteBallotRepositoryInterface $voteBallotRepository,
          VoteInterface $voteRepository,
        //   UserHelper $userHelper
          ){
               
               $this->userRepository = $userRepository;
               $this->voteBallotRepository = $voteBallotRepository;
               $this->voteRepository = $voteRepository;
            //    $this->userHelper = $userHelper;
 }
       
    public function store($voteId, $candidateId){
     try {  
        //  $user = $this->userRepository->getCurrentlyAuthenticatedUser();
            $user = $this->userRepository->findUserById(2);
        //  if($this->userHelper->getCurrentlyAuthenticatedUsersRole() != 'voter'){
             
        //      return response()->json([
        //          'status' => 'fail',
        //          'message' => 'You cant vote'
        //      ], 400);
        //  }
         
         if(!$this->voteRepository->findVote($voteId)){
            
             return response()->json([
                 'status' => 'fail',
                 'message' => 'Vote Does not exist'
             ],404);
         }
         
         $voted = $this->voteBallotRepository->setVoteId($voteId)
                                             ->setVoterId($user->id)
                                             ->getVotersVote();
        
             if($voted){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'You have already voted',
               ],404);
             }
             
              $voted = $this->voteBallotRepository->storeVoteBallot($user->id, $voteId, $candidateId);
              
              return response()->json([
                'status' => 'success',
                'message' => 'You have successfully voted',
           ],201);
         
             
         } catch (\ModelNotFoundException $exception) {
               return response()->json([
                    'status' => 'fail',
                    'message' => 'Oops! something went wrong',
                    'error' => $exception->getMessage()
               ],500);
          }  
    }
}
