<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Http\Requests\VoterRegistrationRequest;
use App\Http\Requests\CandidateRegistrationRequest;
use App\Http\Requests\ChairmanRegistrationRequest;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\Chairman\ChairmanRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;

use App\Factory\UserFactory\Manager\UserFactoryManager;

use App\Services\TokenManagerService;

use App\Helpers\GetFaceId;
use App\Helpers\UserHelper;




class RegistrationController extends Controller{
    
    private $userRepository;
    private $voterRepository;
    private $roleRepository;
    private $candidateRepository;
    private $chairmanRepository;
    private $faceIdHelper;
    private $tokenService;
    private $userHelper;
    private $userFactory;
    
    public function __construct(
                  UserRepositoryInterface $userRepository,
                  VoterRepositoryInterface $voterRepository,
                  CandidateRepositoryInterface $candidateRepository,
                  ChairmanRepositoryInterface $chairmanRepository,
                  RoleRepositoryInterface $roleRepository,
                  TokenManagerService $tokenService,
                  GetFaceId $faceIdHelper,
                  UserHelper $userHelper,
                  UserFactoryManager $userFactory,
                  ){
        
        $this->userRepository = $userRepository;
        $this->voterRepository = $voterRepository;
        $this->roleRepository = $roleRepository;
        $this->candidateRepository = $candidateRepository;
        $this->chairmanRepository = $chairmanRepository;
        $this->tokenService = $tokenService;
        $this->faceIdHelper = $faceIdHelper;
        $this->userHelper = $userHelper;
        $this->userFactory = $userFactory;
    }
 
    /*
    |-------------------------------------------------------------------------------------|
    |                              Registering Voter                                      |
    |-------------------------------------------------------------------------------------|
    */
    public function registerVoter(VoterRegistrationRequest $request){
        try{
        
        DB::beginTransaction();
            $data = $request->validated();
            $data['faceId'] = $this->faceIdHelper->getFaceId();
            $user = $this->userRepository->storeUser($data);
            $voter = $this->voterRepository->storeVoter($data);
            $role = $this->roleRepository->storeRole($voter, $user->id);
        DB::commit();
           $voter = $this->userRepository->findUserById($user->id);
           $token = $this->tokenService->createToken($user);
                           
            return response()->json([
                    'status'=> 'sucess',
                    'message'=>'user created succesfully',
                    'voter' => $voter,
                    'token'=>$token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
          DB::rollback();
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
    
    /*
    |-------------------------------------------------------------------------------------|
    |                        Registering Candidate                                        |
    |-------------------------------------------------------------------------------------|
    */
    
    public function registerCandidate(CandidateRegistrationRequest $request){
        try{
            
            DB::beginTransaction();
                $data = $request->validated();
                $data['faceId'] =  $this->faceIdHelper->getFaceId();
                $factory = $this->userFactory->make('candidate');
            DB::commit();
                $user = $factory->create($data);
                $token = $this->tokenService->createToken($user);
                        
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'candidate' => $user,
                'token'=> $token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
           DB::rollback();
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
    
    
    /*
    |-------------------------------------------------------------------------------------|
    |                        Registering Chairman                                         |
    |-------------------------------------------------------------------------------------|
    */
    
    public function registerChairman(ChairmanRegistrationRequest $request){
        try{
          
        DB::beginTransaction();
            $data = $request->validated();
            $data['faceId'] = $this->faceIdHelper->getFaceId();
            $user = $this->userRepository->storeUser($data);
            $chairman = $this->chairmanRepository->storeChairman($data);
            $role = $this->roleRepository->storeRole($chairman, $user->id);
        DB::commit();
           $chairman = $this->userRepository->findUserById($user->id);
           $token = $this->tokenService->createToken($user);
    
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'chairman' => $chairman,
                'token'=>$token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
          DB::rollback();
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
    
}