<?php

namespace App\Http\Controllers\Voter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\VoteBallot;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Exceptions\VoteBallotNotFoundException;


class VoteController extends Controller
{
       
       
    public function store(Request $request){
     try {
        if(!Auth::check()){
            
           return response()->json([
                'status' => 'fail',
                'message' => 'Unauthorized access'
            ],403);
        }
    $user = Auth::user();
    if($user->role->roleable->role != 'voter'){
       return response()->json([
               'status' => 'fail',
               'message' => 'Unauthorized access'
         ],403);
             }
             
             $voted = VoteBallot::whereHas('voters',function($query){
              try {
                  $query->where('id',$user->id);
              } catch (\VoteBallotNotFoundException $exception) {
                    report($exception);
                 }
             });
             
         } catch (\Exception $exception) {
               return response()->json([
                    'status' => 'fail',
                    'message' => 'Oops! something went wrong',
                    'error' => $exception->getMessage()
               ],500);
          }  
    }
}
