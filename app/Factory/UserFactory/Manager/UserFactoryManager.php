<?php

namespace App\Factory\UserFactory\Manager;

use App\Factory\UserFactory\UserFactory;
use App\Factory\UserFactory\AdminFactory;
use App\Factory\UserFactory\CandidateFactory;
use App\Factory\UserFactory\VoterFactory;
use App\Factory\UserFactory\ChairmanFactory;
use App\Factory\UserFactory\Manager\UserFactoryManagerInterface;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;


class UserFactoryManager implements UserFactoryMangerInterface{

 
    private $userRepository;
    private $adminRepository;
    private $roleRepository;
    private $candidateRepository;
    private $voterRepository;
    private $chairmanRepository;
    
    public function __construct(
                   UserRepositoryInterface $userRepository, 
                   AdminRepositoryInterface $adminRepository,
                   RoleRepositoryInterface $roleRepository,
                   CandidateRepositoryInterface $candidateRepository,
                   VoterRepositoryInterface $voterRepository,
                   ChairmanRepositoryInterface $chairmanRepository,
                   ){
    
       $this->userRepository = $userRepository;
       $this->adminRepository = $adminRepository;
       $this->roleRepository = $roleRepository;
       $this->candidateRepository = $candidateRepository;
       $this->voterRepository = $voterRepository;
       $this->chairmanRepository = $chairmanRepository;
       
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
           case $role === 'voter': 
               $factory = new VoterFactory(
                                    $this->userRepository,
                                    $this->voterRepository,
                                    $this->roleRepository
                                 );
                     return $factory;           
           case $role === 'chairman':
                $factory = new ChairmanFactory(
                                    $this->userRepository,
                                    $this->chairmanRepository,
                                    $this->roleRepository
                                 );  
                      return $factory;              
        }
   }
}