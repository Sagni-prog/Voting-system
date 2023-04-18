<?php

namespace App\Repositories\Photo;

Interface PhotoRepositoryInterface{
    
    public function storePhoto();
    public function updatePhoto($photo);
}