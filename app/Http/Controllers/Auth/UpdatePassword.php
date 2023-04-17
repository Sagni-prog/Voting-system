<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\User\UserRepositoryInterface;
use App\Http\Requests\UpdatePasswordRequest;

class UpdatePassword extends Controller
{
    private $userRepository;
    
    public function __construct(UserRepositoryInterface $userRepository){
       
       $this->userRepository = $userRepository;
       
    }
    public function update(UpdatePasswordRequest $request){
       
       $data = $request->validated();
       $user = $this->userRepository->getCurrentlyAuthenticatedUser();
       $status = $this->userRepository->updateUserPassword($user,$data);
       
       if(!$status){
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong, please try again'
          ],400);
       }
    
       return response()->json([
           'status' => 'sucess',
           'messsage' => 'You have sucessfully changed your password',
           'user' => $user
       ],200);
       
    }
}
