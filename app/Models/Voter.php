<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voter extends Model
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
   
    return $this->morphOne(Role::class,'roleable');
    
  }
  
  public function files(){
    return $this->morphMany(File::class,'fileable');
  }
  
  public function vote(){
      
    return $this->belongsTo(Vote::class);
 }
  
  
}
