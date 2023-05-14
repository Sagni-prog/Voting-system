import React, { useContext,useEffect } from 'react'
import CandidateContext from '../../contexts/CandidateContext';
import VoterContext from '../../contexts/VoterContext';

export default function AllElectionData() {
  const {voterState, voterDispatch} = useContext(VoterContext)
  
  const {candidateState,candidateDispatch} = useContext(CandidateContext);
  return (
    <div class="flex gap-4 mb-4">
    <div class="bg-white p-6 rounded-lg shadow-md">
  <h1 class="text-3xl font-bold mb-8">Election Data</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">voters</h2>
      <p class="text-5xl font-bold text-green-500">{voterState.voters.length}</p>
      
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">Vote</h2>
      <p class="text-5xl font-bold text-blue-500">10,000</p>
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">Candidates</h2>
      <p class="text-5xl font-bold text-purple-500">{candidateState.length}</p>
   
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">chairmans</h2>
      <p class="text-5xl font-bold text-red-500">20</p>
    
    </div>
  </div>
</div>
  
     
        </div>
  )
}
