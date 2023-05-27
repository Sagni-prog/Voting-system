<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ComplainRequest extends FormRequest
{
    
    public function authorize()
    {
        return true;
    }

   
    public function rules()
    {
        return [
            'user_id' => ['integer','required'],
            'complain_desctiption' => ['string','required'],
            'name' => []
        ];
    }
}
