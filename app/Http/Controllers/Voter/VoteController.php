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
       
    public function store(Request $request, $id){
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
                $query->where('id',Auth::user()->id);
           
             })->first();
          
             
             if($voted){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'You have already voted',
               ],404);
             }
             
              $voted = VoteBallot::create([
                    'voter_id' => $user->id,
                    'vote_id' => $request->vote,
                    'candidate_id' => $id
                 ]);
             
         } catch (\ModelNotFoundException $exception) {
               return response()->json([
                    'status' => 'fail',
                    'message' => 'Oops! something went wrong',
                    'error' => $exception->getMessage()
               ],500);
          }  
    }
}
