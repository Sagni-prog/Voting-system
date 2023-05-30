import {React,useState, useContext, useEffect} from 'react'
import Sidebar from './Siderbar'
import { Link,useNavigate } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import VoterContext from '../../contexts/VoterContext';
// import AllElectionData from './AllElectionData';
import AllElectionData from '../admin/AllElectionData';
import http from '../../http/http';


import CandidateContext from '../../contexts/CandidateContext';



function Handlecolor(status){
  
    if(status.status === 'passed'){
      return(
        <p className='p-2 -mx-0 text-emerald-600'>{status.status}</p>
      )
    }
    else{
      return (
      <p className='p-2 -mx-0 text-red-500'>{status.status}</p>
      )
    }
  
  
  
  
  }
export default function VoteResult(){

  const [voteResult, setVoteResult] = useState([]);
  
  useEffect(() => {
    getVoteResult();
   
  },[])
  
  
  
  const getVoteResult = async() => {
   
  const data = await http.get('/vote/2/vote-result');
  setVoteResult(data.data.data);

  }
  
  console.log("vote result")
  console.log("vote result from state", voteResult)
  
    const navigate = useNavigate();
   
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
  
    
    
  
    const {voterState, voterDispatch} = useContext(VoterContext)
    
    console.log("what is wrong",voterState)
    console.log("what is wrong")
    useEffect(() => {
    try {
      
      // console.log("from voter",voterState)
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('dah', user.user.role.roleable.role)
       if(user && user.user.role.roleable.role !== 'chairman'){
           
            navigate('/login')
  
       }
  
         if(!localStorage.getItem('token') | !localStorage.getItem('user')){
      
             navigate('/login')
      }
        } catch (error) {
      
    }
      
    },[]);
    
    const formatNumber = (number) => {
      
      return Number.parseFloat(number).toFixed(2)
    }
    
    const calculateMax = () => {
      
       return Math.max.apply(Math, voteResult.map(function(vote) { return vote.totol_vote_percent; }))
    }
    
    const verifyVote = async() =>{
       
       const data = await http.get('/verify-election');
    }
  
  
    return (
    // ///////////////////////////////////////////////////
    
    <div>
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <Link to="/" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>

    
    <h6 className="absolute text-red-600 top-3 right-4 ">2016 EC vote for student president.</h6>
            
        </a>
    </div>
     
      
</div>
<div className='h-[90px] w-full flex bg-emerald-500'>
            <div className='p-2 m-2 mb-2 flex-column'>
                <div className='flex w-[13rem]  bg-emerald-600 '>
                    <h5 className='text-[0.9rem]'>Home</h5>
                    <h6 className='mt-1'><AiOutlineRight /></h6>
                    <h2 className='text-white font-semi-bold'>Chairman</h2>
                </div>
                <div>
                    <h1 className='font-bold text-[1.9rem] text-white'>Dashboard</h1>
                </div>
            </div>
        </div>
    <div class="flex flex-col md:flex-row h-[90vh]">
  <Sidebar />
  
    <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
   
     <AllElectionData />
     <div class="flex gap-4 mb-4 w-full">
    <div class="bg-white p-6 rounded-lg w-full shadow-md">
  <h2 class="text-xl font-bold mb-8">Vote Result</h2>
  
  <div class="bg-white rounded-lg shadow-md p-4 h-100 overflow-y-auto">
  <table class="table-auto  w-full">
            <thead>
              <tr className='divide-y-0 bg-emerald-500 divide-slate-800'>
                <th class="px-1 py-1 font-bold text-left">photo</th>
                <th class="px-4 py-2 font-bold text-left">FullName</th>
                <th class="px-4 py-2 font-bold text-left">Department</th>
                <th class="px-4 py-2 font-bold text-left">Exam Score</th>
                <th class="px-4 py-2 font-bold text-left">Vote Count</th>
                <th class="px-4 py-2 font-bold text-left">Vote Percent</th>
                <th class="px-4 py-2 font-bold text-left">Total</th>
                <th class="px-4 py-2 font-bold text-left">Result</th>
             
              </tr>
            </thead>
            <tbody>
            {
              voteResult.map((voteResult)=>(
              
              <tr className='text-sm divide-x-0 divide-slate-800 bg-emerald-50' key={voteResult.id}>
               
                   <td class="border px-1 py-2">
       
       {
      voteResult.candidate.photos.length > 0 ?
      
      <img
      class="w-8 h-8 mt-[-0.23rem] rounded-full" 
      src={voteResult.candidate.photos[0].photo_url}
           alt={voteResult.candidate.first_name}
      />
      :
      <img
      class="w-8 h-8 mt-[-0.23rem] rounded-full" 
      src = "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=is&k=20&c=BylqrV2Ac1wsHIHl0kSj9T-fkbMjrZ87-KOYpipyiJc="
           alt={voteResult.candidate.first_name}
      />
     
    }
       
       </td>
                <td class="border px-4 py-2">{voteResult.candidate.first_name} {voteResult.candidate.last_name}</td>
                <td class="border px-4 py-2">{voteResult.candidate.role.roleable.department}</td>
                <td class="border px-4 py-2">{voteResult.exam_score}</td>
                <td class="border px-4 py-2">{voteResult.vote_count}</td>
                <td class="border px-4 py-2">{
                          formatNumber(voteResult.voted_in_percent)
                               }
                 </td>
                <td class="border px-4 py-2">{
                        formatNumber(voteResult.totol_vote_percent)
            }%</td> 

            {
               formatNumber(voteResult.totol_vote_percent) >= formatNumber(calculateMax()) ? 
              <td class="border px-4 py-2 `"><Handlecolor status={voteResult.status} />Selected</td> 
              :
              <td class="border px-4 py-2 `"><Handlecolor status={voteResult.status} />Not Selected</td> 

              } 
             </tr>
        ))}
         
            
            </tbody>
          </table>
          
          <button className="mt-3 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={verifyVote}>
                  Confirm Result
          </button>
            </div>
          </div>
        </div>
          
          </div>
          </div>
          <div>
 
 
 
 
       
     </div>
      
    </div>
    
    )

}