<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;

class ManageVoterController extends Controller
{
    private $userRepository;
    private $candidateRepository;
    private $voterRepository;
    
    public function __construct(
                UserRepositoryInterface $userRepository,
                CandidateRepositoryInterface $candidateRepository,
                VoterRepositoryInterface $voterRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->candidateRepository = $candidateRepository;
            $this->voterRepository = $voterRepository;
    }
    
public function index(){

    $voter = $this->userRepository->setRole('voter')
                                      ->getActiveNotBannedWhereRole();
                
      if(!$voter){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $voter->count(),
          'voters' => $voter
      ]);
}
    
    
public function show($id){
    
       $voter = $this->userRepository->setRole('voter')
                                     ->findActiveNotBannedWhereRole($id);
                
      if(!$voter){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $voter->count(),
          'voters' => $voter
      ]);
}
    
public function update($id){
      try {
        
          $voter = $this->userRepository->setRole('voter')
                                        ->findActiveNotBannedWhereRole($id);
      
          if(!$voter){
            return response()->json([
                     'status' => 'fail',
                     'message' => 'Voter not found'
               ],404);
          } 
        
            if($voter->role->roleable->isApproved){
                   return response()->json([
                            'status' => 'fail',
                            'message' => 'The Voter is already approved'
                    ],200);
            } 
              
            $id = $this->userRepository->getCurrentlyAuthenticatedUser()->id;
            $isEdited = $this->voterRepository->approveVoterWhereId($voter->role->roleable, $id);

        if(!$isEdited){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        // $registered = RegisteredVoter::create([
        //               'voter_id' => $voter->id,
        //               'vote_id' => 1
        // ]);
        
        return response()->json([
            'status' => 'success',
            'message' => 'You have successfully approved the voter'
         ],200);
             } catch (\Exception $exception) {
                return response()->json([
                   'status' => 'fail',
                   'message' => 'Oops! something went wrong',
                   'error' => $exception->getMessage()
               ], 400);
          } 
}
      
}
