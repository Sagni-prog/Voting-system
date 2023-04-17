<?php 

namespace App\Services;

use App\Models\User;

class TokenManagerService{

     public function createToken(User $user,array $abilities = ['*']){
     
        return $user->createToken('user-token');
     }
     
     public function destroyTokens(User $user,$abilities): void{
     
         $user->tokens()->delete();
     }

}