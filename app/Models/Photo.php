<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;
    
    protected $fillable = [
                            'photo_name',
                            'photo_path',
                            'photo_url',
                            'photo_height',
                            'photo_width'
     ];

        public function user(){
            return $this->belongsTo(User::class);
        }
}
