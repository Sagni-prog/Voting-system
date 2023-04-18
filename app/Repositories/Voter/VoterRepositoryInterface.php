<?php

namespace App\Repositories\Voter;

Interface VoterRepositoryInterface{
    
    public function findVoterWhereActive($id);
    public function getAllActiveVoters();
    public function getAllInActiveVoters();
    public function getAllVoters();
    public function approveVoterWhereId(Voter $voter, $id);
}