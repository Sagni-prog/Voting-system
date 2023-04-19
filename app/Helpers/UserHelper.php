<?php

namespace App\Helpers;

use App\Repositories\User\UserRepositoryInterface;

class UserHelper{

   private $userRepository;
   
   public function __construct(UserRepositoryInterface $userRepository){
      
      $this->userRepository = $userRepository;
   }
   
   
   public function getCurrentlyAuthenticatedUsersRole(){
      
      return $this->userRepository->getCurrentlyAuthenticatedUser()->role->roleable->role;
   }
}