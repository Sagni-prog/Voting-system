<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredCandidates extends Model
{
    use HasFactory;
    
    protected $fillable = ['vote_id','candidate_id'];
}
