<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    
    protected $fillable = [
                            'user_id',
                            'announcement_title',
                            'announcement_description',
                            'deleted_at',
    ];
    
    public function author(){
    
        $this->belongsTo(User::class);
    }
}
