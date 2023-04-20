<?php

namespace App\Http\Controllers\Voter;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;
use App\Http\Requests\UpdateVoterProfileRequest;

use App\Services\PhotoService;

class Updateprofile extends Controller
{
   private $userRepository;
   private $chairmanRepository;
   private $photoService;
   public function __construct(
                    UserRepositoryInterface $userRepository,
                    VoterRepositoryInterface $voterRepository,
                    PhotoService $photoService
            ){
      
      $this->userRepository = $userRepository;
      $this->voterRepository = $voterRepository;
      $this->$photoService = $photoService;
   }
    public function update(UpdateVoterProfileRequest $request){
    
        try {
             DB::beginTransaction();
                $data = $request->validated();
                $user = $this->userRepository->getCurrentlyAuthenticatedUser();
                $userUpdated = $this->userRepository->updateUser($user, $data);
                $this->photoService->updateOrStorePhoto($request, $user->photos, $user);  
                $voterUpdated = $this->voterRepository->updateVoter($user->role->roleable(), $data);
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
