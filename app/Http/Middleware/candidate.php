<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

class candidate
{
    
    public function handle(Request $request, Closure $next)
    {
        // if(Auth::user()->role->roleable->role != 'candidate'){
        //     return response()->json([
        //          'status' => 'fail',
        //          'message' => 'unAuthorized access'
        //    ],401);
        // }
        return $next($request);
    }
}
