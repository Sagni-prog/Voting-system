<?php

namespace App\Repositories\Voter;

Interface VoterRepositoryInterface{
    
    public function findVoterWhereActive($id);
    public function getAllActiveVoters();
    public function getAllInActiveVoters();
    public function getAllVoters();
}