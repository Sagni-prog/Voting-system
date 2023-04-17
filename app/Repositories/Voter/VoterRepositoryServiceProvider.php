<?php

namespace App\Repositories\Voter;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Voter\VoterRepository;
use App\Repositories\Voter\VoterRepositoryInterface;

class VoterRepositoryServiceProvider extends ServiceProvider{
     
     public function register(){
         
         $this->app->bind(VoterRepositoryInterface::class,VoterRepository::class);
     }
}