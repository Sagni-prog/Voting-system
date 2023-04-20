<?php
namespace App\Service;

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
    
    public function calculateVoteResult(Candidate $candidates): array{
    
        $data = array();
        $i = 0;
        foreach($candidates as $candidate){
            $candidate_votes = $this->voteBallotRepository->findVoteBallotWhereCandidateId($candidate->candidate_id);
            $voted_candidate_user = $this->userRepositry->findUserById($candidate->candidate_id);
            $total_vote_count = $this->getVoteCount($this->voteBallotRepository->getAllVoteBallot());
            $candidares_vote_count = getCandidatesVoteCount($candidate_votes);
            
            $voted_in_percent = $thit->getCandidateVotedInPercent($candidares_vote_count, $total_vote_count);
            $dataObj = $this->toArray(
                                    $voted_candidate_user,
                                    $candidate_id,
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
    
  public static function getCandidateVotedInPercent($candidares_vote_count, $total_vote_count){
     
      return $this->voteBuilder->setVoteCount($candidares_vote_count)
                               ->setTotalVoteCount($total_vote_count)
                               ->calculateVotePercent();
  } 
    
  public static function getVoteCount(VoteBallot $voteBallot): integer{
      
      return $voteBallot->count();
  }
  
  public static function getCandidatesVoteCount(VoteBallot $candidate_votes): integer{
  
      return $candidate_votes->count();
   }
}