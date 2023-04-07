<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

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
     $ban = $user->update([
        'isBanned' => true,
        'banned_at' => Carbon::now()
     ]);
     
     if(!$ban){
        return response()->json([
          'status' => 'fail',
          'message' => 'Oops something went wront'
        ],400);
      }
      return response()->json([
         'status' => 'success',
         'message' => 'successfully banned'
      ],200);
    }
    
    public function unBan($id){
       $user = User::where('id',$id);
       
       $user->update([
         'isBanned' => false,
         'bannned_at' => null
       ],200);
    }
}
