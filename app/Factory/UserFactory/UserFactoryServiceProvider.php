<?php

namespace App\Factory\UserFactory;

use Illuminate\Support\ServiceProvider;

use App\Factory\UserFactory\Manager\UserFactoryManager;
use App\Factory\UserFactory\Manager\UserFactoryManagerInterface;

class UserFactoryServiceProvider extends ServiceProvider{
    
    public function register(){
       
       $this->app->bind(UserFactoryManagerInterface::class, UserFactoryManager::class);
    }
}

