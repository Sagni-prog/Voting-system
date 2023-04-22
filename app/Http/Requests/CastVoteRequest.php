<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use App\Helpers\UserHelper;

class CastVoteRequest extends FormRequest
{
    private $userHelper;
    
    public function __construct(UserHelper $userHelper){
       
       $this->userHelper = $userHelper;
    }
    public function authorize()
    {
        return $this->userHelper->getCurrentlyAuthenticatedUsersRole() === 'voter';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // 'vote_id' => 'interger',
            // 'candidate_id' => 'integer'
        ];
    }
}
