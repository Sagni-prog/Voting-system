<?php

namespace App\Factory\UserFactory;

use Illuminate\Support\Facades\DB;
use App\Factory\UserFactory\UserFactory;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\RegisteredCandidate\RegisteredCandidateRepositoryInterface;

use App\Models\User;


class CandidateFactory implements UserFactory{
    
    private $userRepository;
    private $roleRepository;
    private $candidateRepository;
    private $registeredCandidate;
    
    public function __construct(
        UserRepositoryInterface $userRepository, 
        CandidateRepositoryInterface $candidateRepository,
        RoleRepositoryInterface $roleRepository,
        RegisteredCandidateRepositoryInterface $registeredCandidate,
        ){
            
            $this->userRepository = $userRepository;
            $this->roleRepository = $roleRepository;
            $this->candidateRepository = $candidateRepository;
            $this->registeredCandidate = $registeredCandidate;
     
    }
    
    public function create(array $data): User{
          DB::beginTransaction();
            $user = $this->userRepository->storeUser($data); 
            $candidate = $this->candidateRepository->storeCandidate($data);
            $role = $this->roleRepository->storeRole($candidate, $user->id);
            // $this->registeredCandidate->store($data,  $user->id);
            
         if(!$user | !$candidate | !$role){
         
           DB::rollback();
         }   
          DB::commit();
            $user = $this->userRepository->findUserById($user->id);
        return $user;
      
    }
}