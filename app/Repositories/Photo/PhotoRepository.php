<?php

namespace App\Repositories\Photo;

use App\Repositories\Photo\PhotoRepositoryInterface;
use App\Models\Photo;

class PhotoRepository implements PhotoRepositoryInterface{
   
   
    public function storePhoto($photo, $data){
    
        return $photo->create([
                    "photo_name" => $data['photo_name'],
                    "photo_path" => $data['photo_path'],
                    "photo_url" => $data['photo_url'],
                    "photo_width" => $data['photo_width'],
                    "photo_height" => $data['photo_height']
                        ]);
     }
     
     public function updatePhoto($photo, $data){
        
        return $photo->update([
            "photo_name" => $data['photo_name'],
            "photo_path" => $data['photo_path'],
            "photo_url" => $data['photo_url'],
            "photo_width" => $data['photo_width'],
            "photo_height" => $data['photo_height']
                ]);
     }
}