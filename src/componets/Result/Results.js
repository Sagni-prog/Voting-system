import {react } from 'react'
import Navbar from './../Nav/Navbar'
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import Footer from './../Footer/Footer'
import {useEffect} from 'react'
import { AiOutlineRight} from "react-icons/ai";
import { useState } from 'react';
import { Link as Link} from 'react-router-dom'
import http from '../../http/http'
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
export default function Results(){
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    
    const [voteResult, setVoteResult] = useState([]);
  
  useEffect(() => {
    getVoteResult();
   
  },[])
  
  
  
  const getVoteResult = async() => {
   
  const data = await http.get('/vote/2/vote-result');
   
  setVoteResult(data.data);

  }
  
  console.log("from vote result: ",voteResult)
  
  const formatNumber = (number) => {
      
    return Number.parseFloat(number).toFixed(2)
  }
  
  const calculateMax = () => {
    //  const max = voteResult[0].totol_vote_percent;
     
     return Math.max.apply(Math, voteResult.data.map(function(vote) { return vote.totol_vote_percent; }))
  }
  
    

     
     
return (
    <div>
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <Link to="/" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>

    
    <h6 className="absolute text-red-600 top-3 right-4 ">2016 EC vote for student president.</h6>
           
        </a>
        
    </div>
     
       <nav className=" h-[50px]    border-blue-200 shadow-md dark:bg-emerald-600">
    {/* dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... */}
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <a href="#" className="flex items-center">
    <h3 className="text-white flex items-center mt-[-0.5rem]">An official website of Welkite University.</h3>
           
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
   <div className='w-full h-auto'>
        <div className='h-[90px] w-full flex bg-emerald-500'>
            <div className='p-2 m-2 mb-2 flex-column'>
                <div className='flex w-[13rem]  bg-emerald-600 '>
                    <h5 className='text-[0.9rem]'>Home</h5>
                    <h6 className='mt-1'><AiOutlineRight /></h6>
                    <h2 className='text-white font-semi-bold'>Election Result</h2>
                </div>
                <div>
                    <h1 className='font-bold text-[1.9rem] text-white'>Election Result</h1>
                </div>
            </div>
        </div>
        <div className='w-[13rem] h-1 bg-emerald-900 ml-4 mt-0'></div>
        <div className='p-5 mb-10'>
           
        

  {
    voteResult.isConfirmed === 1 ? 
    (
    <div className="items-center w-full flex-column">
      <div className="w-full py-4 text-lg font-bold text-center ">
        Trusted for Your Vote
      </div>
<div className="w-full p-2 flex-column">
        <div
          className="w-full py-4 text-lg font-bold text-black text-start"
        >
         {voteResult.vote_name}
        </div>
        
        <div className='mb-[3rem]'>
        <button className="bg-gray-200 py-1 text-black font-bold  text-lg w-[100%] border h-[5.2rem] text-center cursor-pointer"
         onClick={() => setOpen(!open)}>
          <div className="flex items-center">
            <div
              className={`${
                open ? "transform rotate-90" : " "
              } cursor-pointer`}
            >
              <AiOutlineRight />
            </div>
            <div>General Election Results Summary Report</div>
          </div>
        </button>
        {open && ( <div className=" w-[90%] h-100 bg-slate-100  mt-4">
        <div className='flex-col p-20 m-4'>
        <div className='w-full h-[50px] bg-slate-500'>
          <h1 className='p-4 text-sm text-center text-white'>{voteResult.vote_name}</h1>
        </div>
      
          
          <div class="bg-white rounded-lg shadow-md p-4 h-[100%] overflow-y-auto">
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
              voteResult.data.map((voteResult)=>(
              
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
              <td class="border px-4 py-2 `">
              <p className='p-2 -mx-0 text-emerald-600'>
                   Selected
              </p>   
            </td> 
              :
              <td class="border px-4 py-2 `"> 
                 <p className='p-2 -mx-0 text-red-500'>
                     Not Selected
                </p>
             </td> 

              } 
             </tr>
        ))}
         
            
            </tbody>
          </table>
          
          
            </div>

        </div>
       
    </div>)}
        </div>
        
    {/* <div className='mb-[3rem]'>
    <button className="bg-gray-200 py-1 text-black font-bold text-lg w-[70%] border h-[2.2rem] text-center cursor-pointer"
         onClick={() => setOpen1(!open1)}>
          <div className="flex items-center">
            <div
              className={`${
                open1 ? "transform rotate-90" : " "
              } cursor-pointer`}
            >
              <AiOutlineRight />
            </div>
            <div>General Election Results Summary Report</div>
          </div>
        </button>
        {open1 && ( <div className=" w-[70%] bg-slate-100  mt-4">
        <div className='flex-col p-20 m-4'>
        <div className='w-full h-[50px] bg-slate-500'>
          <h1 className='p-4 text-sm text-center text-white'>Result Report for election <span className='text-sky-500 text-[1rem]'>2016 EC</span></h1>
        </div>
        <table class="table-auto  w-full">
            <thead>
              <tr className='divide-y-0 bg-emerald-500 divide-slate-800'>
                <th class="px-1 py-1 font-bold text-left">photo</th>
                <th class="px-4 py-2 font-bold text-left">FullName</th>
                <th class="px-4 py-2 font-bold text-left">Department</th>
                <th class="px-4 py-2 font-bold text-left">Vote Count</th>
                <th class="px-4 py-2 font-bold text-left">Percent</th>
                <th class="px-4 py-2 font-bold text-left"></th>
             
              </tr>
            </thead>
            <tbody>
            {candidates.map((candidate)=>(
              <tr className='text-sm divide-x-0 divide-slate-800 bg-emerald-50' key={candidate.id}>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={candidate.photoUrl} alt={candidate.firstName}/></td>
                <td class="border px-4 py-2">{candidate.firstName} {candidate.lastName}</td>
                <td class="border px-4 py-2">{candidate.department}</td>
                <td class="border px-4 py-2">{candidate.vote}</td>
                <td class="border px-4 py-2">{candidate.percent}</td>
                <td class="border px-4 py-2"><Handlecolor status={candidate.status} /></td>
               
             </tr>
        ))}
         
            
            </tbody>
          </table>

        </div>
       
    </div>)}
    </div> */}
   
      </div>
      
    
    </div>
    )
   :
   
   ''
              
  }
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
);

}




