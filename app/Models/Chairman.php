<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chairman extends Model
{
    use HasFactory;
    
    protected $fillable = [ 
        'sex',
        'role',
        'status',
        'approved_at',
        'deleted_at'
];

public function roles(){
   
  return $this->morphOne(Role::class,'roleable');
  
  }
}
