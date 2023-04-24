<?php

namespace App\Factory\UserFactory;

use Illuminate\Support\Facades\DB;
use App\Factory\UserFactory\UserFactory;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;

use App\Models\User;



class VoterFactory implements UserFactory{
    
    private $userRepository;
    private $roleRepository;
    private $voterRepository;
    
    public function __construct(
        UserRepositoryInterface $userRepository, 
        VoterRepositoryInterface $voterRepository,
        RoleRepositoryInterface $roleRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->roleRepository = $roleRepository;
            $this->voterRepository = $voterRepository;
     
    }
    
    public function create(array $data): User{
    
             DB::beginTransaction();
                $user = $this->userRepository->storeUser($data); 
                $voter = $this->voterRepository->storeVoter($data);
                $role = $this->roleRepository->storeRole($voter, $user->id);
                
                if(!$user | !$voter | !$role){
                    DB::rollback();
                }    
                DB::commit();    
                $user = $this->userRepository->findUserById($user->id);
                
             return $user;
    }
}