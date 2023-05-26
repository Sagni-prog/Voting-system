<?php

namespace App\Http\Controllers\Feedback;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FeedbackRequest;

use App\Models\Feedback;

class FeedbackController extends Controller
{
     
     public function index(){
       
       try {
          $feedbacks = Feedback::orderBy('created_at','desc')->get();
          if(!$feedbacks){
             return response()->json([
                'status' => 'fail',
                'message' => 'No feedback found'
             ], 404);
             
          }
          return response()->json([
            'status' => 'success',
            'data' => $feedbacks
         ], 200);
       } catch (\Exception $exception) {
          return response()->json([
             'status' => 'fail',
             'message' => $exception->getMessage()
          ], 400);
       }
     }
     
     public function store(FeedbackRequest $request){
      try {
    
       $data = $request->validated();
       $res = Feedback::create($data);
       return response()->json([
          'status' => 'success',
          'message' => 'successfully created',
          'data' => $res
       ], 201);
         } catch (\Exception $exception) {
          return response()->json([
             'status' => 'fail',
             'message' => $exception->getMessage()
          ], 400);
       } 
     }
     
}
