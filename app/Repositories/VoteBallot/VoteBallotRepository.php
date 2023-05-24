<?php

namespace App\Repositories\VoteBallot;

use  App\Repositories\VoteBallot\VoteBallotRepositoryInterface;
use App\Models\VoteBallot;

class VoteBallotRepository implements VoteBallotRepositoryInterface{

   private $voteBallot;
   public $voterId;
   public $voteId;
   
   public function __construct(VoteBallot $voteBallot){
       
       $this->voteBallot = $voteBallot;
   }
   
   public function setVoterId($voterId){
      
      $this->voterId = $voterId;
      return $this;
   }
   
   public function setVoteId($voteId){
       
       $this->voteId = $voteId;
       return $this;
   }
   
 public function getAllVoteBallot() {
     
     return VoteBallot::all();
     
 }
   
 public function findVoteBallotWhereCandidateId(int $id){
       
       return $this->voteBallot->where('candidate_id',$id)->get();
}
    
 public function getVotersVote(){
    
   return $this->voteBallot->where('vote_id',$this->voteId)
                           ->whereHas('voters',function($query){
                                   $query->where('id',$this->voterId);
                            })->first();
    }  
 
 public function storeVoteBallot($id, $voteId, $candidateId){
      
      return $this->voteBallot->create([
                            'voter_id' => $id,
                            'vote_id' => $voteId,
                            'candidate_id' => $candidateId
                        ]);
     }
}