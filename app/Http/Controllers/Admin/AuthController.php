<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{

//   Registering user 
    public function register(Request $request){
        try{
        
        /*
        |------------------------------------------------------------------------------------|
        |                  Validating the inputs on the backend                              |
        |------------------------------------------------------------------------------------|
        |  name => is requires cant be empty, string, max length less than 255 characters    |
        |  email => is requires cant be empty, string, max length less than 255 characters,  |
        |          no duplicate value allowed                                                |
        |  password => is requires cant be empty, string, min length is 8 characters         |
        |                                                                                    | 
        |------------------------------------------------------------------------------------|
        */ 
            $uservalidator=Validator::make($request->all(),[
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required'],
            ]);

            $verification_token = random_int(0000,9999);
            if($uservalidator->fails()){
                return response()->json([
                    "status"=>false,
                    "message"=>"valitor error",
                    "error"=>$uservalidator->errors()
                ],404);
            }
            $user=User::create(
                [
                    'name'=>$request->name,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->password),
                    'verification_token' => $verification_token,
                    'token_created_at' =>  Carbon::now()
                   ]
                );
        /*|---------------------------------------------------------------------------|
          |  if the registration fails return error message else return newly creared |
          |  user                                                                     |
          |---------------------------------------------------------------------------|
        
        */ 
                if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong try again'
                   ],400);
                }
               
  
        /*|----------------------------------------------------------------------------------------|
          |  if the user is sucrssfully registered a unique token is created and send to the       |
          |  user before being encrypted the encrypted and stored in the database,                 | 
          |  and the token is attached on the http header and sent for every request made by the   |
          |  client                                                                                | 
          |----------------------------------------------------------------------------------------|
        
        */ 
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'token'=>$user->createtoken('user_token')->plainTextToken
            ] ,201);
        }
        catch(\Throwable $th){
            return response()->json([
                "status"=>true,
                "message"=>$th->getMessage()
            ],500);
        }
    }
}
