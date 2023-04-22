<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;
use App\Models\Voter;
use App\Models\User;
use App\Models\RegisteredVoter;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Repositories\Voter\VoterRepositoryInterface;

class ManageVoterController extends Controller
{
    private $userRepository;
    private $candidateRepository;
    private $voterRepository;
    
    public function __construct(
                UserRepositoryInterface $userRepository,
                CandidateRepositoryInterface $candidateRepository,
                VoterRepositoryInterface $voterRepository,
        ){
            
            $this->userRepository = $userRepository;
            $this->candidateRepository = $candidateRepository;
            $this->voterRepository = $voterRepository;
    }
    
    public function index(){
    
        $voter = $this->userRepository->setRole('voter')
                                      ->getActiveNotBannedWhereRole();
        return $voter;
                
      if(!$voter){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $voter->count(),
          'voters' => $voter
      ]);
    }
    
    
    public function show($id){
    
       $voter = $this->userRepository->findActiveNotBannedWhereRoleWith($id, 'voter');
                
      if(!$voter){
          
          return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
          ],400);
      } 
      
      return response()->json([
          'status' => 'success',
          'size' => $voter->count(),
          'voters' => $voter
      ]);
    }
    
    public function update($id){
      try {
       
        if(!Auth::check()){
            return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
            ],401);
        }
        
          $voter = $this->userRepository->findActiveNotBannedWhereRole($id, 'voter');
      
          if(!$voter){
            return response()->json([
                     'status' => 'fail',
                     'message' => 'Voter not found'
               ],404);
          } 
        
            if($voter->role->roleable->isApproved){
                   return response()->json([
                            'status' => 'fail',
                            'message' => 'The Voter is already approved'
                    ],200);
            } 
              
            $id = $this->userRepository->getCurrentlyAuthenticatedUser()->id;
            $isEdited = $this->voterRepository->approveVoterWhereId($voter->role->roleable, $id);

            // $isEdited = $voter->role->roleable->update([
            //        'isApproved' => true,
            //        'approvedBy' => $user->id,
            //        'approved_at' => Carbon::now()
            // ]);
            
        if(!$isEdited){
            return response()->json([
                'status' => 'fail',
                'message' => 'Oops! something went wrong'
            ],400);
        }
        
        // $registered = RegisteredVoter::create([
        //               'voter_id' => $voter->id,
        //               'vote_id' => 1
        // ]);
        
        return response()->json([
            'status' => 'success',
            'message' => 'You have successfully approved the voter'
         ],200);
             } catch (\Exception $exception) {
                return response()->json([
                   'status' => 'fail',
                   'message' => 'Oops! something went wrong',
                   'error' => $exception->getMessage()
               ], 400);
          } 
      }
      
}
