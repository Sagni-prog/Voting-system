<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\User;

class UserVerification extends Controller
{
    public function edit(Request $req,$id){
   
        try {
         
            if(!Auth::check()){
            
             //    TODO
             
            }
            
            $user = User::findOrFail($id);
            $user->update(['isActive' => true]);
               
         } catch (\Throwable $th) {
         //throw $th;
         }
     }   
}
