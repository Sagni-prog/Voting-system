<?php

namespace App\Repositories\Candidate;

use App\Repositories\Candidate\CandidataRepositoryInterface;
use App\Models\Candidate;
use Carbon\Carbon;

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
        
        return $this->candidate->with('role.user.photos')
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
    
    public function approveCandidateWhereId($candidate, $id){
    
        return $candidate->update([
                    'isApproved' => true,
                    'approvedBy' => $user->id,
                    'approved_at' => Carbon::now()
         ]);
    }
}