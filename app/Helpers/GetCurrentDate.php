<?php

namespace App\Helpers;

use Carbon\Carbon;

class GetCurrentDate{
    
    public function getDate(){
       
       return Carbon::now();
    }
}