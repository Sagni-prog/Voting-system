<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Voter;
use App\Models\Candidate;
use App\Models\Admin;
use App\Models\Chairman;

class AdminController extends Controller
{
    public $user;
    
    public function __construct(Request $request)
    {
        $this->user =  Auth::user();
        
    }
    
   public function getActiveVoters(){
   
     if($this->user->role->roleable->role != 'admin'){
        return response()->json([
           'status' => 'fail',
           'message' => 'unAuthorized access'
        ],401);
     }
         $voter = Voter::where('isActive',true)
                        ->with('role.roleable','photo')
                        ->get();
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
     }
     
   public function getVoters(){
   
     if($this->user->role->roleable->role != 'admin'){
        return response()->json([
           'status' => 'fail',
           'message' => 'unAuthorized access'
        ],401);
     }
         $voter = Voter::where('isActive',false)
                        ->with('role.roleable','photo')
                        ->get();
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
     }
     
     
   public function getAllVoters(){
   
     if($this->user->role->roleable->role != 'admin'){
        return response()->json([
           'status' => 'fail',
           'message' => 'unAuthorized access'
        ],401);
     }
         $voter = Voter::with('role.roleable','photo')
                        ->All()
                        ->get();
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
     }
     
     public function getActiveCandidates(){
         
        if($this->user->role->roleable->role != 'admin'){
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
         
      }
      
      
      public function getAllCandidates(){
      
        if($this->user->role->roleable->role != 'admin'){
            return response()->json([
               'status' => 'fail',
               'message' => 'unAuthorized access'
            ],401);
        }
            
           $candidate = Candidate::All()
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
         
      }
      
    public function getAllChairmans(){
       
        if($this->user->role->roleable->role != 'admin'){
            return response()->json([
               'status' => 'fail',
               'message' => 'unAuthorized access'
            ],401);
        }
        
    $chairman = Chairman::All()->with('role.roleable','photo')->get();
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
    }
    
    // public function 
}
