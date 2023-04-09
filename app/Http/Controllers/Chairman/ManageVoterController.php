<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\Voter;
// use App\Models\

class ManageVoterController extends Controller
{
    public function index(){
    
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $user = Auth::user();
        if($user->role->roleable->role != 'chairman'){
            return reponse()->json([
                'status' => 'fail',
                'message' => 'unAuthized access'
            ],401);
        }
        
        $voter = User::with('role.roleable','photos')->where([
                            'isActtive' => true,
                            'isBanned' => false,
                            'isDeleted' => false
                ])->whereHas('role.roleable',function($query){
                   $query->where('role','voter');
                })->get();
                
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
    
    public function approveVoter(){
      try {
       
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $user = Auth::user();
        if($user->role->roleable->role != 'chairman'){
            return reponse()->json([
                'status' => 'fail',
                'message' => 'unAuthized access'
            ],401);
        }
        
        $voter = User::with('role.roleable','photos')
                     ->where(
                              [
                                'isActive' => true,
                                'isBanned' => false,
                                'isDeleted' => false
                                
                               ])
                 ->whereHas('role.roleable',function($query){
                               $query->where([
                                      'role' => 'voter',
                               ]);
                        });
                        
                        
            if($voter->role->roleable->isApproved){
                   return response()->json([
                            'status' => 'fail',
                            'message' => 'The Voter is already approved'
                    ],400);
              } 
              
            if(!$voter){
                   return response()->json([
                            'status' => 'fail',
                            'message' => 'Oops! something went wrong'
                    ],400);
              } 
            $isEdited = $user->role->roleable->update([
                   'isApproved' => true
            ]);
            
        if(!$isEdited){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'You have successfully approved the voter'
         ],200);
             } catch (\Exception $exception) {
                return response()->json([
                   'status' => 'fail',
                   'message' => 'Oops! something went wrong',
                   'error' => $exception->getMessage()
               ], 200);
          } 
      }
      
}
