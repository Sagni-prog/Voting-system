<?php 

namespace App\Repositories\User;
use App\Models\User;
use App\Services\HashService;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;

class UserRepository implements UserRepositoryInterface{
  
    private $user;
    private $hashService;
    public $role;

    public function __construct(User $user, HashService $hashService){
       
       $this->user = $user;
       $this->hashService = $hashService;
    }
    
    public function setRole($role): UserRepository{
       
       $this->role = $role;
       return $this;
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
                'password'=>  $this->hashService->makeHash($data['password']),
                'faceId' => $data['faceId'] ?  $data['faceId'] : null
       ]);
    }
    
    public function getCurrentlyAuthenticatedUser(){
       
       return Auth::user();
       
    }
    
   public function updateUserPassword($user, $data){
    
       return $user->update([
            'password' => $this->hashService->makeHash($data['password'])
        ]);
    }
    
    public function getActiveNotBannedWhereRole(){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role',$this->role);
                         })->get();
            }
            
    public function getActiveNotBannedWhereRoleChairman(){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role','chairman');
                         })->get();
            }
            
    // public function getActiveNotBannedWhereRoleWith($role){
    //      return $this->user->with('role.roleable','photos')
    //                        ->where([
    //                                   'isActive' => true,
    //                                   'isBanned' => false,
    //                                   'isDeleted' => false
    //                                   ])
    //                        ->whereHas('role.roleable',function($query){
    //                               $query->where('role',$role);
    //                       })->get();
    // }        
            
    public function findActiveNotBannedWhereRole($id){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'id' => $id,
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role',$this->role);
                         })->first();
            }
            
    public function findActiveNotBannedWhereRoleChairman($id){
        
        return $this->user->with('role.roleable','photos')
                          ->where([
                                   'id' => $id,
                                   'isActive' => true,
                                   'isBanned' => false,
                                   'isDeleted' => false
                                   ])
                          ->whereHas('role.roleable',function($query){
                                 $query->where('role','chairman');
                         })->first();
            }
            
    // public function findActiveNotBannedWhereRoleWith($id, $role){
        
    //     return $this->user->with('role.roleable.chairman','photos')
    //                       ->where([
    //                                 'id' => $id,
    //                                 'isActive' => true,
    //                                 'isBanned' => false,
    //                                 'isDeleted' => false
    //                            ])
    //                       ->whereHas('role.roleable',function($query){
    //                               $query->where('role',$role);
    //                     })->first();
    // }
    
    public function updateUser($user, $data){
        
       return $user->update([      
                        'first_name'=> $data['first_name'],
                        'last_name' => $data['last_name'],
                        'email'=> $data['email']
                ]);
    }
    
    public function verifyUser($user){
    
        return $user->update([
                 'isActive' => true
        ]);
    }
    
    public function destroyUser($user){
        
        return $user->update([
                    'isDeleted' => true,
                    'deleted_at'  => Carbon::now() 
                ]);
    }
    
    public function banUser($user){
        
        return $user->update([
                'isBanned' => true,
                'banned_at' => Carbon::now()
             ]);
    }
    
    public function unBanUser($user){
        
        return $user->update([
                'isBanned' => false,
                'banned_at' => null
             ]);
    }
}