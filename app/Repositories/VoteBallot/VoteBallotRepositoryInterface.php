<?php

namespace App\Repositories\VoteBallot;

Interface VoteBallotRepositoryInterface{

    public function getAllVoteBallot();
    public function findVoteBallotWhereCandidateId(integer $id);
    public function getVotersVote($id);
    public function storeVoteBallot($id, $data);


}