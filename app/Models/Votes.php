<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Votes extends Model
{
    use HasFactory;
    
    protected $fillable = ['voter_id','candidate_id'];
    
    public function voter(){
         return $this->belongsTo(Voter::class,'voter_id');
     }
     
     public function candidate(){
         return $this->belongsTo(Candidate::class,'candidate_id'); 
     }
}
