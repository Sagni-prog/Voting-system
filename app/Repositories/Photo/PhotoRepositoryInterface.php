<?php

namespace App\Repositories\Photo;

Interface PhotoRepositoryInterface{
    
    public function storePhoto($photo, $data);
    public function updatePhoto($photo, $data);
}