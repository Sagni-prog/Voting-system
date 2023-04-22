<?php

namespace App\Repositories\VoteBallot;

use  App\Repositories\VoteBallot\VoteBallotRepositoryInterface;
use App\Models\VoteBallot;

class VoteBallotRepository implements VoteBallotRepositoryInterface{

   private $voteBallot;
   
   public function __costruct(VoteBallot $voteBallot){
       
       $this->voteBallot = $voteBallot;
   }
   
 public function getAllVoteBallot(): VoteBallot {
     
     return VoteBallot::all();
     
 }
   
 public function findVoteBallotWhereCandidateId(int $id): VoteBallot{
       
       
       return $this->voteBallot->where('candidate_id',$id)->get();
    }
 public function getVotersVote($id){
   
   return $this->voteBallot->whereHas('voters',function($query){
                                $query->where('id',$id);
                         })->first();
    }  
 
 public function storeVoteBallot($id, $data){
      
      return $this->voteBallot->create([
                            'voter_id' => $id,
                            'vote_id' => $data['vote'],
                            'candidate_id' => $data['id']
                        ]);
     }
}