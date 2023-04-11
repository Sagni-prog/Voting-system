import React from 'react'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/041a746a664d31ba7c4c6c1bc98b9010.jpg'
import img1 from './../../images/10354069_578454862259335_1343665270853874982_n.png'
import img3 from './../../images/elections-poll-svgrepo-com-2.svg'
import { FaVoteYea } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
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
      photoUrl: 'https://via.placeholder.com/150',
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
      photoUrl: 'https://via.placeholder.com/150',
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
      photoUrl: 'https://via.placeholder.com/150',
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
      photoUrl: 'https://via.placeholder.com/150',
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
      photoUrl: 'https://via.placeholder.com/150',
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
      photoUrl: 'https://via.placeholder.com/150',
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
        <div className="w-full w-full px-4">
          <div className="bg-white rounded-lg  p-4 text-center">
            <h2 className="text-[2rem] text-red-500 font-medium mb-2 text-end">2016 EC election candidates</h2>
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
    
        <div className="w-full  px-4">
          <div className="bg-white rounded-lg shadow-md p-4">
           
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-emerald-800" >
                  {/* <th class="px-1 py-1 font-bold text-left">photo</th> */}
                    <th className="text-left py-2">First Name</th>
                    <th className="text-left py-2">Last Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Vote</th>
                  </tr>
                </thead>
                
                <tbody>
                  {candidates.map(candidate => (
                    <tr key={candidate.id} className="border-b hover:bg-emerald-100 text-gray-800 cursor-pointer" onClick={() => setSelectedCandidate(candidate)}>
                      {/* <td class="border px-1 py-1"><img class="w-8 h-8 mt-[-0.23rem] rounded-full"  
                          src={selectedCandidate.photoUrl}
                          alt={selectedCandidate.fullName}/></td> */}
                      <td className="py-2">{candidate.firstName}</td>
                      <td className="py-2">{candidate.lastName}</td>
                      <td className="py-2">{candidate.email}</td>
                      <td className="py-2">{candidate.status}</td>
                      <td className="py-2 text-center"><FaVoteYea className="text-blue-500 hover:text-blue-600 cursor-pointer" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
          
          </div>
        </div>
      </div>
    </div>
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
