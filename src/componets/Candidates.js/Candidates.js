import React from 'react'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/041a746a664d31ba7c4c6c1bc98b9010.jpg'
import img1 from './../../images/10354069_578454862259335_1343665270853874982_n.png'
import img3 from './../../images/elections-poll-svgrepo-com-2.svg'
import { FaVoteYea } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { useState } from 'react';
import App from './../../App'
import Landingpage from './../Home/Landingpage'

export default function Candidates() {

  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  function handleVote() {
    // Store previous state
   
    // Open popup message
  
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

  const candidates = [
    {
      id: 1,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2020,
      graduationYear: 2024,
      department: 'Computer Science',
      status: 'Pending',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    },
    {
      id: 3,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
,
    {
      id:4,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 5,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 6,
      fullName: 'Natnael Getachew',
      firstName:'ggg',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 7,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: `${img2}`,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    ,
    {
      id: 8,
      fullName: 'Natnael Getachew',
      firstName:'natty',
      lastName:'getachew',
      photoUrl: 'https://via.placeholder.com/150',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      admissionYear: 2019,
      graduationYear: 2023,
      department: 'Electrical Engineering',
      status: 'Approved',
      email: 'janedoe@example.com',
    }
    
    
  ];



  function handleCandidateClick(candidate) {
    setSelectedCandidate(candidate);
  }
  return (
    <div>
    <div className="container flex mx-auto px-6 py-10">
  
    <div className="flex flex-wrap w-[75%] -mx-2">
        <div className=" w-full px-4">
          <div className="bg-white rounded-lg  p-4 text-center">
            <h2 className="text-[2rem] text-red-500 font-medium mb-2 text-center">2016 EC election candidates</h2>
            {/* Content for first box goes here */}
            <div className='bg-emerald-500 shadow-md h-10 w-full rounded-[5px] flex item-center p-2'><p className='imag flex text-start item-center'>vote your president election start <p className='text-white ml-1 mr-1'>10-02-2016.</p>vote end  <p className='text-red-500 ml-1 mr-1'>`25-03-2016`</p> </p></div>
          </div>
        </div>
     
     <div className="bg-white w-full h-[40vh] rounded-lg mb-1 p-4">
          {/* Conditionally render candidate details */}
          {selectedCandidate ? (
            <div className="flex w-full items-center m-4">
              <div className="flex-shrink-0">
                <img
                  src={selectedCandidate.photoUrl}
                  alt={selectedCandidate.fullName}
                  className="w-60 h-60 rounded-[10px]"
                />
              </div>
              <div className="flex flex-col flex-1 md:ml-4 gap-1">
                <h2 className="text-xl font-bold  text-emerald-900 mb-3">
                  {selectedCandidate.firstName}  {selectedCandidate.lastName}
                </h2>
                <p className="mb-2 text-gray-900">{selectedCandidate.bio}</p>
                <div className="flex text-gray-600 item-center flex-row mb-2 gap-4">
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
                  <button className="bg-blue-500 shadow-md text-white font-bold py-2 px-4 rounded mr-2">
                    Read more
                  </button>
                  <button className="bg-emerald-600 shadow-md text-white font-bold py-2 px-4 rounded">
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
                       <FaVoteYea className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4  text-blue-600 bg-emerald-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-emerald-800 focus:ring-2 dark:bg-emerald-700 dark:border-emerald-600"
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
      <div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
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
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5" key={selectedCandidate.id} onClick={handleVote}>
            Vote
          </button>
        </span>
        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
        <a href='#'>
        <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5" onClick={handleCancel}>
            Cancel
          </button>
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
        <div className='flex-column p-2 gap-1'>
        <form>
        <div className=''>
         
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 shadow-md w-full text-sm text-emerald-900 bg-emerald-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
         
                 </div>
        </form>
      
        <button className="bg-blue-500 mt-1 shadow-md text-white font-bold py-2 px-4 rounded mr-2 left-0">send</button>

        </div>
    
    </div>
    <div className='p-3 mt-4 flex gap-6 '>
    <img src={img1} className='h-[120px] w-[120px] shadow-md rounded-[50%]' alt='placeholder' />
    <img src={img3} className='h-[120px] w-[120px] rounded-[50%]' alt='placeholder' />
    </div>
    <div className='absolute bottom-2 -mx-0 clip polygon b-3 d-3'>
    <img src={img} className='w-full h-auto shadow-md rounded' alt='placeholder' />
    </div>

    
    </div>
       
     
      
    </div>

    </div>

    
)
                
      

  
}
