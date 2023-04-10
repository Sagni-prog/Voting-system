<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegisteredVoter extends Model
{
    use HasFactory;
    
    protected $fillable = [  
                                'vote_id',
                                'voter_id',
       ];
}
