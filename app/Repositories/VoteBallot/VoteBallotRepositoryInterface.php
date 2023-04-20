<?php

namespace App\Repositories\VoteBallot;

Interface VoteBallotRepositoryInterface{

    public function getAllVoteBallot();
    public function findVoteBallotWhereCandidateId(integer $id);

}