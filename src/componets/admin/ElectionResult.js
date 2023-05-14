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
    const navigate = useNavigate();
   
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
  
    const candidates = [
        {
          id: 1,
          firstName:'Natnael',
          lastName:'Getachew',
          photoUrl: `${img2}`,
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          admissionYear: 2020,
          graduationYear: 2024,
          vote:247,
          percent:80,
          department: 'Computer Science',
          status: 'Not',
          email: 'johndoe@example.com',
        },  
          {
          id: 2,
          firstName:'Natnael',
          lastName:'Getachew',
          photoUrl: `${img2}`,
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          admissionYear: 2020,
          graduationYear: 2024,
          vote:247,
          percent:80,
          department: 'Computer Science',
          status: 'Not',
          email: 'johndoe@example.com',
        },
        {
          id: 3,
          firstName:'Natnael',
          lastName:'Getachew',
          photoUrl: `${img2}`,
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          admissionYear: 2020,
          graduationYear: 2024,
          vote:247,
          percent:80,
          department: 'Computer Science',
          status: 'passed',
          email: 'johndoe@example.com',
        },
        {
          id: 4,
          firstName:'Natnael',
          lastName:'Getachew',
          photoUrl: `${img2}`,
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          admissionYear: 2020,
          graduationYear: 2024,
          vote:247,
          percent:80,
          status:'passed',
          department: 'Computer Science',
          status: 'Not',
          email: 'johndoe@example.com',

        }
        
        
        
        
        
      ]; 

    
  
    const {voterState, voterDispatch} = useContext(VoterContext)
    
    useEffect(() => {
    console.log("what is wrong",voterState)
    console.log("what is wrong")
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
    
    console.log("from voter",voterState)
  
  
    return (
      <div>
      <div>
      <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
      <a href="#" className="flex items-center gap-1">
      <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
      <Link to="/" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>
  
      
      <h6 className="absolute text-red-600 top-3 right-4 ">2016 EC vote for student president.</h6>
              {/* <span className="self-center font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
          </a>
          
      </div>
       
         <nav className=" h-[50px]    border-blue-200 shadow-md dark:bg-emerald-600">
      {/* dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... */}
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
      <a href="#" className="flex items-center">
      <h3 className="text-white flex items-center mt-[-0.5rem]">An official website of Welkite University.</h3>
              {/* <span className="self-center font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
          </a>
          <div className="flex items-center">
          <div className="flex items-center">
              <ul className="flex flex-row space-x-8 text-sm font-medium">
                  <li>
                  <Link to="/" replace={true}   className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                  </li>
                  <li>
                  <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">News</Link>
                  </li>
                  <li>
                  <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Candidates</Link>
                  </li>
                  <li>
                  <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Election Progress</Link>
                  </li>
                  <li>
                  <Link to="/result" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Result</Link>
                      
                  </li>
                  {/* <li> */}
                  {/* <Link to="/Candidateprofile" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Feedback</Link> */}
                  {/* </li> */}
                  <li>
                  <Link to="/" smooth={true} duration={500} className="text-sm text-gray-900 dark:text-white hover:underline" aria-current="page">Login</Link>
  
                  </li>
        
                  <li>
                  <img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={image} alt="user photo"/>
                  
                  </li>
              </ul>
          </div>
              
          </div>
      </div>
  </nav>
        
  </div>
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
  <h2 class="text-xl font-bold mb-8">Vote Result Out of 50%</h2>
  <div class="bg-white rounded-lg shadow-md p-4 h-[17rem] overflow-y-auto">
  <table class="table-auto  w-full">
            <thead>
              <tr className='divide-y-0 bg-emerald-500 divide-slate-800'>
                <th class="px-1 py-1 font-bold text-left">photo</th>
                <th class="px-4 py-2 font-bold text-left">FullName</th>
                <th class="px-4 py-2 font-bold text-left">Department</th>
                <th class="px-4 py-2 font-bold text-left">Vote Count</th>
                <th class="px-4 py-2 font-bold text-left">Percent</th>
                <th class="px-4 py-2 font-bold text-left"> </th>
             
              </tr>
            </thead>
            <tbody>
            {candidates.map((candidate)=>(
              
              <tr className='text-sm divide-x-0 divide-slate-800 bg-emerald-50' key={candidate.id}>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={candidate.photoUrl} alt={candidate.firstName}/></td>
                <td class="border px-4 py-2">{candidate.firstName} {candidate.lastName}</td>
                <td class="border px-4 py-2">{candidate.department}</td>
                <td class="border px-4 py-2">{candidate.vote}</td>
                <td class="border px-4 py-2">{candidate.percent}%</td>
              <td class="border px-4 py-2 `"><Handlecolor status={candidate.status} /></td>
               
             </tr>
        ))}
         
            
            </tbody>
          </table>
            </div>
</div>
   
     
        </div>
        <div class="flex gap-4 mb-4 w-full">
    <div class="bg-white p-6 rounded-lg w-full shadow-md">
  <h2 class="text-xl font-bold mb-8">Vote Result Out of 100%</h2>
  <div class="bg-white rounded-lg shadow-md p-4 h-[17rem] overflow-y-auto">
  <table class="table-auto  w-full">
            <thead>
              <tr className='divide-y-0 bg-emerald-500 divide-slate-800'>
                <th class="px-1 py-1 font-bold text-left">photo</th>
                <th class="px-4 py-2 font-bold text-left">FullName</th>
                <th class="px-4 py-2 font-bold text-left">Department</th>
                <th class="px-4 py-2 font-bold text-left">Vote Count</th>
                <th class="px-4 py-2 font-bold text-left">Percent</th>
                <th class="px-4 py-2 font-bold text-left"> </th>
             
              </tr>
            </thead>
            <tbody>
            {candidates.map((candidate)=>(
              
              <tr className='text-sm divide-x-0 divide-slate-800 bg-emerald-50' key={candidate.id}>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={candidate.photoUrl} alt={candidate.firstName}/></td>
                <td class="border px-4 py-2">{candidate.firstName} {candidate.lastName}</td>
                <td class="border px-4 py-2">{candidate.department}</td>
                <td class="border px-4 py-2">{candidate.vote}</td>
                <td class="border px-4 py-2">{candidate.percent}%</td>
              <td class="border px-4 py-2 `"><Handlecolor status={candidate.status} /></td>
               
             </tr>
        ))}
         
            
            </tbody>
          </table>
            </div>
</div>
   
     
        </div>
       
           
            </div>
            </div>
            <div>
   
   <footer class="bg-white rounded-lg shadow dark:bg-emerald-600 -mx-1">
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
   </footer>
   
   
         
       </div>
        
      </div>
    )

}