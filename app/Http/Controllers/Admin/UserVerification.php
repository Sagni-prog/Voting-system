<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Auth;
use App\Repositories\User\UserRepositoryInterface;

class UserVerification extends Controller
{
  private $userRepository;
  
  public function __construct(UserRepositoryInterface $userRepository){
      
      $this->userRepository = $userRepository;
  }
  public function edit($id){
        try {
        
            $user = $this->userRepository->findUserById($id);
            $verified = $this->userRepository->verifyUser($user);
      
            if(!$verified){
               return respose()->json([
                  'status' => 'fail',
                  'message' => 'Oops! something went wrong try again'
               ],400);
             }
             
             return response()->json([
                'status' => 'sucess',
                'message' => 'successfully verified the user'
             ],200);
               
         } catch (\Exception $exception) {
             return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong try again please',
                'error' => $exception->getMessage()
             ],500);
         }
 }  
     
  public function banUser(Request $request,$id){
     
     $user = $this->userRepository->findUserById($id);
     $ban = $this->userRepository->banUser($user);
     
     if(!$ban){
        return response()->json([
          'status' => 'fail',
          'message' => 'Oops something went wront'
        ],400);
      }
      return response()->json([
         'status' => 'success',
         'message' => 'successfully banned'
      ],200);
 }
    
  public function unBan($id){
      
      $user = $this->userRepository->findUserById($id);
      $unBanned = $this->userRepository->unBanUser($user);
      
      if(!$unBanned){
         return response()->json([
           'status' => 'fail',
           'message' => 'Oops something went wront'
         ],400);
       }
       return response()->json([
          'status' => 'success',
          'message' => 'successfully unBanned'
       ],200);
      
  }
}
