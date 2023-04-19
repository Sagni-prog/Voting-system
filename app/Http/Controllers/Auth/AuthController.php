<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Services\TokenManagerService;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\AdminRegistrationRequest;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;

use App\Factory\UserFactory\AdminFactory;
use Hash;


class AuthController extends Controller
{

  private $userRepository;
  private $tokenService;
  private $adminRepository;
  private $roelRepository;
  private $adminFactoy;
  
  public function __construct(
         TokenManagerService $tokenService,
         UserRepositoryInterface $userRepository,
         AdminRepositoryInterface $adminRepository,
         RoleRepositoryInterface $roelRepository,
         AdminFactory $adminFactoy
        ){
  
     $this->tokenService = $tokenService;
     $this->userRepository = $userRepository;
     $this->adminRepository = $adminRepository;
     $this->roleRepository = $roelRepository;
     $this->adminFactoy = $adminFactoy;
     
  }

      //   Registering user 
    public function register(AdminRegistrationRequest $request){
        try{
        
           DB::beginTransaction();
        
    $data = $request->validated();
    //   $this->adminFactory->create($data);
    $user = $this->userRepository->storeUser($data); 
    $admin = $this->adminRepository->storeAdmin($data);
    $role = $this->roleRepository->storeRole($admin,$user->id);
    DB::commit();
        $admin = $this->userRepository->findUserById($user->id);   
        $token = $this->tokenService->createToken($user)->plainTextToken;
                     
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'user' => $admin,
                'token'=> $token
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
