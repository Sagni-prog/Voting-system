<?php 

namespace App\Interfaces;

Interface VoteInterface{

  public function getVote($id);
  public function getAllVotes();
  public function getVoteResult($id);
  public function storeVote($data);
  public function extendStartDate($id,$data);
  public function extendEndDate($id,$data);
  public function confirmVote($id);
  public function cancelVote($id);
  public function destroyVote($id);

}