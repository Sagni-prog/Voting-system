<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Vote;
use Carbon\Carbon;
use Auth;

class VoteController extends Controller
{
    public function store(Request $request){
        
        try {
           
           if(!Auth::check()){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'unAuthorized access'
                 ],401);
           }
           
           $user = Auth::user();
           
           if($user->role->roleable->role != 'admin'){
            return response()->json([
               'status' => 'fail',
               'message' => 'unAuthorized access'
            ],401);
         }
         
         $vote_name = !$request->vote_name ? Carbon::now()->format('Y')." Student Union President Election" : $request->vote_name;
        
         $vote = Vote::create(
                 [      'vote_name' => $vote_name,
                        'vote_start_date' => Carbon::now(),
                        'vote_end_date' => Carbon::now(),
                        'vote_status' => 'pending'
                 ]);
                 
                 return $vote;
        if(!$vote){
            return response()->json([
                'status' => 'fail',
                 'message' => 'Oops! something went wrong'
            ],400);
            
        return response()->json([
                  'status' => 'success',
                  'message' => 'Successfully created vote'
            ],201);
        }
                 
          
        } catch (\Exception $exception) {
            return $exception;
        }
    } 
    
    public function extendStartDate(Request $request, $id){
        
        try {
            
            if(!Auth::check()){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'unAuthorized access'
                 ],401);
           }
           
           $user = Auth::user();
           
           if($user->role->roleable->role != 'admin'){
            return response()->json([
               'status' => 'fail',
               'message' => 'unAuthorized access'
            ],401);
         }
         
         $vote = Vote::where('id',$id)->first();
         
        //  return $vote;
         
         if($vote->vote_status === 'ongo'){
             return response()->json([
                'status' => 'fail',
                'message' => 'The voting has already begun'
             ],400);
        }
        
        
        $edited = $vote->update([
            'vote_start_date' => $request->vote_start_date
        ]);
        
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully extended the starting date of the vote'
        ],200);
            
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    
    public function extendEndDate(Request $request, $id){
        
        try {
            
            if(!Auth::check()){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'unAuthorized access'
                ],401);
            }
            
            $user = Auth::user();
            
            if($user->role->roleable->role != 'admin'){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'unAuthorized access'
                ],401);
            }
            
            $vote = Vote::where('id',$id)->first();
            

            if($vote->vote_status === 'closed'){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'The voting has already ended'
                ],400);
            }
           
            
        $edited = $vote->update([
            'vote_end_date' => $request->vote_end_date,
        ]);
        
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully extended the starting date of the vote'
        ],200);
            
        } catch (\Throwable $th) {
          
        }
    }
    
    public function confirmVote(Request $request, $id){
        
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $user = Auth::user();
        
        if($user->role->roleable->role != 'admin'){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $vote = Vote::where('id',$id)->first();
       
        if(!$vote){
            return response()->json([
                 'status' => 'fail',
                 'message' => 'No Vote found'
            ],404);
        }
        
        $edited = $vote->update([
                'confirmed' => true,
                'confirmed_at' => Carbon::now(),
                'confirmed_by' => $user->id
        ]);
        
        
        if(!$edited){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'you have successfully confirmed the vote'
        ],200);
       
        
    }
    
    public function cancelVote(Request $request, $id){
      try {
        
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $user = Auth::user();
        
        if($user->role->roleable->role != 'admin'){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
        $vote = Vote::where('id',$id)->first();
        
       
        if(!$vote){
            return response()->json([
                 'status' => 'fail',
                 'message' => 'No Vote found'
            ],404);
        }
        
        $edited = $vote->update([
               'voteCanceled' => true,
               'vote_canceled_at' => Carbon::now(), 
               'vote_cancelation_cause' => $request->vote_cancelation_cause,
        ]);
        
        if(!$edited){
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ],400);
        }
        
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully cancelled the vote'
        ],200);
        
      } catch (\Throwable $th) {
        //throw $th;
      }
       
    }
    
    public function destroy($id){
    
    }
}
