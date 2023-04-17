<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use Hash;
use App\Models\User;
use App\Models\Voter;
use App\Models\Admin;
use App\Services\TokenManagerService;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\AdminRegistrationRequest;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;


class AuthController extends Controller
{

  private $userRepository;
  private $tokenService;
  private $adminRepository;
  
  public function __construct(
        TokenManagerService $tokenService,
        UserRepositoryInterface $userRepository,
        AdminRepositoryInterface $adminRepository
        ){
  
     $this->tokenService = $tokenService;
     $this->userRepository = $userRepository;
     $this->adminRepository = $adminRepository;
     
  }

      //   Registering user 
    public function register(AdminRegistrationRequest $request){
        try{
        
            $data = $request->validated();
            $user = $this->userRepository->storeUser($data);
            
            if(!$user){
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong, try again'
                   ],400);
                }
    
    $admin = $this->adminRepository->storeAdmin($data);
       return $admin;
    
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
    
    
    public function login(LoginRequest $request){
     try{
        
        $data = $request->validated();
        $user = $this->userRepository->findUserWhere($data);
    
    if(!$user){
          return response()->json([
              "status" => "fail",
              "message" => "Wrong Credentials, try again"
          ],401);
    }
    
    // if(!$request->faceId){
    //   return response()->json([
    //      'status' => 'fail',
    //      'message' => 'no face id'
    //   ],400);
   // }
    
    // if($user->faceId != $request->faceId){
    //    return responce()->json([
    //       'status' => 'fail',
    //       'message' => 'face doesnt match',
    //       'reqId' => $request->faceId,
    //       'realface' => $user->faceId
    //    ],401);
   // }
   
      if(!Hash::check($request->password, $user->password)){
      
          return response()->json([
              "status" => "fail",
              "message" => "Wrong credentials"
          ],401);
       }
    
       $token = $this->tokenService->createToken($user)->plainTextToken;
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
                "message"=>'Something went wrong'
            ],500);
         }
     }
}
