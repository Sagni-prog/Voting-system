<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\UserHelper;

class CandidateRegistrationRequest extends FormRequest
{

    private $userHelper;
    public function __construct(UserHelper $userHelper){
        
        $this->userHelper = $userHelper;
    }
    
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

         return true;
        // return $this->userHelper->getCurrentlyAuthenticatedUsersRole() === 'chairman';
       
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
                'admission_year' => ['required'],
                'educational_year' => ['required'],
                'department' => ['required','string'],
                'gpa' => ['required'],
                'sex' => 'string',
                'exam_score' => ['integer'],
                'vote_id' => ['integer'],
                
        ];
    }
}
