<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use \Carbon\Carbon;
use Hash;
use App\Models\User;
use App\Models\Voter;
use App\Models\Candidate;
use App\Models\Chairman;
use Auth;
use App\Http\Requests\VoterRegistrationRequest;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInteface;
use App\Repositories\Candidate\CandidateRepositoryInteface;
use App\Repositories\Chairman\ChairmanRepositoryInteface;
use App\Repositories\Role\RoleRepositoryInteface;
use App\Services\TokenManagerService;
use Illuminate\Support\Facades\DB;



class RegistrationController extends Controller{
    
    private $userRepository;
    private $voterRepository;
    private $roleRepository;
    private $candidateRepository;
    private $chairmanRepository;
    private $tokenService;
    
    public function __construct(
                  UserRepositoryInterface $userRepository,
                  VoterRepositoryInteface $voterRepository,
                  CandidateRepositoryInteface $candidateRepository,
                  ChairmanRepositoryInteface $chairmanRepository,
                  RoleRepositoryInteface $roleRepository,
                  TokenManagerService $tokenService,
                  ){
        
        $this->userRepository = $userRepository;
        $this->voterRepository = $voterRepository;
        $this->roleRepository = $roleRepository;
        $this->candidateRepository = $candidateRepository;
        $this->$chairmanRepository = $chairmanRepository;
        $this->tokenService = $tokenService;
    }
 
    /*
    |-------------------------------------------------------------------------------------|
    |                              Registering Voter                                      |
    |-------------------------------------------------------------------------------------|
    */
    public function registerVoter(VoterRegistrationRequest $request){
        try{
        
        DB::beginTransaction();
            $data = $request->validated();
            $user = $this->userRepository->storeUse($data);
            $voter = $this->voterRepository->storeVoter($data);
            $role = $this->roleRepository->storeRole($voter, $user->id);
        DB::commit();
           $voter = $this->userRepository->findUserById($user->id);
           $token = $this->tokenService->createToken($user);
                           
            return response()->json([
                    'status'=> 'sucess',
                    'message'=>'user created succesfully',
                    'voter' => $voter,
                    'token'=>$token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
          DB::rollback();
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
                'admission_year' => ['required'],
                'educational_year' => ['required'],
                'department' => ['required','string'],
                'gpa' => ['required'],
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
                                'exam_score' => $request->exam_score,
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
                                'role' => 'chairman',
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