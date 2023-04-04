<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Hash;
use App\Models\User;
use App\Models\Voter;


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
                    'faceId' => 'kjioa9aeodw3098imzknj'
                   ]
                );
    
                if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong, try again'
                   ],400);
                }
               
  
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
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
          ],404);
    }
      $user = User::where([
                            'email'=> $request->email,
                            'isActive' => 1
                        ])->with('photos','role.roleable')->first();
    if(!$user){
          return response()->json([
              "status" => "fail",
              "message" => "Wrong Credentials, try again"
          ],404);
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
