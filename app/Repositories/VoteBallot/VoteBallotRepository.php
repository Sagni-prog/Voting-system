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
   
 public function findVoteBallotWhereCandidateId(integer $id): VoteBallot{
       
       
       return $this->voteBallot->where('candidate_id',$id)->get();
    }
}