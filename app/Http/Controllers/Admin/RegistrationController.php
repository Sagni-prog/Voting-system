<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use \Carbon\Carbon;
use Validator;
use Hash;
use App\Models\User;
use App\Models\Voter;
use App\Models\Candidate;
use App\Models\Chairman;


class RegistrationController extends Controller{
 
 
    /*
    |-------------------------------------------------------------------------------------|
    |                              Registering Voter                                      |
    |-------------------------------------------------------------------------------------|
    */
    public function registerVoter(Request $request){
        try{
        
        /*
        |------------------------------------------------------------------------------------|
        |                  Validating the inputs on the backend                              |
        |------------------------------------------------------------------------------------|
        |  name => is requires cant be empty, string, max length less than 255 characters    |
        |  email => is requires cant be empty, string, max length less than 255 characters,  |
        |          no duplicate value allowed                                                |
        |  password => is requires cant be empty, string, min length is 8 characters         |
        |  sex => required,must be type string                                               | 
        |------------------------------------------------------------------------------------|
        */ 
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
                'sex' => ['required','string'],
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
                    'faceId' => $request->faceId
                   ]
                );
        /*|---------------------------------------------------------------------------|
          |  if the registration fails return error message else return newly creared |
          |  user with token                                                          |
          |---------------------------------------------------------------------------|
        
        */ 
                if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong, try again'
                   ],400);
                }
        $voter = Voter::create([
                        'admin_id' => Auth::user()->id,
                        'sex' => $request->sex,
                        'role' => 'voter',
                        'status' => true,
                        'vote_id' => $request->vote_id
            ]);
        
        if(!$voter){
            
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        $role = $voter->role()->create([
            'user_id' => $user->id
        ]);
        
        if(!$role){
          $voter->delete();
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
 
        $voter = User::with('photos','role.roleable')
                      ->where([
                          'id' => $user->id,
                          'isActive' => true
                      ])->first();
                      
                      
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'voter' => $voter,
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
    
    
    /*
    |-------------------------------------------------------------------------------------|
    |                        Registering Candidate                                        |
    |-------------------------------------------------------------------------------------|
    */
    
    public function registerCandidate(Request $request){
        try{
        
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
                'admission_year' => ['required','timestamp'],
                'educational_year' => ['required','timestamp'],
                'department' => ['required','string'],
                'gpa' => ['required','float'],
                'exam_score' => ['required','integer'],
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
        $candidate = Candidate::create([
                                'sex' => 'male',
                                'role' => 'candidate',
                                'status' => true,
                                'admission_year' => $request->admission_date,
                                'educational_year' => $request->educatoinal_date,
                                'department' => $request->department,
                                'gpa' => $request->gpa,
                                'exam_score' => $request->exam_result,
                  ]);
        
        if(!$candidate){
        
           $user->delete();  
        } 
        
        $role = $candidate->role()->create([
            'user_id' => $user->id
        ]);
        
        if(!$role){
            $candidate->delete();
        }
               
  
        $candidate = User::with('photos','role.roleable')
                      ->where([
                          'id' => $user->id,
                          'isActive' => true
                      ])->first();
                      
                      
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'candidate' => $candidate,
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
    
    
    
    /*
    |-------------------------------------------------------------------------------------|
    |                        Registering Chairman                                         |
    |-------------------------------------------------------------------------------------|
    */
    
    public function registerChairman(Request $request){
        try{
        
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
                'sex' => ['required','string']
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
        $chairman = Chairman::create([
                                'sex' => $request->sex,
                                'role' => 'candidate',
                                'status' => true,
                ]);
        
        if(!$chairman){
            
            $user->delete();
        }
        
        $role = $chairman->role()->create([
            'user_id' => $user->id
        ]);
        
        if(!$role){
            
            $chairman->delete();
        }
               
  
        $chairman = User::with('photos','role.roleable')
                      ->where([
                          'id' => $user->id,
                          'isActive' => true
                      ])->first();
                      
                      
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'chairman' => $chairman,
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
    
}