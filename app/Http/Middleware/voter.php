<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;

class voter
{
    
    public function handle(Request $request, Closure $next)
    {
     
        if(Auth::user()->role->roleable->role != 'voter'){
            return response()->json([
                 'status' => 'fail',
                 'message' => 'unAuthorized access'
           ],401);
        }
        return $next($request);
    }
}
