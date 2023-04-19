<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Storage;
// use App\Http\Requests\UpdateAdminProfileRequest;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Services\PhotoService;
use App\Http\Requests\UpdateAdminProfileRequest;


class UpdateProfile extends Controller
{

  private $userRepository;
  private $adminRepository;
  private $photoService;
  
  public function __construct(
              UserRepositoryInterface $userRepository, 
              AdminRepositoryInterface $adminRepository,
              PhotoService $photoService
            ){
       
       $this->userRepository = $userRepository;
       $this->adminRepository = $adminRepository;
       $this->photoService = $photoService;
  }
    public function edit(UpdateAdminProfileRequest $request){
    
    try {
  
    
        $data = $request->validated();
        $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        $userUpdated = $this->userRepository->updateUser($user, $data);
            
            if(!$userUpdated){
               return response()->json([
                  'status' => 'fail',
                  'message' => 'Oops! something went wrong'
               ],400);
            
            }
            
            $this->photoService->updateOrStorePhoto($request, $user->photos, $user);
            
            // if($request->hasFile('photo')){

            //     $ext = $request->file('photo')->extension();
            //     $image_name = 'image';
            //     $filename = 'image-' . time() . '.' . $ext;
            //     $path = $request->file('photo')->storeAs('profile-photo', $filename);
            //     $image_url = Storage::url($path);

            //     $data = $this->getDimension($path);
            //     $width = $data['width'];
            //     $height = $data['height'];

         
            // if(!$user->photos->count()){

            //     $user->photos()->create([
            //         "photo_name" => $filename,
            //         "photo_path" => $path,
            //         "photo_url" => $image_url,
            //         "photo_width" => $width,
            //         "photo_height" => $height
            //             ]);
            // }
            // else{

            //     $user->photos()->update([
            //             "photo_name" => $filename,
            //             "photo_path" => $path,
            //             "photo_url" => $image_url,
            //             "photo_width" => $width,
            //             "photo_height" => $height
            //                 ]);
            //         }
            // }
            
            
            
        $adminUpdated = $user->role->roleable()->update([
                        'phone_number' => '+2511117323',
                        'role' => 'admin'
        ]);
        if(!$adminUpdated){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
             ],400);
        }
        
        return response()->json([
           'status' => 'sucess',
           'message' => 'You have sucessfully changed your profile'
        ],200);
        
    } catch (\Exception $exception) {
         return response()->json([
             'status' => 'fail',
             'message' => 'Oops! sonthing went wrong',
             'error' => $exception->getMessage()
         ]);
       }
    }
    
    public static function getDimension($path){

        [$width,$height] = getimagesize(Storage::path($path));

        $data = [
            "width" => $width,
            "height" => $height
        ];
         return $data;
    }
       
}
