<?php

namespace App\Http\Controllers\Vote;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helpers\GetLastVote;
 
 
class ActiveVoteController extends Controller
{
    private $lastVote;
    
    public function __construct( GetLastVote $lastVote,){
       
        $this->lastVote = $lastVote;
    }
    public function __invoke(Request $request)
    {
        return $this->lastVote->getLastVote();

    }
}
