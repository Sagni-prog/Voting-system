<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\User;

class UserVerification extends Controller
{
    public function edit(Request $req,$id){
   
        try {
         
            if(!Auth::check()){
                return response()->json([
                  'status' => 'fail',
                  'message' => 'unAuthorized access'
                ],401);
            }
            
            $user = User::findOrFail($id);
            $verified = $user->update(['isActive' => true]);
            
            if(!$verified){
               return respose()->json([
                  'status' => 'fail',
                  'message' => 'Oops! something went wrong try again'
               ],400);
             }
             
             return response()->json([
                'status' => 'sucess',
                'message' => 'successfully verified the user'
             ],200);
               
         } catch (\Exception $exception) {
             return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong try again please',
                'error' => $exception->getMessage()
             ],500);
         }
     }  
     
  public function banUser(Request $request,$id){
     
     $user = User::where('id',$id);
     $user->isBanned = true;
     $user->save();
  }
}
