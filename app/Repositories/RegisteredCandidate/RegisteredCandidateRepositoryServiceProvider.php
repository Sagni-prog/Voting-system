<?php 

namespace App\Repositories\RegisteredCandidate;

use Illuminate\Support\ServiceProvider;

use App\Repositories\RegisteredCandidate\RegisteredCandidateRepository;
use App\Repositories\RegisteredCandidate\RegisteredCandidateRepositoryInterface;

class RegisteredCandidateRepositoryServiceProvider extends ServiceProvider{
    
    public function register(){
       
       $this->app->bind(
                        RegisteredCandidateRepositoryInterface::class, 
                        RegisteredCandidateRepository::class
                    );
       
    }
} 