<?php

namespace App\Repositories\Chairman;

use App\Models\Chairman;
use App\Repositories\Chairman\ChairmanRepositoryInterface;

class ChairmanRepository implements ChairmanRepositoryInterface{

  private $chairman;
  
  public function __construct(Chairman $chairman){
     
     $this->chairman = $chairman;
     
  }
    
    
    public function getAllChairmans(){
        
        return $this->chairman->with('role.user.photos')->get();
    }
    
    public function storeChairman($data){
        
        return $this->chairman->create([
                  'sex' => $data['sex'],
                  'role' => 'chairman',
                  'status' => true,
          ]);
    }
    public function updateChairman($chairman, $data){
        
        return $chairman->update($data);
    }
}