'<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\UpdatePassword;
use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\UpdateProfile;
use App\Http\Controllers\Admin\UserVerification;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\VoteController;
use App\Http\Controllers\Voter\UpdateProfile as VoterUpdateProfile;
use App\Http\Controllers\Chairman\ManageVoterController;
use App\Http\Controllers\Chairman\ManageCandidateController;
use App\Http\Controllers\Voter\VoteController as CastVote;


Route::get('/',function(){

  return App\Models\User::all();
    // return App\Http\Controllers\Admin\AdminController::
});
Route::post('/signup',[AuthController::class,'register']);
Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
Route::post('/chairman/register',[RegistrationController::class,'registerChairman']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'api'])->group(function () {
   Route::prefix('/admin')->group(function(){
       Route::patch('/update-password',[UpdatePassword::class,'edit']);
       Route::patch('/update-profile',[UpdateProfile::class,'edit']);
       Route::patch('/verify-user/{id}',[UserVerification::class,'edit']);
       
       Route::post('/vote',[VoteController::class,'store']);
       Route::post('vote/extend-start-date/{id}',[VoteController::class,'extendStartDate']);
       Route::post('vote/extend-end-date/{id}',[VoteController::class,'extendEndDate']);
       Route::patch('vote/confirm/{id}',[VoteController::class,'confirmVote']);
       Route::post('vote/cancel/{id}',[VoteController::class,'cancelVote']);
       //   Route::delete('vote/delete',[VoteController::class,'destroy']);
       
       Route::patch('/user/{id}/ban',[UserVerification::class,'banUser']);
       Route::patch('/user/{id}/unban',[UserVerification::class,'unBanUser']);
       
       Route::get('voters',[AdminController::class,'getAllVoters']);
       Route::get('voters/active',[AdminController::class,'getActiveVoters']);
       Route::delete('user/{id}',[AdminController::class,'destroy']);
         
       Route::get('candidates',[AdminController::class,'getAllCandidates']);
       Route::get('chairmans',[AdminController::class,'getAllChairmans']);
    });
    
    Route::prefix('/voter')->group(function(){
       Route::post('/update-profile',[VoterUpdateProfile::class,'update']);
       Route::post('/vote',[CastVote::class,'store']);
    });
    
   Route::prefix('/chairman')->group(function(){
       Route::get('/voters',[ManageVoterController::class,'index']);
       Route::get('/voter/{id}',[ManageVoterController::class,'show']);
       Route::patch('/voter/{id}/approve',[ManageVoterController::class,'update']);
       
       
       Route::get('/candidates',[ManageCandidateController::class,'index']);
       Route::get('/candidate/{id}',[ManageCandidateController::class,'show']);
       Route::patch('/candidate/{id}/approve',[ManageCandidateController::class,'update']);
    });
    
  Route::prefix('/candidate')->group(function(){
  
  });
  
  Route::prefix('/votes/{id}')->group(function(){
     Route::get('/',[VoteController::class,'index']);
    });
      
  });
