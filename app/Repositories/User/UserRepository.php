<?php 

namespace App\Repositories\User;
use App\Models\User;

use App\Repositories\User\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface{
  
    private $user;

    public function __construct(User $user){
       
       $this->user = $user;
    }
    

    public function findUserWhere($data){
    
        return $this->user->where([
                'email'=> $data['email'],
                'isActive' => 1
        ])->with('photos','role.roleable')->first();
      
    }
    public function findUser($id,$status){
       
        return;
    }
    public function getAllActiveUsers(){
        
        return;
        
    }
    public function getAllUsers(){
        
        return;
        
    }
    public function getAllInactiveUsers(){
       
       return;
       
    }
}