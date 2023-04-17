<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Voter;
use App\Models\Candidate;
use App\Models\Admin;
use App\Models\Chairman;
use App\Models\User;
use Auth;
use Carbon\Carbon;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;
use App\Repositories\Candidate\CandidataRepositoryInterface;

class AdminController extends Controller
{
   private $userRepository;
   private $voterRepository;
   private $candidateRepository;
    
   public function __construct(
                  UserRepositoryInterface $userRepository, 
                  VoterRepositoryInterface $voterRepository,
                  CandidataRepositoryInterface $candidateRepository,
                  ){
      
      $this->userRepository = $userRepository;
      $this->voterRepository = $voterRepository;
      $this->candidateRepository = $candidateRepository;
   }
   
   public function getActiveVoters(){
   
      try {
         // $user = $this->userRepository->getCurrentlyAuthenticatedUser();
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
            
         //   $candidate = Candidate::with('role.user.photos')->get();
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
         $user = Auth::user();
          if($user->role->roleable->role != 'admin'){
           return response()->json([
              'status' => 'fail',
              'message' => 'unAuthorized access'
           ],401);
        }
        
    $chairman = Chairman::with('role.user.photos')->get();
        if(!$chairman){
            return response()->json([
                'status' => 'success',
                'message' => 'No Chairman found'
             ],200);
        }
        
        return response()->json([
            'status' => 'success',
            'size' => $chairman->count(),
            'candidates' => $chairman
          ],200);
          } catch (\Exception $exception) {
            return $exception->getMessage();
       }
    }
    
    public function destroy($id){
       
      try {
      
         $authuser = Auth::user();
          if($authuser->role->roleable->role != 'admin'){
           return response()->json([
              'status' => 'fail',
              'message' => 'unAuthorized access'
           ],401);
        }
        
       $user = User::where('id',$id);
       
   
       if(!$user){
         return respoose()->json([
            'status' => 'success',
            'message' => 'no user found'
         ],200);
       }
       
       
      $deleted = $user->update([
         
         'isDeleted' => true,
         'deleted_at'  => Carbon::now()
         
       ],200);
       
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
