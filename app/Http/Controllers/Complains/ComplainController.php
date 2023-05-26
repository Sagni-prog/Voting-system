<?php

namespace App\Http\Controllers\Complains;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\ComplainRequest;
use App\Models\Complain;

class ComplainController extends Controller
{
    public function index(){
       
        try {
           $complains = Complain::orderBy('create_at','desc')->get();
           if(!$complains){
              return response()->json([
                 'status' => 'fail',
                 'message' => 'No feedback found'
              ], 404);
              
              return response()->json([
                 'status' => 'success',
                 'data' => $complains
              ], 200);
           }
        } catch (\Exception $exception) {
           return response()->json([
              'status' => 'fail',
              'message' => $exception->getMessage()
           ], 400);
        }
      }
      
      public function store(ComplainRequest $request){
       try {
     
        $data = $request->validated();
        $res = Complain::create($data);
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
