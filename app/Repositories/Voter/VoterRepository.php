<?php

namespace App\Repositories\Voter;

use App\Repositories\Voter\VoterRepositoryInterface;
use App\Models\Voter;
use Carbon\Carbon;

class VoterRepository implements VoterRepositoryInterface{

  private $voter;
  
  public function __construct(Voter $voter){
     
     $this->voter = $voter;
  }
  
  public function findVoterWhereActive($id){
     
    return $this->voter->where('id',$id)
                       ->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                                 $query->where('isActive',true);  
                            })->first();
  }
  public function getAllActiveVoters(){
     
    return $this->voter->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                                $query->where('isActive',true);  
                        })->get();
  }
  public function getAllInActiveVoters(){
      
    return $this->voter->with('role.user.photos')
                       ->whereHas('role.user',function($query){
                               $query->where('isActive',false);  
                        })->get();
   }
   
   public function getAllVoters(){
        
        return $this->voter->with('role.user.photos')
                           ->get();
   }
   
   public function approveVoterWhereId($voter, $id){
       
       return $voter->update([
                  'isApproved' => true,
                  'approvedBy' => $id,
                  'approved_at' => Carbon::now()
           ]);
   }
   
   public function storeVoter($data){
   
      return $this->voter->create([
                    'sex' => $data['sex'],
                    'role' => 'voter',
                    'status' => true,
        ]);
    }
    
    public function updateVoter($voter, $data){
        
        return $voter->update($data);
    }
  
}