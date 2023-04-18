<?php 

namespace App\Services;

use Storage;

class PhotoService{
   
   
   public function updateOrStorePhoto($request, $userPhoto){
       
       $photo = $request->file('photo');
       if($request->hasFile('photo')){
       
           $path = $this->storePhoto($photo, $this->photoExtension($photo));
           $width = $this->photoDimensions($path)['width'];
           $height = $this->photoDimensions($path)['height'];
           $image_url = $this->generatePhotoUrl($path);
           $photo_name = $this->generatePhotoName($this->photoExtension($photo));
           
           $data = $this->generateArray($photo_name, $path,  $image_url, $width,  $height);
          
          if(!$userPhoto){
               
               
          }
       }
   }
   
   public static function generateArray(
                          $photo_name, 
                          $photo_path,
                          $photo_url,
                          $photo_width,
                          $photo_height
            ){
                 
                 $data = array(
                        "photo_name" => $filename,
                        "photo_path" => $path,
                        "photo_url" => $image_url,
                        "photo_width" => $width,
                        "photo_height" => $height
                 );
                 
                 return $data;
      }
   
   public static function photoExtension($photo){
      
      return $photo->extension();
   }
   
   public static function generatePhotoName($ext){
      
       $image_name = 'image';
       $filename = 'image-' . time() . '.' . $ext;
       return $filename;
   }
   
   public static function storePhoto($photo, $photoName){
      
      $path = $photo->storeAs('profile-photo', $photoName);
      
      return $path;
   }
   
   public static function generatePhotoUrl($path){
      
       $image_url = Storage::url($path);
       
       return $image_url;
   }
   
   public static function photoDimensions($path){
      
    [$width,$height] = getimagesize(Storage::path($path));

            $data = [
                "width" => $width,
                "height" => $height
            ];
             return $data;
   }
}