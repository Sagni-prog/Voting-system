<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Helpers\UserHelper;

class UpdateChairmanProfile extends FormRequest
{
    private $userHelper;
    
    public function __construct(UserHelper $userHelper){
    
    
        return $this->userHelper = $userHelper;
    }
    
    
    public function authorize()
    {
        return $this->userHelper->getCurrentlyAuthenticatedUsersRole() === 'chairman';;
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
            // 'phone_number' => ['integer','max:10']
        ];
    }
}
