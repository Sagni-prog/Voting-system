<?php
namespace App\Repositories\Vote;

use App\Repositories\Vote\VoteInterface;
use App\Models\Vote;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VoteRepository implements VoteInterface{

private $vote;

  public function __construct(Vote $vote){
     
     $this->vote = $vote;
  }

  public function findVote($id){
  
    return $this->vote->where('id',$id)->first();
    
  }
  
  public function getAllVotes(){
     
     return $this->vote->all();
     
  }
  
  public function getVotes($id){
     
     return $this->vote->find($id);
     
  }
  public function storeVote($data){
     
     return $this->vote->create($data);
     
  }
  public function extendStartDate($vote,$data){
     
     
     return $vote->update([
        'vote_start_date' => $data['vote_start_date']
    ]);
     
  }
  public function extendEndDate($vote,$data){
  
     return $vote->update([
        'vote_end_date' => $data['vote_end_date'],
    ]);
  }
  public function confirmVote($vote,$user_id){
    
     return $vote->update([
            'confirmed' => true,
            'confirmed_at' => Carbon::now(),
            'confirmed_by' => $user_id
     ]);
  }
  public function cancelVote($vote,$data){
  
     return $vote->update([
        'voteCanceled' => true,
        'vote_canceled_at' => Carbon::now(), 
        'vote_cancelation_cause' => $data['vote_cancelation_cause'],
     ]);
  }
  public function destroyVote($id){
     
     return;
  }
  
  public function getLastVote(){
     
     return DB::table('votes')->latest()->first();
  }
}