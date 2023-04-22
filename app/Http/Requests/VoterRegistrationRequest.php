<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\UserHelper;


class VoterRegistrationRequest extends FormRequest{

private $userHelper;
   
public function __construct(UserHelper $userHelper){
    
    
    return $this->userHelper = $userHelper;
 }

    
public function authorize(){
        return true;
        return $this->userHelper->getCurrentlyAuthenticatedUsersRole() === 'admin';
   }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
     
        /*
        |------------------------------------------------------------------------------------|
        |                  Validating the inputs on the backend                              |
        |------------------------------------------------------------------------------------|
        |  name => is requires cant be empty, string, max length less than 255 characters    |
        |  email => is requires cant be empty, string, max length less than 255 characters,  |
        |          no duplicate value allowed                                                |
        |  password => is requires cant be empty, string, min length is 8 characters         |
        |  sex => required,must be type string                                               | 
        |------------------------------------------------------------------------------------|
        */ 
        
    public function rules()
    {
        return [
                'first_name' => ['required', 'string', 'max:255'],
                'last_name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required','string','min:8'],
                'sex' => ['required','string'],
        ];
    }
}
