<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
// use App\Http\Controllers\Admin\UpdatePassword;
// use App\Http\Controllers\Auth\UpdatePasswordController;
use App\Http\Controllers\Auth\UpdatePassword;
use App\Http\Controllers\Admin\RegistrationController;
use App\Http\Controllers\Admin\UpdateProfile;
use App\Http\Controllers\Admin\UserVerification;


Route::post('/signup',[AuthController::class,'register']);
Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
Route::post('/chairman/register',[RegistrationController::class,'registerChairman']);
Route::post('/login',[AuthController::class,'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum', 'api'])->group(function () {

    Route::post('admin/update-password',[UpdatePassword::class,'edit']);
    Route::post('/admin/update-profile',[UpdateProfile::class,'edit']);
    Route::post('/admin/verify-users/{id}',[UserVerification::class,'edit']);
    
});
