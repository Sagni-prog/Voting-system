<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;

class HashService{
  
   public function makeHash($password){
      
      return Hash::make($password);
   }
}