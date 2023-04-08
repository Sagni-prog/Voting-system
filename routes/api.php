<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\UpdatePassword;
use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\UpdateProfile;
use App\Http\Controllers\Admin\UserVerification;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\VoteController;


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
       Route::patch('/verify-users/{id}',[UserVerification::class,'edit']);
       
       Route::post('/vote',[VoteController::class,'store']);
       Route::post('vote/extend-start-date/{id}',[VoteController::class,'extendStartDate']);
       Route::post('vote/extend-end-date/{id}',[VoteController::class,'extendEndDate']);
       Route::patch('vote/confirm/{id}',[VoteController::class,'confirmVote']);
    });
    
    Route::patch('/user/{id}/ban',[UserVerification::class,'banUser']);
    Route::patch('/user/{id}/unban',[UserVerification::class,'unBanUser']);
    
    Route::get('voters',[AdminController::class,'getAllVoters']);
    Route::get('voters/active',[AdminController::class,'getActiveVoters']);
      Route::delete('user/{id}',[AdminController::class,'destroy']);
      
      Route::get('candidates',[AdminController::class,'getAllCandidates']);
      Route::get('chairmans',[AdminController::class,'getAllChairmans']);
      
    //   Route::patch('vote/cancel',[VoteController::class,'cancelVote']);
    //   Route::delete('vote/delete',[VoteController::class,'destroy']);
  });
