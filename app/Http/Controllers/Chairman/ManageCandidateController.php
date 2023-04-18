<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;
use App\Models\User;
use App\Models\Candidate;
use App\Models\RegisteredCandidates;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;


class ManageCandidateController extends Controller
{
    private $userRepository;
    private $candidateRepository;
    
    public function __construct(
                UserRepositoryInterface $userRepository,
                CandidateRepositoryInterface $candidateRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->candidateRepository = $candidateRepository;
    }
    
    public function index(){
    
        $candidates = $this->userRepository->getActiveNotBannedWhereRole('candidate');      
        if(!$candidates){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $candidates->count(),
          'candidates' => $candidates
      ]);
    }
    
    
    public function show($id){
    
        $candidate = $this->userRepository->findActiveNotBannedWhereRole($id, 'candidate');
                
      if(!$candidate){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
          return response()->json([
              'status' => 'success',
              'size' => $candidate->count(),
              'candidate' => $candidate
          ]);
          
    //   $registered = RegisteredCandidates::create([
    //     'candidate_id' => $candidate->id,
    //     'vote_id' => $candidate->role->roleable->vote_id
    // ]);
    }
    
    public function update($id){
        try {
    
         $candidate = $this->userRepository->findActiveNotBannedWhereRole($id,'candidate');  
             
             if(!$candidate){
                return response()->json([
                         'status' => 'fail',
                         'message' => 'Candidate not found'
                 ],404);
             }
             
              if($candidate->role->roleable->isApproved){
                     return response()->json([
                              'status' => 'fail',
                              'message' => 'The Candidate is already approved'
                      ],200);
              } 
            
            $id = $this->userRepository->getCurrentlyAuthenticatedUser()->id;
            $isEdited = $this->candidateRepository->approveCandidateWhereId($candidate->role->roleable, $id);
              
          if(!$isEdited){
              return response()->json([
                  'status' => 'fail',
                  'message' => 'Oops! something went wrong'
              ],400);
          }
          
          return response()->json([
              'status' => 'success',
              'message' => 'You have successfully approved the candidate'
           ],200);
          
        //   $registered = RegisteredCandidates::create([
        //     'candidate_id' => $candidate->id,
        //     'vote_id' => 1
        //  ]);
          
               } catch (\Exception $exception) {
                  return response()->json([
                     'status' => 'fail',
                     'message' => 'Oops! something went wrong',
                     'error' => $exception->getMessage()
                 ], 400);
            } 
        }  
  }
