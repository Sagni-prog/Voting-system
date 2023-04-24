<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\VoterRegistrationRequest;
use App\Http\Requests\CandidateRegistrationRequest;
use App\Http\Requests\ChairmanRegistrationRequest;

// use App\Repositories\User\UserRepositoryInterface;
// use App\Repositories\Voter\VoterRepositoryInterface;
// use App\Repositories\Candidate\CandidateRepositoryInterface;
// use App\Repositories\Chairman\ChairmanRepositoryInterface;
// use App\Repositories\Role\RoleRepositoryInterface;

use App\Factory\UserFactory\Manager\UserFactoryManager;

use App\Services\TokenManagerService;

use App\Helpers\GetFaceId;
use App\Helpers\UserHelper;


class RegistrationController extends Controller{
    
    // private $userRepository;
    // private $voterRepository;
    // private $roleRepository;
    // private $candidateRepository;
    // private $chairmanRepository;
    private $faceIdHelper;
    private $tokenService;
    private $userHelper;
    private $userFactory;
    
    public function __construct(
                //   UserRepositoryInterface $userRepository,
                //   VoterRepositoryInterface $voterRepository,
                //   CandidateRepositoryInterface $candidateRepository,
                //   ChairmanRepositoryInterface $chairmanRepository,
                //   RoleRepositoryInterface $roleRepository,
                  TokenManagerService $tokenService,
                  GetFaceId $faceIdHelper,
                  UserHelper $userHelper,
                  UserFactoryManager $userFactory,
                  ){
        
        // $this->userRepository = $userRepository;
        // $this->voterRepository = $voterRepository;
        // $this->roleRepository = $roleRepository;
        // $this->candidateRepository = $candidateRepository;
        // $this->chairmanRepository = $chairmanRepository;
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
            $data = $request->validated();
            $data['faceId'] =  $this->faceIdHelper->getFaceId();
            $factory = $this->userFactory->make('voter');
            $user = $factory->create($data);
            $token = $this->tokenService->createToken($user);
                           
            return response()->json([
                    'status'=> 'sucess',
                    'message'=>'user created succesfully',
                    'voter' => $user,
                    'token'=>$token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
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
            
                $data = $request->validated();
                $data['faceId'] =  $this->faceIdHelper->getFaceId();
                $factory = $this->userFactory->make('candidate');
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

            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage(),
                "erroe"=>$exception
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
            $data = $request->validated();
            $data['faceId'] = $this->faceIdHelper->getFaceId();
            $factory = $this->userFactory->make('candidate');
            $user = $factory->create($data);
            $token = $this->tokenService->createToken($user);
    
            return response()->json([
                'status'=> 'sucess',
                'message'=>'user created succesfully',
                'chairman' => $user,
                'token'=>$token->plainTextToken
            ] ,201);
        }
        catch(\Exception $exception){
            return response()->json([
                "status"=>true,
                "message"=>$exception->getMessage()
            ],500);
        }
    }
    
}