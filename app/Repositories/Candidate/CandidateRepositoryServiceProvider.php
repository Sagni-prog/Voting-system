<?php 

namespace App\Repositories\Candidate;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Candidate\CandidateRepository;
use App\Repositories\Candidate\CandidataRepositoryInterface;




class CandidateRepositoryServiceProvider extends ServiceProvider{

   public function register(){
       $this->app->bind(CandidataRepositoryInterface::class,CandidateRepository::class);
   }
}
