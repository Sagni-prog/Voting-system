<?php

namespace App\Builder;

class VoteResultBuilder{

public $voteCount;
public $totalVoteCount;

    public function setVoteCount($voteCount): VoteResultBuilder {
    
         $this->voteCount = $voteCount;
         return $this;
      
    }
    
    public function setTotalVoteCount($totalVoteCount): VoteResultBuilder {
    
        $this->totalVoteCount = $totalVoteCount;
        return $this;
       
    }
    
    function calculateVotePercent(){
       
       return $this->voteCount / $this->totalVoteCount * 50;
    }

}