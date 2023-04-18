<?php

namespace App\Repositories\Chairman;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Chairman\ChairmanRepository;
use App\Repositories\Chairman\ChairmanRepositoryInterface;

class ChairmanRepositoryServiceProvider extends ServiceProvider{


   public function register(){
     
     $this->app->bind(ChairmanRepositoryInterface::class,ChairmanRepository::class);
   }
}