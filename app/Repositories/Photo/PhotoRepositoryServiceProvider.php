<?php

namespace App\Repositories\Photo;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Photo\PhotoRepository;
use App\Repositories\Photo\PhotoRepositoryInterface;

class PhotoRepositoryServiceProvider extends ServiceProvider{

   public function register(){
   
       $this->app->bind(PhotoRepositoryInterface::class,PhotoRepository::class);
    }

}