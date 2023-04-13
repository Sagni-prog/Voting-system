<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoteBallot extends Model
{
    use HasFactory;
    
    protected $fillable = ['voter_id','candidate_id','isBanned','vote_id'];
    
    public function voters(){
    
        return $this->belongsTo(User::class,'voter_id');
    }
    
    public function candidates(){
    
        return $this->belongsToMany(User::class,'candidate_vote_ballot');
    }
    // public function candidates(){
    
    //     return $this->belongsTo(User::class,'candidate_id');
    // }
}
