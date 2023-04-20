<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;
use App\Http\Requests\UpdateChairmanProfile;

use App\Services\PhotoService;

class Updateprofile extends Controller
{
   private $userRepository;
   private $chairmanRepository;
   private $photoService;
   public function __construct(
                    UserRepositoryInterface $userRepository,
                    ChairmanRepositoryInterface $chairmanRepository,
                    PhotoService $photoService
            ){
      
      $this->userRepository = $userRepository;
      $this->userchairmanRepository = $userchairmanRepository;
      $this->$photoService = $photoService;
   }
    public function update(UpdateChairmanProfile $request){
    
        try {
             DB::beginTransaction();
                $data = $request->validated();
                $user = $this->userRepository->getCurrentlyAuthenticatedUser();
                $userUpdated = $this->userRepository->updateUser($user, $data);
                $this->photoService->updateOrStorePhoto($request, $user->photos, $user);  
                $chairmanUpdated =   $chairmanUpdated = $this->userchairmanRepository
                                                             ->updateChairman($user->role->roleable(), $data);
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
