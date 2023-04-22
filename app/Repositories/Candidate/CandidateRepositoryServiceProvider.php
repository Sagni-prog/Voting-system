<?php 

namespace App\Repositories\Candidate;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Candidate\CandidateRepository;
use App\Repositories\Candidate\CandidateRepositoryInterface;




class CandidateRepositoryServiceProvider extends ServiceProvider{

   public function register(){
   
       $this->app->bind(CandidateRepositoryInterface::class,CandidateRepository::class);
   }
}
