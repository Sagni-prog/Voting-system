<?php 

namespace App\Repositories\User;
use App\Models\User;
use Hash;
use Auth;

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
    
    public function findUserById($id){
        
        return $this->user->where([
                    'id'=> $id
          ])->with('photos','role.roleable')->first();
    }
    public function findUser($id,$status){
       
        return $this->user->where([
                        'id'=> $id,
                        'isActive' => $status
          ])->with('photos','role.roleable')->first();
    }
    public function getAllActiveUsers(){
        
        return $this->user->where([
                'isActive' => 1
          ])->with('photos','role.roleable')->get();
        
    }
    public function getAllUsers(){
        
        return $this->user->with('photos','role.roleable')
                          ->get();
        
    }
    public function getAllInactiveUsers(){
       
        return $this->user->where([
                'isActive' => 0
         ])->with('photos','role.roleable')->get();
       
    }
    
    public function storeUser($data){
       
       return $this->user->create([
                'first_name'=> $data['first_name'],
                'last_name'=> $data['last_name'],
                'email'=> $data['email'],
                'password'=>Hash::make($data['password']),
                'faceId' => 'kjioa9aeodw3098imzknj'
       ]);
    }
    
    public function getCurrentlyAuthenticatedUser(){
       
       return Auth::user();
       
    }
    
   public function updateUserPassword($user, $data){
    
       return $user->update([
            'password' => Hash::make($data['password'])
        ]);
    }
}