<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Helpers\GetLastVote;


class VerifyElection extends Controller
{
    private $lastVote;
    
    public function __construct(GetLastVote $lastVote,){
    
        $this->lastVote = $lastVote;
    }
    
    public function __invoke(Request $request)
    {
       $vote = $this->lastVote->getLastVote();
       $vote->confirmed = true;
       $vote->save();
    }
}
