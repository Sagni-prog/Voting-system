<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Auth;
use Hash;

class UpdatePassword extends Controller
{
    public function edit(Request $request){
    
        $uservalidator=Validator::make($request->all(),[
        
            'password' => ['required','string','min:8'],
                   ]);
        
       if(!Auth::user()){
          return response()->json([
             'status' => 'fail',
             'message' => 'User not found'
          ],404);
       }
       
       $status = Auth::user()->update([
           'password' => Hash::make($request->password)
       ]);
       
       if(!$status){
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong, please try again'
          ],400);
       }
       
       $user = Auth::user();
       
       return response()->json([
           'status' => 'sucess',
           'messsage' => 'You have sucessfully changed your password',
           'user' => $user
       ],200);
       
    }
}
