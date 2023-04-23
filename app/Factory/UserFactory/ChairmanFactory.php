<?php

namespace App\Factory\UserFactory;

use App\Factory\UserFactory\UserFactory;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;

use App\Models\User;


class ChairmanFactory implements UserFactory{
    
    private $userRepository;
    private $roleRepository;
    private $chairmanRepository;
    
    public function __construct(
        UserRepositoryInterface $userRepository, 
        ChairmanRepositoryInterface $voterRepository,
        RoleRepositoryInterface $roleRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->roleRepository = $roleRepository;
            $this->chairmanRepository = $chairmanRepository;
     
    }
    
    public function create(array $data): User{
            $user = $this->userRepository->storeUser($data); 
            $voter = $this->chairmanRepository->storeVoter($data);
            $role = $this->roleRepository->storeRole($candidate, $user->id);
            $user = $this->userRepository->findUserById($user->id);
        return $user;
      
    }
}