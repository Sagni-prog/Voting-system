<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\RegistrationController;


Route::post('/signup',[AuthController::class,'register']);
Route::post('/voter/register',[RegistrationController::class,'registerVoter']);
Route::post('/login',[AuthController::class,'login']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
