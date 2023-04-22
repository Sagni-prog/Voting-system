import React from 'react'
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import Footer from './../Footer/Footer'
import {useEffect} from 'react'
import { AiOutlineRight} from "react-icons/ai";
import { useState } from 'react';
import { Link as Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'

// import { selectCandidate } from './../../candidateDetailSlice';
export default function Candidateprofile(props) {
  const candidate = props.state || {};

  // Use the candidate object to render the candidate details
  return (
    <div>
            <div>
        <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
        <a href="#" className="flex items-center gap-1">
        <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
        <Link to="/" replace={true} smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>

        
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
                <div className='flex w-[15rem]  bg-emerald-600 '>
                    <h5 className='text-[0.9rem]'>Home</h5>
                    <h6 className='mt-1'><AiOutlineRight /></h6>
                    <h2 className='text-white font-semi-bold'>candidate profile</h2>
                </div>
                <div>
                    <h1 className='font-bold text-[1.9rem] text-white'>Candidate Profile</h1>
                </div>
            </div>
        </div>
        <div className='w-[15rem] h-1 bg-emerald-900 ml-4 mt-0'></div>


  <div class="bg-white m-10 p-[2rem] rounded-lg shadow-md">
        <div class="flex items-center mb-6">

          <img class="w-[6rem] h-[6rem] rounded-full mr-4" src={img2} alt="User Profile Image"/>
          <div>
            <h2 class="text-xl font-bold">{candidate.firstname} {candidate.lastName}</h2>
            <p class="text-gray-700">{candidate.email}</p>
            <p class="text-gray-700">welkite,SNN, Ethiopia</p>
            <p class="text-gray-700">{candidate.department}</p>
          </div>
        </div>
        <h2 class="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis</h2>

        <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.</p>
        <div class="flex items-center">
          <p class="text-gray-700 mr-2">Rating:</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
              <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
            </svg>
            <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
              <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
            </svg>
            <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
              <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
            </svg>
            <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
              <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
            </svg>
          
            
      </div>

      </div>
      <div className='p-6 '>
            <div class="flex items-center mb-6 gap-4">
            <div className='p-2'>
            <div className='flex gap-10'>
            <span className='text-black'>Department</span>
            <p class="text-gray-500">software Engineering</p>
            </div>
            <div className='flex gap-10'>
            <span className='mr-3 text-black'>Exam core</span>
            <p class="text-gray-500 ">202</p>
            </div>
            <div className='flex gap-10'>
            <span className='text-black mr-14'>GPA</span>
            <p class="text-gray-500 ">3.88</p>
            </div>
            <div className='flex gap-10'>
            <span className='text-black mr-[3.6rem]'>SEX</span>
            <p class="text-gray-500 ">M</p>
            </div>
          
            </div>
        
            <div className='p-2'>
            <div className='gap-10 flex mt-[-1.03rem]'>
            <span className='text-black'>Admission Year</span>
            <p class="text-gray-500">02-04-2021</p>
            </div>
            <div className='gap-[2.22rem] flex'>
            <span className='text-black'>Graduation Year</span>
            <p class="text-gray-500 ">02-04-2021</p>
            </div>
            <div className='gap-[2rem] flex'>
            <span className='text-black'>Educational Year</span>
            <p class="text-gray-500 ">02-04-2021</p>
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

