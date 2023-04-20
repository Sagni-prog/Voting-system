<?php

namespace App\Repositories\VoteBallot;

use Illuminate\Support\ServiceProvider;

class VoteBallotRepositoryServiceProvider extends ServiceProvider{
    
    public function register(){
        
        $this->app->bind(VoteBallotRepositoryInterface::class, VoteBallotRepository::class);
    }
}

