<?php

namespace App\Helper;

use Carbon\Carbon;

class GetCurrentDate{
    
    public function getDate(){
       
       return Carbon::now();
    }
}