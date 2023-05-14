<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\VoterRegistrationRequest;
use App\Http\Requests\CandidateRegistrationRequest;
use App\Http\Requests\ChairmanRegistrationRequest;

use App\Factory\UserFactory\Manager\UserFactoryManager;

use App\Services\TokenManagerService;

use App\Helpers\GetFaceId;
use App\Helpers\UserHelper;

use App\Services\PhotoService;
use App\Helpers\GetLastVote;


class RegistrationController extends Controller{
    
    
    private $faceIdHelper;
    private $tokenService;
    private $userHelper;
    private $userFactory;
    private $photoService;
    private $voteHelper;
    
    public function __construct(
        
        TokenManagerService $tokenService,
        GetFaceId $faceIdHelper,
        UserHelper $userHelper,
        UserFactoryManager $userFactory,
        PhotoService $photoService,
        GetLastVote $voteHelper,
        ){
            
            $this->tokenService = $tokenService;
            $this->faceIdHelper = $faceIdHelper;
            $this->userHelper = $userHelper;
            $this->userFactory = $userFactory;
            $this->photoService = $photoService;
            $this->voteHelper = $voteHelper;
    }
 
    /*
    |-------------------------------------------------------------------------------------|
    |                              Registering Voter                                      |
    |-------------------------------------------------------------------------------------|
    */
    public function registerVoter(VoterRegistrationRequest $request){
        try{
            $data = $request->validated();
            $data['faceId'] =  'voter';
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
                $data['faceId'] =  'candidate';
                $data['vote_id'] =  $this->voteHelper->getLastVote();
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
         if(!$request->face_id){
           return response()->json([
              'status' => 'fail',
              'message' => 'face id required'
           ],400);
         }
            $data = $request->validated();
            // $data['faceId'] =  $this->faceIdHelper->getFaceId();
            $data['faceId'] =  $request->face_id;
            $factory = $this->userFactory->make('chairman');
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