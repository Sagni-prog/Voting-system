<?php
namespace App\Repositories;

use App\Interfaces\VoteInterface;
use App\Models\Vote;
use Carbon\Carbon;

class VoteRepository implements VoteInterface{

private $vote;

  public function __construct(Vote $vote){
     
     $this->vote = $vote;
  }

  public function findVote($id){
  
    return $this->vote->where('id',$id)->first();
    
  }
  
  public function getAllVotes(){
     
     return $this->vote->all();
     
  }
  
  public function getVoteResult($id){
     
     return;
     
  }
  public function storeVote($data){
     
     return $this->vote->create($data);
     
  }
  public function extendStartDate($vote,$data){
     
     
     return $vote->update([
        'vote_start_date' => $data['vote_start_date']
    ]);
     
  }
  public function extendEndDate($vote,$data){
  
     return $vote->update([
        'vote_end_date' => $data['vote_end_date'],
    ]);
  }
  public function confirmVote($vote,$user_id){
    
     return $vote->update([
            'confirmed' => true,
            'confirmed_at' => Carbon::now(),
            'confirmed_by' => $user_id
     ]);
  }
  public function cancelVote($id){
  
     return;
  }
  public function destroyVote($id){
     
     return;
  }
}