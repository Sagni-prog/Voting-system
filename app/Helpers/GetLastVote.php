<?php 

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class GetLastVote{
    
    public function getLastVote(){
        
        return DB::table('votes')->latest()->first();
   }
}