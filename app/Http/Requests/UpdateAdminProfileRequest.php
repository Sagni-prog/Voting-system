<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\UserHelper;

class UpdateAdminProfileRequest extends FormRequest
{

 private $userHelper;
 
   public function __construct(UserHelper $userHelper){
       
       $this->$userHelper = $userHelper;
   }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
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
            'first_name' => ['string', 'max:255'],
            'last_name' => ['string', 'max:255'],
            'email' => ['string', 'email', 'max:255'],
            'password' => ['string','min:8'],
            // 'phone_number' => ['required','integer','max:10']
        ];
    }
}
