<?php

namespace App\Builder;

class VoteResultBuilder{

public $voteCount;
public $totalVoteCount;

    public function setVoteCount($voteCount): VoteResultService {
    
         $this->voteCount = $voteCount;
         return $this;
      
    }
    
    public function setTotalVoteCount($totalVoteCount): VoteResultService {
    
        $this->totalVoteCount = $totalVoteCount;
        return $this;
       
    }
    
    function calculateVotePercent(){
       
       return $this->voteCount / $this->totalVoteCount * 100;
    }

}