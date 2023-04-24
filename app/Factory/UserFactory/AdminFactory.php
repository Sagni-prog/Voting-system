<?php

namespace App\Factory\UserFactory;

use Illuminate\Support\Facades\DB;
use App\Factory\UserFactory\UserFactory;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;

use App\Models\User;

class AdminFactory implements UserFactory{

  private $userRepository;
  private $adminRepository;
  private $roleRepository;
  
  public function __construct(
                 UserRepositoryInterface $userRepository, 
                 AdminRepositoryInterface $adminRepository,
                 RoleRepositoryInterface $roleRepository
                 ){
  
     $this->userRepository = $userRepository;
     $this->adminRepository = $adminRepository;
     $this->roleRepository = $roleRepository;
     
    }
    
    public function create(array $data): User{
            DB::beginTransaction();
              $user = $this->userRepository->storeUser($data); 
              $admin = $this->adminRepository->storeAdmin($data);
              $role = $this->roleRepository->storeRole($admin,$user->id);
              
              if(!$user | !$admin | !$role){
                  DB::rollback();
                }
                DB::commit();
            $user = $this->userRepository->findUserById($user->id);
            
        return $user;
      
    }

}