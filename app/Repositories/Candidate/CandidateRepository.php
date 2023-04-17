<?php

namespace App\Repositories\Candidate;

use App\Repositories\Candidate\CandidateRepositoryInterface;
use App\Models\Candidate;

class CandidateRepository implements CandidateRepositoryInterface{

 private $candidate;
 
 public function __construct(Candidate $candidate){
    
    $this->candidate = $candidate;
    
 }

    public function findCandidateWhereActive($id){
        
        return $this->candidate->where('id',$id)
                               ->with('role.user.photos')
                               ->whereHas('role.user',function($query){
                                    $query->where('isActive',true);
                               })
                               ->first();
    }
    public function getAllCandidates(){
        
        return $this->candidates->with('role.user.photos')
                                ->get();
                                
    }
    
    public function getAllActiveCandidates(){
         
        return $this->candidate->where('id',$id)
                               ->whereHas('role.user',function($query){
                                      $query->where('isActive',true);
                                  })
                               ->first();
    }
    
    public function getAllInActiveCandidates(){
         
        return $this->candidate->where('id',$id)
                               ->whereHas('role.user',function($query){
                                       $query->where('isActive',false);
                                   })
                               ->first();
    }
}