<?php 

namespace App\Factory\UserFactory\Manager;

use App\Factory\UserFactory\UserFactory;

Interface UserFactoryMangerInterface{
   
   public function make(string $role): UserFactory;
}