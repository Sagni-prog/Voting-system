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
        
         $vote = Vote::create(
                 [      'vote_name' => 'vote-'.Carbon::now(),
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
}
