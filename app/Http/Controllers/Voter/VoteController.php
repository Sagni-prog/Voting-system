<?php

namespace App\Http\Controllers\Voter;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\VoteBallotNotFoundException;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\VoteBallot\VoteBallotRepositoryInterface;

use App\Http\Requests\CastVoteRequest;


class VoteController extends Controller
{

 private $userRepository;
 private $voteBallotRepository;
 
 public function __construct(
                                UserRepositoryInterface $userRepository,
                                VoteBallotRepositoryInterface $voteBallotRepository
                        ){
   
    $this->userRepository = $userRepository;
    $this->voteBallotRepository = $voteBallotRepository;
 }
       
    public function store(CastVoteRequest $request, $id){
     try {
         $user = $this->userRepository->getCurrentlyAuthenticatedUser();
               
             $voted = $this->voteBallotRepository->getVotersVote($user->$id);
        
             if($voted){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'You have already voted',
               ],404);
             }
             
              $voted = $this->voteBallotRepository->storeVoteBallot($user->id, $data);
              
              return response()->json([
                'status' => 'fail',
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
