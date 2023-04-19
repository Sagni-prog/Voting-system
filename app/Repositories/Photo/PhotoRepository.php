<?php

namespace App\Repositories\Photo;

use App\Repositories\Photo\PhotoRepositoryInterface;
use App\Models\Photo;

class PhotoRepository implements PhotoRepositoryInterface{
   
   
    public function storePhoto($user, $data){
    
        return $user->photos()->create([
                    "photo_name" => $data['photo_name'],
                    "photo_path" => $data['photo_path'],
                    "photo_url" => $data['photo_url'],
                    "photo_width" => $data['photo_width'],
                    "photo_height" => $data['photo_height']
                        ]);
     }
     
     public function updatePhoto($user, $data){
        
        return $user->photos()->update([
            "photo_name" => $data['photo_name'],
            "photo_path" => $data['photo_path'],
            "photo_url" => $data['photo_url'],
            "photo_width" => $data['photo_width'],
            "photo_height" => $data['photo_height']
                ]);
     }
}