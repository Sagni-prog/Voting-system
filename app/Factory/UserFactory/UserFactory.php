<?php

namespace App\Factory\UserFactory;

use App\Models\User;

Interface UserFactory{
   
   public function create(array $data): User;
}