<?php 

namespace App\Interfaces;

Interface VoteInterface{

  public function findVote($id);
  public function getAllVotes();
  public function getVoteResult($id);
  public function storeVote($data);
  public function extendStartDate($vote,$data);
  public function extendEndDate($vote,$data);
  public function confirmVote($vote,$vote_id);
  public function cancelVote($vote,$data);
  public function destroyVote($vote);

}