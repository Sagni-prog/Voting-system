<?php
namespace App\Repositories;

use App\Interfaces\VoteInterface;
use App\Models\Vote;

class VoteRepository implements VoteInterface{

  public function getVote($id){
  
    return Vote::where('id',$id)->first();
    
  }
  
  public function getAllVotes(){
     
     return Vote::all();
     
  }
  
  public function getVoteResult($id){
     
     return;
     
  }
  public function storeVote($data){
     
     return;
     
  }
  public function extendStartDate($id,$data){
     
     return;
     
  }
  public function extendEndDate($id,$data){
  
     return;
  }
  public function confirmVote($id){
  
     return;
  }
  public function cancelVote($id){
  
     return;
  }
  public function destroyVote($id){
     
     return;
  }
}