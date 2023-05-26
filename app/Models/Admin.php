<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    
    protected $fillable = ['phone_number','role'];
    
    public function roles(){
    
        return $this->morphOne(Role::class,'roleable');
    }
    
    public function announcements(){
    
        $this->hasMany(Announcement::class);
    }
}
