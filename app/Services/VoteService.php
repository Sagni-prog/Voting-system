<?php
namespace App\Services;

use App\Builder\VoteResultBuilder;

use  App\Repositories\User\UserRepositoryInterface;
use  App\Repositories\VoteBallot\VoteBallotRepositoryInterface;

class VoteService{
    
    private $userRepository;
    private $voteBallotRepository;
    private $voteBuilder;
    
    
    public function __construct(
                           VoteResultBuilder $voteBuilder,
                           UserRepositoryInterface $userRepository,
                           VoteBallotRepositoryInterface $voteBallotRepository,
      ){
        
        $this->voteBuilder = $voteBuilder;
        $this->userRepository = $userRepository;
        $this->voteBallotRepository = $voteBallotRepository;
    
}

public static function getIds($candidates){
   
   
    $i = 0;
   $data = array();
  foreach($candidates as $candidate){
    
    $data[$i] = $candidate->roles->user;
    $i++;
 }
 return $data;

}

  
    
    public function calculateVoteResult($candidates){
    
        $data = array();
        $i = 0;
        $ids = array();
        
        
        foreach($candidates as $candidate){
       
            // return $this->getIds($candidates)[$i]->id;
            
            $id = $this->getIds($candidates)[$i]->id;
            $ids[$i] = $id;
            // return $id;
            $candidate_votes = $this->voteBallotRepository->findVoteBallotWhereCandidateId($candidate->id);
            
            $voted_candidate_user =  $this->userRepository->findUserById($candidate->id);
        
            $total_vote_count = $this->getVoteCount($this->voteBallotRepository->getAllVoteBallot());
            $candidares_vote_count = $this->getCandidatesVoteCount($candidate_votes);
            
            $voted_in_percent = $this->getCandidateVotedInPercent($candidares_vote_count, $total_vote_count,$this->voteBuilder);
        
            // $exam_score = $this->getExamScore($voted_candidate_user);
            // $total_vote_percentage = $this->voteResult($exam_score, $voted_in_percent);
            
            $dataObj = $this->toArray(
                                    $voted_candidate_user,
                                    $candidares_vote_count,
                                    $voted_in_percent,
                                    // $exam_score,
                                    // $total_vote_percentage,
                                    // $vote->confirmed 
                                );
                                
            $data[$i] = $dataObj;
            //  return $data;
            $i++;
        }
        
        return $ids;
         return $data;
    }
    
  public static function toArray(
                        $voted_candidate_user,
                        $candidares_vote_count,
                        $voted_in_percent,
                        // $exam_score,
                        // $total_vote_percentage,
                        // $isConfirmed
                        ): array{
          
          return array(
                        "candidate" => $voted_candidate_user,
                        "vote_count" =>  $candidares_vote_count,
                        "voted_in_percent" => $voted_in_percent . "%",
                        // "exam_score" => $exam_score,
                        // "totol_vote_percent" => $total_vote_percentage,
                        // "isConfirmed" => $isConfirmed
                 );
    }
    
  public static function getCandidateVotedInPercent($candidates_vote_count, $total_vote_count,  VoteResultBuilder $voteBuilder){
    
      return $voteBuilder->setVoteCount($candidates_vote_count)
                               ->setTotalVoteCount($total_vote_count)
                               ->calculateVotePercent();
  } 
    
  public static function getVoteCount($voteBallot){
      
      return $voteBallot->count();
  }
  
  public static function getCandidatesVoteCount($candidate_votes){
  
      return $candidate_votes->count();
   
    }
    
public function voteResult($exam_score, $votePercent) {
       
          return $exam_score + $votePercent;
  }

public static function getExamScore($voted_candidate_user){
   
//    return $voted_candidate_user->role->roleable->exam_score;
}
  
  
  

}