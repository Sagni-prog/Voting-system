<?php

namespace App\Http\Controllers\Complains;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Requests\ComplainRequest;
use App\Models\Complain;

use Auth;

class ComplainController extends Controller
{
    public function index(){
       
        try {
           $complains = Complain::orderBy('created_at','desc')->get();
           if(!$complains){
              return response()->json([
                 'status' => 'fail',
                 'message' => 'No feedback found'
              ], 404);
          
           }
               
           return response()->json([
            'status' => 'success',
            'data' => $complains
         ], 200);
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
        $data['name'] = Auth::user()->first_name." ".Auth::user()->last_name;
        $data['user_id'] = Auth::user()->id;
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
