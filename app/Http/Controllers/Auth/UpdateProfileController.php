<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\UpdateProfileRequest;

use App\Repositories\User\UserRepositoryInterface;
// use App\Repositories\Admin\AdminRepositoryInterface;

use App\Services\PhotoService;



class UpdateProfileController extends Controller
{

  private $userRepository;
  private $adminRepository;
  private $photoService;
  
  public function __construct(
              UserRepositoryInterface $userRepository, 
            //   AdminRepositoryInterface $adminRepository,
              PhotoService $photoService
            ){
       
       $this->userRepository = $userRepository;
    //    $this->adminRepository = $adminRepository;
       $this->photoService = $photoService;
  }
  
public function update(UpdateProfileRequest $request,$id){
      
    try {
  
     DB::beginTransaction();
        $data = $request->validated();
        // $user = $this->userRepository->getCurrentlyAuthenticatedUser();
        $user = $this->userRepository->findUserById($id);
        $userUpdated = $this->userRepository->updateUser($user, $data);
        $this->photoService->updateOrStorePhoto($request, $user->photos, $user);
        // $adminUpdated = $this->adminRepository->updateAdmin($user->role->roleable(), $data);
    DB::commit();    
    
        return response()->json([
           'status' => 'sucess',
           'message' => 'You have sucessfully changed your profile'
        ],200);
        
    } catch (\Exception $exception) {
    
    DB::rollback();
         return response()->json([
             'status' => 'fail',
             'message' => 'Oops! sonthing went wrong',
             'error' => $exception->getMessage()
         ]);
       }
    }
       
}
