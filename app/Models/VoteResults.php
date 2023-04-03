<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VoteResults extends Model
{
    use HasFactory;
    
    protected $fillable = [
                            'voter_id',
                            'candidate_id',
                            'isActive'
        ];
}
