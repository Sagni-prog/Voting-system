<?php 

namespace App\Repositories\Candidate;

Interface CandidataRepositoryInterface{
    
    public function findCandidateWhereActive($id);
    public function getAllCandidates();
    public function getAllActiveCandidates();
    public function getAllInActiveCandidates();
}