<?php 

namespace App\Services;

use Storage;

class PhotoService{
   
   
   public function photoExtension($photo){
      
      return $photo->extension();
   }
   
   public function generatePhotoName($ext){
      
       $image_name = 'image';
       $filename = 'image-' . time() . '.' . $ext;
       return $filename;
   }
   
   public function storePhoto($photo){
      
      $path = $request->file('photo')->storeAs('profile-photo', $filename);
      
      return $path;
   }
   
   public function generatePhotoUrl($path){
      
       $image_url = Storage::url($path);
       
       return $image_url;
   }
   
   public function photoDimensions($path){
      
    [$width,$height] = getimagesize(Storage::path($path));

            $data = [
                "width" => $width,
                "height" => $height
            ];
             return $data;
   }
}