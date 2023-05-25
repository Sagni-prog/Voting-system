<?php 

namespace App\Repositories\RegisteredCandidate;

Interface RegisteredCandidateRepositoryInterface{

   public function getRegisteredCandidatesWhereVoteId($vote_id);
   // public function store(array $data, $candidate_id);
}