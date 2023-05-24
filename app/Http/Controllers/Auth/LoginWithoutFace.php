<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\TokenManagerService;
use App\Http\Requests\LoginRequest;
use App\Repositories\User\UserRepositoryInterface;
use Hash;

class LoginWithoutFace extends Controller
{
    private $userRepository;
    private $tokenService;

    public function __construct(
        TokenManagerService $tokenService,
        UserRepositoryInterface $userRepository,
       ){
 
    $this->tokenService = $tokenService;
    $this->userRepository = $userRepository;
 }
    
    public function __invoke(LoginRequest $request)
    {
        try{    
            $data = $request->validated();
            $user = $this->userRepository->findUserWhere($data);
            
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
