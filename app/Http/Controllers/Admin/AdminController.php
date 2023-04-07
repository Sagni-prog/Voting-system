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
class AdminController extends Controller
{
   
   public function getActiveVoters(){
   
      try {
         $user = Auth::user();
          if($user->role->roleable->role != 'admin'){
           return response()->json([
              'status' => 'fail',
              'message' => 'unAuthorized access'
           ],401);
        }
  
        $voter = Voter::with('role.user.photos')
                      ->whereHas('role.user',function($query){
                     $query->where('isActive',true);  
          })->get();
     
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
     
     
   
   public function getVoters(){
   
      try {
         $user = Auth::user();
          if($user->role->roleable->role != 'admin'){
           return response()->json([
              'status' => 'fail',
              'message' => 'unAuthorized access'
           ],401);
        }
        
     $voter = Voter::with('role.user.photos')->whereHas('role.user',function($query){
           $query->where('isActive',false);
     })->get();
     
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
      $user = Auth::user();
       if($user->role->roleable->role != 'admin'){
        return response()->json([
           'status' => 'fail',
           'message' => 'unAuthorized access'
        ],401);
     }
         $voter = Voter::with('role.user.photos')->whereHas('role.user',function($query){
             $query->where('isActive',false);
         })->get();
         
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
     
     public function getActiveCandidates(){
      try {
         $user = Auth::user();
          if($user->role->roleable->role != 'admin'){
           return response()->json([
              'status' => 'fail',
              'message' => 'unAuthorized access'
           ],401);
        }
         
     
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
            $user = Auth::user();
             if($user->role->roleable->role != 'admin'){
              return response()->json([
                 'status' => 'fail',
                 'message' => 'unAuthorized access'
              ],401);
           }
            
           $candidate = Candidate::with('role.user.photos')->get();
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
       
      //  return $user;
       if(!$user){
         return respoose()->json([
            'status' => 'success',
            'message' => 'no user found'
         ],200);
       }
       
      //  return Carbon::now();
       
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
