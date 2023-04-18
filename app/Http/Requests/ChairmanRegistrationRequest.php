<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\UserHelper;

class ChairmanRegistrationRequest extends FormRequest
{

    private $userHelper;
 
    public function __construct(UserHelper $userHelper){
        
        $this->$userHelper = $userHelper;
    }
    
    public function authorize()
    {
        return $this->$userHelper->getCurrentlyAuthenticatedUsersRole() === 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required','string','min:8'],
            'sex' => ['required','string']
        ];
    }
}
