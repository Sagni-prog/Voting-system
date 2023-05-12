/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-useless-rename */
/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from "react";
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/041a746a664d31ba7c4c6c1bc98b9010.jpg'
import img1 from './../../images/10354069_578454862259335_1343665270853874982_n.png'
import img3 from './../../images/elections-poll-svgrepo-com-2.svg'
import { FaVoteYea } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Link as Link} from 'react-router-dom'
import { useState } from 'react';
import App from './../../App'
import Landingpage from './../Home/Landingpage'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import{ fetchCandidates }from './../../app/features/candidate/Candidate'

export default function Candidates() {
 const candidates = useSelector((state) => state.candidate.candidates); 
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [readMore,setReadMore]=useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);

  function handleVote() {
    // Store previous state
   
    // Open popup message
  
  }
  const handleReadMore=(candidate)=>{
    setSelectedCandidate(candidate);
    setReadMore(!readMore)
  }

 
  const handleCancel = () => {
    // set selected candidate to null or previous selected candidate
    setSelectedCandidate(null);
    // close the popup
    setIsChecked(false);
  };

 

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  



  function handleCandidateClick(candidate) {
    setSelectedCandidate(candidate);
  }
  return (
    <div>
    <div className="container flex px-6 py-10 mx-auto">
  
    <div className="flex flex-wrap w-[75%] -mx-2">
        <div className="w-full px-4 ">
          <div className="p-4 text-center bg-white rounded-lg">
            <h2 className="text-[2rem] text-red-500 font-medium mb-2 text-center">2016 EC election candidates</h2>
            {/* Content for first box goes here */}
        
            <div className='bg-emerald-500 shadow-md h-10 w-full rounded-[5px] flex item-center p-2'>
            <marquee width="100%" direction="right" height="100px">
            <p className='flex text-start item-center'>vote your president election start <p className='ml-1 mr-1 text-white'>10-02-2016.</p>vote end  <p className='ml-1 mr-1 text-red-500'>`25-03-2016`</p> </p>
</marquee>
            </div>
          </div>
        </div>
     
     <div className="bg-white w-full h-[40vh] rounded-lg mb-1 p-4">
          {/* Conditionally render candidate details */}
          {selectedCandidate ? (
            <div className="flex items-center w-full m-4">
              <div className="flex-shrink-0">
                <img
                  src={selectedCandidate.photoUrl}
                  alt={selectedCandidate.fullName}
                  className="w-60 h-60 rounded-[10px]"
                />
              </div>
              <div className="flex flex-col flex-1 gap-1 md:ml-4">
                <h2 className="mb-3 text-xl font-bold text-emerald-900">
                  {selectedCandidate.firstName}  {selectedCandidate.lastName}
                </h2>
                <p className="mb-2 text-gray-900">{selectedCandidate.bio}</p>
                <div className="flex flex-row gap-4 mb-2 text-gray-600 item-center">
                  <div className="flex ">
                    <p className="font-medium text-[12px]">
                      Admission Year: {selectedCandidate.admissionYear} 
                    </p>
                    
                  </div>
                  |
                  <div className="flex">
                    <p className="font-medium text-[12px]">
                      Graduation Year: {selectedCandidate.graduationYear} 
                    </p>
                    
                  </div>
                  |
                  <div className="flex">
                    <p className="font-medium text-[12px]">
                      Department: {selectedCandidate.department}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                {/* <Link to={{ pathname: '/Candidateprofile', state: { candidate: selectedCandidate } }} replace={true} className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded shadow-md cursor-pointer hover:bg-blue-400" key={selectedCandidate.id}>
                Read more
                </Link> */}
                <button className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded shadow-md cursor-pointer hover:bg-blue-400" key={selectedCandidate.id}  onClick={() => setReadMore(!readMore)}>
                Read more
                </button>
   

                  <button className="px-4 py-2 font-bold text-white rounded shadow-md bg-emerald-600">
                    <FaVoteYea className="inline-block mr-2" />
                    Vote
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center">Select a candidate to view details</p>
          )}
        </div>
        <div className="container mx-4 my-4">
    
        <div className="w-full ">
          <div className="bg-white rounded-lg">
          <div class="p-4  border border-gray-200 rounded-lg shadow-md sm:p-8 ">
                  <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-800">
                      candidates
                    </h5>
                  
                  </div>
                  <div class="flow-root w-[50rem] h-[50vh] overflow-y-auto">
                    <ul
                      role="list"
                      class="divide-y  divide-gray-700 dark:divide-gray-500">
                       {candidates.map((candidate ) => (
                        <li key={candidate.id} className="border-b h-[4rem] hover:bg-emerald-300  text-gray-800 cursor-pointer p-2" onClick={() => setSelectedCandidate(candidate)}>
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-12 h-12 rounded-full"
                src={candidate.photoUrl}
                   alt={candidate.firstName}
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 truncate ">
              {candidate.firstName}  {candidate.lastName}
              </p>
              <p class="text-sm text-gray-500 item-center truncate dark:text-gray-400">
                {candidate.department}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          
              </p>
            </div>
            <div className="item-center">
                      <label for="default-checkbox" class="flex gap-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                       <FaVoteYea className="text-blue-500 cursor-pointer hover:text-blue-600" />
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded bg-emerald-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-emerald-800 focus:ring-2 dark:bg-emerald-700 dark:border-emerald-600"
                          />
                      </label>
                    </div>
      
          </div>
        </li>
                      ))}

          </ul>
                  </div>
                </div>
    
 
          </div>
        </div>
      </div>
    </div>
  
    
  
    {isChecked && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

    <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Vote Confirmation
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500">
                Are you sure you want to vote for {selectedCandidate.firstName} {selectedCandidate.lastName}?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green sm:text-sm sm:leading-5" key={selectedCandidate.id} onClick={handleVote}>
            Vote
          </button>
        </span>
        <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <a href='#'>
        <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5" onClick={handleCancel}>
            Cancel
          </button>
        </a>
          
        </span>
      </div>
    </div>
  </div>
</div>

)}
{readMore &&(   <div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
   
    <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl my-8  w-[100%]">
    <div class="bg-white m-10 p-[2rem] rounded-lg shadow-md">
        <div class="flex items-center mb-6">

          <img class="w-[6rem] h-[6rem] rounded-full mr-4" src={img2} alt="User Profile Image"/>
          <div>
            <h2 class="text-xl font-bold">{selectedCandidate.firstName} {selectedCandidate.lastName}</h2>
            <p class="text-gray-700">{selectedCandidate.email}</p>
            <p class="text-gray-700">welkite,SNN, Ethiopia</p>
            <p class="text-gray-700">{selectedCandidate.department}</p>
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

          
      <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Vote Confirmation
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-500">
                Are you sure you want to vote for {selectedCandidate.firstName} {selectedCandidate.lastName}?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green sm:text-sm sm:leading-5" key={selectedCandidate.id} onClick={handleVote}>
            Vote
          </button>
        </span>
        <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <a href='#'>
        <Link   to="/" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5" onClick={handleCancel}>
            Cancel
          </Link>
        </a>
          
        </span>
      </div>
    </div>
  
  </div>
</div>
)}

   
    <div className='relative bg-emerald-500 shadow-md h-50 w-[25%] rounded-[15px]'>
    <div className='flex-column gap-0 mt-[1rem]'>
        <h1 className='text-[1.5rem]  text-white font-bold p-3 '>you have something to say?</h1>
        <div className='gap-1 p-2 flex-column'>
        <form>
        <div className=''>
         
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 shadow-md w-full text-sm text-emerald-900 bg-emerald-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
         
                 </div>
        </form>
      
        <button className="left-0 px-4 py-2 mt-1 mr-2 font-bold text-white bg-blue-500 rounded shadow-md">send</button>

        </div>
    
    </div>
    <div className='flex gap-6 p-3 mt-4 '>
    <img src={img1} className='h-[120px] w-[120px] shadow-md rounded-[50%]' alt='placeholder' />
    <img src={img3} className='h-[120px] w-[120px] rounded-[50%]' alt='placeholder' />
    </div>
    <div className='absolute -mx-0 bottom-2 clip polygon b-3 d-3'>
    <img src={img} className='w-full h-auto rounded shadow-md' alt='placeholder' />
    </div>

    
    </div>
       
     
      
    </div>

    </div>

    
)

                
      

  
}
