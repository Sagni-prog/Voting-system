<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\UpdatePassword;
use App\Http\Controllers\Auth\UpdateProfileController;
use App\Http\Controllers\Auth\LoginWithoutFace;

use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\UpdateProfile;
use App\Http\Controllers\Admin\UserVerification;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\VoteController;
use App\Http\Controllers\Admin\VerifyElection;

use App\Http\Controllers\Voter\UpdateProfile as VoterUpdateProfile;
use App\Http\Controllers\Voter\VoteController as CastVote;

use App\Http\Controllers\Chairman\ManageVoterController;
use App\Http\Controllers\Chairman\ManageCandidateController;

// Route::get('/candidates',[ManageCandidateController::class,'index']);


Route::get('/candidates',[ManageCandidateController::class,'index']);
Route::get('/candidate/{id}',[ManageCandidateController::class,'show']);
Route::patch('/candidate/{id}/approve',[ManageCandidateController::class,'update']);
// Route::post('/update-profile/{id}',[UpdateProfileController::class,'update']);

Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);




// Route::post('/vote/{voteId}/candidate/{candidateId}',[CastVote::class,'store']);



Route::post('/signup',[AuthController::class,'register']);
Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
// Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
// Route::post('/chairman/register',[RegistrationController::class,'registerChairman']);
Route::post('/login',[AuthController::class,'login']);
Route::post('/login-withoutface',LoginWithoutFace::class);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/vote/{id}/vote-result',[VoteController::class,'index']);

   // Authentication middleware
Route::middleware(['auth:sanctum', 'api'])->group(function () {

   Route::post('/update-profile',[UpdateProfileController::class,'update']);
   Route::get('voters',[AdminController::class,'getActiveVoters']);
   
   // Route::get('/vote/{id}/vote-result',[VoteController::class,'index']);


   Route::patch('/update-password',[UpdatePassword::class,'update']);
    //  Admin Routes
 Route::middleware(['admin'])->group(function () {

   // Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
   // Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
   Route::post('/chairman/register',[RegistrationController::class,'registerChairman']);
   Route::get('/verify-election',VerifyElection::class);
   // Route::get('voters',[AdminController::class,'getAllVoters']);
   Route::delete('user/{id}',[AdminController::class,'destroy']);
   Route::post('/vote',[VoteController::class,'store']);


   Route::prefix('/admin')->group(function(){
      Route::post('/update-profile',[UpdateProfile::class,'edit']);
      Route::patch('/verify-user/{id}',[UserVerification::class,'edit']);

      // Route::post('/vote',[VoteController::class,'store']);
      Route::post('vote/extend-start-date/{id}',[VoteController::class,'extendStartDate']);
      Route::post('vote/extend-end-date/{id}',[VoteController::class,'extendEndDate']);
      Route::patch('vote/confirm/{id}',[VoteController::class,'confirmVote']);
      Route::post('vote/cancel/{id}',[VoteController::class,'cancelVote']);
      Route::delete('vote/delete',[VoteController::class,'destroy']);

      Route::patch('/user/{id}/ban',[UserVerification::class,'banUser']);
      Route::patch('/user/{id}/unban',[UserVerification::class,'unBanUser']);

      // Route::get('voters',[AdminController::class,'getAllVoters']);
      Route::get('voters/active',[AdminController::class,'getActiveVoters']);
      Route::delete('user/{id}',[AdminController::class,'destroy']);

      Route::get('candidates',[AdminController::class,'getAllCandidates']);
      Route::get('chairmans',[AdminController::class,'getAllChairmans']);

      Route::get('votes',[VoteController::class,'allVotes']);
   });


 });

    //Chairman routes
 Route::middleware(['chairman'])->group(function () {
   // Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
   Route::prefix('/chairman')->group(function(){
      Route::get('/voters',[ManageVoterController::class,'index']);
      Route::get('/voter/{id}',[ManageVoterController::class,'show']);
      Route::patch('/voter/{id}/approve',[ManageVoterController::class,'update']);


      Route::get('/candidates',[ManageCandidateController::class,'index']);
      Route::get('/candidate/{id}',[ManageCandidateController::class,'show']);
      Route::patch('/candidate/{id}/approve',[ManageCandidateController::class,'update']);
   });
 });
     //Candidate routes
 Route::middleware(['candidate'])->group(function () {
   Route::prefix('/candidate')->group(function(){

      });
 });

   // Voter routes
 Route::middleware(['voter'])->group(function () {
   Route::prefix('/voter')->group(function(){
      Route::post('/update-profile',[VoterUpdateProfile::class,'update']);
      Route::post('/vote/{voteId}/candidate/{candidateId}',[CastVote::class,'store']);
   });
 });

  Route::prefix('/votes/{id}')->group(function(){
     Route::get('/',[VoteController::class,'index']);
    });

  });
