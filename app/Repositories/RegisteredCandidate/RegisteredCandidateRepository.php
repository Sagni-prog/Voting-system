<?php 

namespace App\Repositories\RegisteredCandidate;
use App\Models\Candidate;

use App\Repositories\RegisteredCandidate\RegisteredCandidateRepositoryInterface;

class RegisteredCandidateRepository implements RegisteredCandidateRepositoryInterface{

  private $registeredCandidates;
  
  public function __construct(Candidate $registeredCandidates){
     
     $this->registeredCandidates = $registeredCandidates;
     
  }
   
    public function getRegisteredCandidatesWhereVoteId($vote_id){
        
        return $this->registeredCandidates->with('roles.user')->where('vote_id',$vote_id)->get();
    }
    
    public function store(array $data, $candidate_id){
       return  $this->registeredCandidates->create([
          'vote_id' => $data['vote_id'],
          'candidate_id' => $candidate_id
       ]);
    }
}