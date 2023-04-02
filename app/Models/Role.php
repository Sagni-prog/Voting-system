<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = ['roleable_id','roleable_type','user_id'];
    
    public function roleable(){
    
       return $this->morphToMany();
    }
}
