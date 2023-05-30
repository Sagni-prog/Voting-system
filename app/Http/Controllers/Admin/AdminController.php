<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;

class AdminController extends Controller
{
   private $userRepository;
   private $voterRepository;
   private $candidateRepository;
   private $chairmanRepository;
    
   public function __construct(
                  UserRepositoryInterface $userRepository, 
                  VoterRepositoryInterface $voterRepository,
                  CandidateRepositoryInterface $candidateRepository,
                  ChairmanRepositoryInterface $chairmanRepository,
                ){
      
      $this->userRepository = $userRepository;
      $this->voterRepository = $voterRepository;
      $this->candidateRepository = $candidateRepository;
      $this->chairmanRepository = $chairmanRepository;
   }
   
   public function getActiveVoters(){
   
      try {
         $voters =  $this->voterRepository->getAllActiveVoters();
   
        if(!$voters){
           return response()->json([
              'status' => 'success',
              'message' => 'No voter found'
           ],200);
        }
        
        return response()->json([
            'status' => 'success',
            'size' => $voters->count(),
            'voters' => $voters
        ],200);
        
      } catch (\Exception $exception) {
         return $exception->getMessage();
      }
   }
     
  public function getInActiveVoters(){
   
      try {
        
     $voters = $this->voterRepository->getAllInActiveVoters();
     
        if(!$voter){
           return response()->json([
              'status' => 'success',
              'message' => 'No voter found'
           ],200);
        }
        
        return response()->json([
            'status' => 'success',
            'size' => $voter->count(),
            'voters' => $voter
        ],200);
      } catch (\Exception $exception) {
          return $exception->getMessage();
        }
   }
      
   public function getAllVoters(){
   
      try {
     
         $voters = $this->voterRepository->getAllVoters();
         
        if(!$voters){
           return response()->json([
              'status' => 'success',
              'message' => 'No voter found'
           ],200);
        }
         
        return response()->json([
            'status' => 'success',
            'size' => $voters->count(),
            'voters' => $voters
        ],200); 
        } catch (\Exception $exception) {
            return $exception->getMessage();
       }
    }
     
     public function getActiveCandidates(){
      try {
        
           $candidate = Candidate::where('isActive',true)
                                 ->with('role.roleable','photo')
                                 ->get();
          if(!$candidate){
             return response()->json([
                'status' => 'success',
                'message' => 'No candidate found'
             ],200);
            }
            
         return response()->json([
           'status' => 'success',
           'size' => $candidate->count(),
           'candidates' => $candidate
         ],200);
      } catch (\Exception $exception) {
         return $exception->getMessage();
    }
  } 
      
    public function getAllCandidates(){
      
         try {
            
              $candidates = $this->candidateRepository->getAllCandidates();
         
          if(!$candidates){
             return response()->json([
                'status' => 'success',
                'message' => 'No candidate found'
             ],200);
            }
            
         return response()->json([
           'status' => 'success',
           'size' => $candidates->count(),
           'candidates' => $candidates
         ],200);
         
      } catch (\Exception $exception) {
         return $exception->getMessage();
       }   
    }
      
    public function getAllChairmans(){
       
      try {
        
       $chairmans = $this->chairmanRepository->getAllChairmans();
       $users = $this->userRepository->getActiveNotBannedWhereRoleChairman();
      //  return $users;
       
        if(!$users){
            return response()->json([
                'status' => 'success',
                'message' => 'No Chairman found'
             ],200);
        }
        
        return response()->json([
             'data' => $users,
            'status' => 'success',
            'size' => $users->count(),
          ],200);
          } catch (\Exception $exception) {
            return $exception->getMessage();
       }
    }
    
    public function destroy($id){
       
      try {
        
       $user = $this->userRepository->findUserById($id);
     
       if(!$user){
         return response()->json([
            'status' => 'success',
            'message' => 'no user found'
         ],200);
       }
       
      $deleted = $this->userRepository->destroyUser($user);
       
      if(!$deleted){
         return response()->json([
            'status' => 'fail',
            'message' => 'Oops! something went wrong'
          ],400);
        }
        
        return response()->json([
           'status' => 'success',
           'message' => 'you have successfully deleted the user'
        ],200);
      } catch (\Exception $exception) {
      
         return $exception->getMessage();
         
       }
    }
}
