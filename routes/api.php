<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Admin;
use App\Models\Role;
use App\Models\Voter;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
