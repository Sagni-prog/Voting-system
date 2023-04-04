<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoteBallot extends Model
{
    use HasFactory;
    
    protected $fillable = ['voter_id','candidate_id','isBanned','vote_id'];
    
    public function voters(){
    
        return $this->hasMany(Voter::class);
    }
    
    public function candidates(){
    
        return $this->hasMany(Candidate::class);
    }
}
