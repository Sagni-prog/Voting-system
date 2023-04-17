<?php

namespace App\Repositories\Admin;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Admin\AdminRepository;
use App\Repositories\Admin\AdminRepositoryInterface;


class AdminRepositoryServiceProvider extends ServiceProvider{
   
   public function register(){
   
      $this->app->bind(AdminRepositoryInterface::class,AdminRepository::class);
   }
   
   public function boot(){
   
   }
}