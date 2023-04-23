<?php

namespace App\Factory\UserFactory;

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
            $user = $this->userRepository->storeUser($data); 
            $voter = $this->voterRepository->storeVoter($data);
            $role = $this->roleRepository->storeRole($candidate, $user->id);
            $user = $this->userRepository->findUserById($user->id);
        return $user;
      
    }
}