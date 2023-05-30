import {React,useState, useContext, useEffect} from 'react'

import Sidebar from './Sidebar'
import { Link,useNavigate } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import VoterContext from '../../contexts/VoterContext';
import AllElectionData from './AllElectionData';
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
export default function ElectionResult(){

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
       if(user && user.user.role.roleable.role !== 'admin'){
           
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
      <div>
     
  <div className='h-[90px] w-full flex bg-emerald-500'>
              <div className='p-2 m-2 mb-2 flex-column'>
                  <div className='flex w-[13rem]  bg-emerald-600 '>
                      <h5 className='text-[0.9rem]'>Home</h5>
                      <h6 className='mt-1'><AiOutlineRight /></h6>
                      <h2 className='text-white font-semi-bold'>Admin</h2>
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
  
  <div class="bg-white rounded-lg shadow-md p-4 h-[17rem] overflow-y-auto">
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
               {/* <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={voteResult.photoUrl} alt={voteResult.candidate.first_name}/></td> */}
               
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
   
   {/* <footer class="bg-white rounded-lg shadow dark:bg-emerald-600 -mx-1">
       <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
           <div class="sm:flex sm:items-center sm:justify-between">
               <a href="#" class="flex items-center mb-4 sm:mb-0">
                   <img src={img} class="h-12 mr-3" alt="election" />
                   <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wolkite  University</span>
               </a>
               <ul class="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
               <li>
                   <Link to="/" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                   </li>
                   <li>
                   <Link to="/" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">News</Link>
                   </li>
                   <li>
                   <Link to="/" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Candidates</Link>
                   </li>
                   <li>
                   <Link to="/" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Election Progress</Link>
                   </li>
                   <li>
                   <Link to="/result" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Result</Link>
   
                       
                   </li>
                   <li>
                   <Link to="/" replace={true} smooth={true} duration={500} className="text-sm text-gray-900 dark:text-white hover:underline" aria-current="page">Login</Link>
   
                   </li>
                  
               </ul>
           </div>
           <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-50 lg:my-8" />
           <span class="block text-sm text-gray-50 sm:text-center dark:text-gray-50">© 2023 <a href="#" class="hover:underline">Your Team goes here™</a>. All Rights Reserved.</span>
       </div>
   </footer> */}
   
   
         
       </div>
        
      </div>
    )

}