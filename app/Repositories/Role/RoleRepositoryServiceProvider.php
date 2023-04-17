<?php

namespace App\Repositories\Role;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Role\RoleRepository;
use App\Repositories\Role\RoleRepositoryInterface;

class RoleRepositoryServiceProvider extends ServiceProvider{

  public function register(){
     
      $this->app->bind(RoleRepositoryInterface::class,RoleRepository::class);
      
  }

}