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
    
    public function calculateVoteResult($candidates){
    
        $data = array();
        $i = 0;
        foreach($candidates as $candidate){
            $candidate_votes = $this->voteBallotRepository->findVoteBallotWhereCandidateId($candidate->roles->user->id);
            $voted_candidate_user =  $this->userRepository->findUserById($candidate->roles->user->id);
            $total_vote_count = $this->getVoteCount($this->voteBallotRepository->getAllVoteBallot());
            $candidares_vote_count = $this->getCandidatesVoteCount($candidate_votes);
            
            $voted_in_percent = $this->getCandidateVotedInPercent($candidares_vote_count, $total_vote_count,$this->voteBuilder);
        
            // $vote_result = $this->voteResult($candidate, $voted_in_percent);
            $dataObj = $this->toArray(
                                    $voted_candidate_user,
                                    $candidate->$candidate_id,
                                    $candidares_vote_count,
                                    $voted_in_percent
                                );
                                
            $data[$i] = $dataObj;
            $i++;
        }
        
        return $data;
    }
    
  public static function toArray(
                        $voted_candidate_user,
                        $candidate_id,
                        $candidares_vote_count,
                        $voted_in_percent): array{
          
          return array(
                        "candidate" => $voted_candidate_user,
                        "candidate_id" => $candidate->candidate_id,
                        "vote_count" =>  $candidares_vote_count,
                        "voted_in_percent" => $voted_in_percent . "%"
                 );
    }
    
  public static function getCandidateVotedInPercent($candidares_vote_count, $total_vote_count,  VoteResultBuilder $voteBuilder){
    
      return $voteBuilder->setVoteCount($candidares_vote_count)
                               ->setTotalVoteCount($total_vote_count)
                               ->calculateVotePercent();
  } 
    
  public static function getVoteCount($voteBallot){
      
      return $voteBallot->count();
  }
  
  public static function getCandidatesVoteCount($candidate_votes){
  
      return $candidate_votes->count();
   
    }
    
public function voteResult(Candidate $candidate, double $votePercent) {
       
          return $candidate->exam_score + $votePercent;
  }
}