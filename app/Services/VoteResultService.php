<?php

namespace App\Services;

class VoteResultService{

public $voteCount;
public $totalVoteCount;

    public function setVoteCount($voteCount): VoteResultService {
    
      return $this->voteCount = $voteCount;
      
    }
    
    public function setTotalVoteCount($totalVoteCount): VoteResultService {
    
       return $this->totalVoteCount = $totalVoteCount;
       
    }
    
    function calculateVotePercent(){
       
       return $this->voteCount / $this->totalVoteCount * 100;
    }



}