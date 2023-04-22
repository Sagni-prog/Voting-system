<?php

namespace App\Repositories\VoteBallot;

Interface VoteBallotRepositoryInterface{

    public function getAllVoteBallot();
    public function findVoteBallotWhereCandidateId(int $id);
    public function getVotersVote();
    public function storeVoteBallot($id, $voteId, $candidateId);


}