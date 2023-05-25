<?php 

namespace App\Helpers;

use Illuminate\Support\Facades\DB;
use App\Models\Vote;

class GetLastVote{
    
    public function getLastVote(){
        
        return Vote::orderBy('created_at', 'desc')->first();
   }
}