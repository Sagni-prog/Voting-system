<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;
use App\Models\User;
use App\Models\Candidate;
use App\Models\RegisteredCandidates;


class ManageCandidateController extends Controller
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
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthized access'
            ],401);
        }
        
        $candidate = User::with('role.roleable','photos')->where([
                            'isActive' => true,
                            'isBanned' => false,
                            'isDeleted' => false
                ])->whereHas('role.roleable',function($query){
                   $query->where('role','candidate');
                })->get();
                
      if(!$candidate){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $candidate->count(),
          'candidates' => $candidate
      ]);
    }
    
    
    public function show($id){
    
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $user = Auth::user();
        if($user->role->roleable->role != 'chairman'){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthized access'
            ],401);
        }
        
        $candidate = User::with('role.roleable.chairman','photos')->where([
                            'id' => $id,
                            'isActive' => true,
                            'isBanned' => false,
                            'isDeleted' => false
                ])->whereHas('role.roleable',function($query){
                   $query->where('role','candidate');
                })->first();
                
      if(!$candidate){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      $registered = RegisteredCandidates::create([
        'candidate_id' => $candidate->id,
        'vote_id' => $candidate->role->roleable->vote_id
]);
      
      return response()->json([
          'status' => 'success',
          'size' => $candidate->count(),
          'voters' => $candidate
      ]);
    }
    
    public function update($id){
        try {
         
          if(!Auth::check()){
              return response()->json([
                  'status' => 'fail',
                  'message' => 'unAuthorized access'
              ],401);
          }
          
          $user = Auth::user();
          if($user->role->roleable->role != 'chairman'){
              return response()->json([
                  'status' => 'fail',
                  'message' => 'unAuthized access'
              ],401);
          }
          
          $candidate = User::with('role.roleable','photos')
                       ->where(
                                [
                                  'id' => $id,
                                  'isActive' => true,
                                  'isBanned' => false,
                                  'isDeleted' => false
                                  
                                ])
                   ->whereHas('role.roleable',function($query){
                                 $query->where('role','candidate');
            })->first();
            
                       
                          
              if($candidate->role->roleable->isApproved){
                     return response()->json([
                              'status' => 'fail',
                              'message' => 'The Voter is already approved'
                      ],200);
              } 
                
              if(!$candidate){
                     return response()->json([
                              'status' => 'fail',
                              'message' => 'Voter not found'
                      ],404);
                } 
              $isEdited = $candidate->role->roleable->update([
                     'isApproved' => true,
                     'approvedBy' => $user->id,
                     'approved_at' => Carbon::now()
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
                 ], 400);
            } 
        }
        
    
   
}
