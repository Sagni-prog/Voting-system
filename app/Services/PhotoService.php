<?php 

namespace App\Services;

use App\Repositories\Photo\PhotoRepositoryInterface;
use Storage;

class PhotoService{

  private $photoRepository;
  
  public function __construct(PhotoRepositoryInterface $photoRepository){
      
      $this->photoRepository = $photoRepository;
  }
   
   
   public function updateOrStorePhoto($request, $userPhoto, $user){
       
       if($request->hasFile('photo')){
       
           $photo = $request->file('photo');
       
           $photo_name = $this->generatePhotoName($this->photoExtension($photo));
           $path = $this->storePhoto($photo, $photo_name);
           $width = $this->photoDimensions($path)['width'];
           $height = $this->photoDimensions($path)['height'];
           $image_url = $this->generatePhotoUrl($path);
           
           $data = $this->generateArray($photo_name, $path,  $image_url, $width,  $height);
          
          if(!$user->photos->count()){
                 $this->photoRepository->storePhoto($user, $data);
          }
                 $this->photoRepository->updatePhoto($user, $data);
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
                        "photo_name" => $photo_name,
                        "photo_path" => $photo_path,
                        "photo_url" =>  $photo_url,
                        "photo_width" => $photo_width,
                        "photo_height" => $photo_height
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
   
   public static function storePhoto($photo, $photo_name){
      
      $path = $photo->storeAs('profile-photo', $photo_name);
      
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