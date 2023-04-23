<?php

namespace App\Factory\UserFactory\Manager;

use App\Factory\UserFactory\UserFactory;
use App\Factory\UserFactory\AdminFactory;
use App\Factory\UserFactory\CandidateFactory;
use App\Factory\UserFactory\Manager\UserFactoryManagerInterface;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;


class UserFactoryManager implements UserFactoryMangerInterface{

 
    private $userRepository;
    private $adminRepository;
    private $roleRepository;
    private $candidateRepository;
    
    public function __construct(
                   UserRepositoryInterface $userRepository, 
                   AdminRepositoryInterface $adminRepository,
                   RoleRepositoryInterface $roleRepository,
                   CandidateRepositoryInterface $candidateRepository,
                   ){
    
       $this->userRepository = $userRepository;
       $this->adminRepository = $adminRepository;
       $this->roleRepository = $roleRepository;
       $this->candidateRepository = $candidateRepository;
       
      }
   
   public function make(string $role): UserFactory{
        
        switch($role){
           
           case $role === 'admin':
              $factory = new AdminFactory(
                                  $this->userRepository,
                                  $this->adminRepository,
                                  $this->roleRepository
                                );
              return $factory;
           case $role === 'candidate': 
               $factory = new CandidateFactory(
                                    $this->userRepository,
                                    $this->candidateRepository,
                                    $this->roleRepository
                   );
                   return $factory;
        }
   }
}