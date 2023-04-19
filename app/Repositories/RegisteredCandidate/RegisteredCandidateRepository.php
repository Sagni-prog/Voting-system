<?php 

namespace App\Repositories\RegisteredCandidate;
use App\Models\RegisteredCandidates;

use App\Repositories\RegisteredCandidates\RegisteredCandidateRepositoryInterface;

class RegisteredCandidateRepository implements RegisteredCandidateRepositoryInterface{

  private $registeredCandidates;
  
  public function __construct(RegisteredCandidates $registeredCandidates){
     
     $this->registeredCandidates = $registeredCandidates;
     
  }
   
    public function getRegisteredCandidatesWhereVoteId(){
        
        return $this->registeredCandidates->where('vote_id',1)->get();
    }
}