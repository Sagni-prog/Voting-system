import React, { useContext,useEffect } from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import http from '../../http/http';
import CandidateContext from '../../contexts/CandidateContext';
import AllElectionData from '../admin/AllElectionData';


export default function CandidateDashboardHome() {
    const navigate = useNavigate();
  
    useEffect(() => {
    
    try {
      
    
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
    
    const handleDelete = async(id) => {
      try {
        const res = await http.delete(`user/${id}`);
        console.log(res);
         } catch (error) { 
      }
    }
  
    const {candidateState,candidateDispatch} = useContext(CandidateContext);
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
  <div className='h-[90px] w-full flex bg-emerald-500'>
              <div className='p-2 m-2 mb-2 flex-column'>
                  <div className='flex w-[13rem]  bg-emerald-600 '>
                      <h5 className='text-[0.9rem]'>Home</h5>
                      <h6 className='mt-1'><AiOutlineRight /></h6>
                      <h2 className='text-white font-semi-bold'>Candidate</h2>
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
            <div class="bg-white rounded-lg shadow-md p-4 h-[17rem] overflow-y-auto">
            <table class="table-auto  w-full">
              <thead>
                <tr>
                <th class="px-1 py-2 font-bold text-left">photo</th>
                  <th class="px-4 py-2 font-bold text-left">First name</th>
                  <th class="px-4 py-2 font-bold text-left">Last name</th>
                  <th class="px-4 py-2 font-bold text-left">Email</th>
                  <th class="px-4 py-2 font-bold text-left">Department</th>
                  <th class="px-4 py-2 font-bold text-left"></th>
                  <th class="px-4 py-2 font-bold text-left">Status</th>
                  <th class="px-4 py-2 font-bold text-left"></th>
                </tr>
              </thead>
              <tbody>
              { 
                      candidateState.length > 0 ?
                         candidateState.map((candidate ) => (
                         
                <tr  key={candidate.candidate.id} className="border-b h-[4rem] hover:bg-emerald-300  text-gray-800 cursor-pointer p-2" >
                 <td class="border px-1 py-2">
     
                 {
                candidate.candidate.photos.length > 0 ?
                
                <img
                class="w-8 h-8 mt-[-0.23rem] rounded-full" 
                src={candidate.candidate.photos[0].photo_url}
                     alt={candidate.candidate.first_name}
                />
                :
                <img
                class="w-8 h-8 mt-[-0.23rem] rounded-full" 
                src = "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=is&k=20&c=BylqrV2Ac1wsHIHl0kSj9T-fkbMjrZ87-KOYpipyiJc="
                     alt={candidate.candidate.first_name}
                />
               
              }
                 
                 </td>
                  <td class="border px-4 py-2">{candidate.candidate.first_name} </td>
                  <td class="border px-4 py-2">{candidate.candidate.last_name}</td>
                  <td class="border px-4 py-2">{candidate.candidate.email}</td>
                  <td class="border px-4 py-2">{candidate.candidate.role.roleable.department}</td>
                  <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                  <td className='px-4 py-2 border '>
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                  <button href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete(candidate.id)}>Delete</button>
                  </td>
                </tr>
             ))
             :
             <p>Candidates not found</p>
           }
               
              
              </tbody>
            </table>
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
