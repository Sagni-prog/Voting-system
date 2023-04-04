<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\RegistrationController;


// Route::post('/signup',[AuthController::class,'register']);
Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
Route::post('/candidate/register',[RegistrationController::class,'registerCandidate']);
Route::post('/chairman/register',[RegistrationController::class,'registerChairman']);
Route::post('/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
