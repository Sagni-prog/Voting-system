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

public function role(){
    return $this->morphTo(Role::class,'roleable');
  }
}
