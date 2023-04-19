<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Helpers\UserHelper;

class admin
{
    private $userHelper;
    
     public function __construct(UserHelper $userHelper){
         
      
         return $this->userHelper = $userHelper;
     }
     
    public function handle(Request $request, Closure $next)
    {
       if($this->userHelper->getCurrentlyAuthenticatedUsersRole() != 'admin'){
           return response()->json([
                'status' => 'fail',
                'message' => 'unAuthorized access'
          ],401);
       }
        return $next($request);
    }
}
