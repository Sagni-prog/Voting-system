<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Admin;
use App\Models\Role;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/',function() {

//    $user = User::create([
//             'first_name' => 'Mike' ,
//             'last_name' => 'Van',
//             'email' => 'mike@gmail.com',
//             'password' => '123',
//             'faceId' => 'kjkas90ieik'
//    ]);
   
//    $admin = Admin::create(
//                   [
//                   'phone_number' => '09797392',
//                    'role' => 'admin'
//                   ]);
    
    
  $admin = Admin::find(28)->with('role')->get();
    
    //  $role = $admin->role()->create([
    //     'user_id' => 1
    // ]);
    
    return $admin;
    
});
