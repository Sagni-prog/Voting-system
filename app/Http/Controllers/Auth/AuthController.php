<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Hash;
use App\Models\User;
use App\Models\Voter;
use App\Models\Admin;


class AuthController extends Controller
{

//   Registering user 
    public function register(Request $request){
        try{
        
       
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
                // 'phone_number' => ['required','integer','max:10']
            ]);

            if($uservalidator->fails()){
                return response()->json([
                    "status"=>false,
                    "message"=>"valitor error",
                    "error"=>$uservalidator->errors()
                ],404);
            }
            $user=User::create(
                [
                    'first_name'=>$request->first_name,
                    'last_name'=>$request->last_name,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->password),
                    'faceId' => 'kjioa9aeodw3098imzknj',
                   
                   ]
                );
    
                if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong, try again'
                   ],400);
                }
                
  
    $admin = Admin::create([
        'phone_number' => '095828283',
        'role' => 'admin'
    ]);
    
        if(!$admin){
           $user->delete();
        }
        
        $role = $admin->role()->create([
            'user_id' => $user->id
        ]);
        
        if(!$role){
            
            $admin->delete();
        }
        
        $admin = User::with('role.roleable')
                     ->where('id',$user->id)
                     ->first();
                     
         if(!$admin){
            return response()->json([
               'status' => 'fail',
               'message' => 'Oops! something went wrong',
               
            ],404);
         }            
                     
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'user' => $admin,
                'token'=>$user->createtoken('user_token')->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
    
    
    public function login(Request $request){
        try{
    
        $loginvaliditor=$request->validate([
        
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required','string','min:8'],
      ]);
    
      if(!$loginvaliditor){
          return response()->json([
              "status"=> "fail",
              "message"=>"valitor error"
          ],400);
    }
      $user = User::where([
                            'email'=> $request->email,
                            'isActive' => 1
                        ])->with('photos','role.roleable')->first();
    if(!$user){
          return response()->json([
              "status" => "fail",
              "message" => "Wrong Credentials, try again"
          ],401);
    }
      if(!Hash::check($request->password, $user->password)){
          return response()->json([
              "status" => "fail",
              "message" => "Wrong credentials"
          ]);
       }
    
       $token = $user->createToken('user_token')->plainTextToken;
       return response()->json([
                   "status" => "success",
                   "token" => $token,
                   "user" => $user,
                   'role' => $user->role,
                   'rolable' => $user->role->roleable
       ],200);
      }catch(\Exception $exception){
            return response()->json([
                "status"=>"fail",
                "message"=>$exception->getMessage()
            ],500);
         }
     }
}
