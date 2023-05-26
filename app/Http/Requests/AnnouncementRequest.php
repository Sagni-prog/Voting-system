<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnnouncementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    
    public function rules()
    {
        return [
                 'admin_id' => ['integer'],
                 'announcement_title' => ['required','string'],
                 'announcement_description' => ['required','text'],
                 'deleted_at' => [],
        ];
    }
}
