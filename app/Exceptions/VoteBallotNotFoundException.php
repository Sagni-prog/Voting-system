<?php

namespace App\Exceptions;

use Exception;

class VoteBallotNotFoundException extends Exception
{
    public function report()
    {
        \Log::debug('User not found');
    }
    
    public function render(){
        return response()->json([
            'status' => 'fail',
            'message' => 'Oops! something went wrong from outside',
            'error' => $exception->getMessage()
       ],404);
    }
}
