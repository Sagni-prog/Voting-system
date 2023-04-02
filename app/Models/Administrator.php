<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrator extends Model
{
    use HasFactory;
    
    protected $fillable = ['phone_number','role'];
    
    public function role(){
    
        return $this->morphTo(Role::class,'roleable');
    }
    
    public function announcements(){
    
        $this->hasMany(Announcement::class);
    }
}
