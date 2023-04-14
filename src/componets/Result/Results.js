import {react } from 'react'
import Navbar from './../Nav/Navbar'
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import Footer from './../Footer/Footer'
import { Link, Element } from 'react-scroll';
import { AiOutlineRight} from "react-icons/ai";
import { useState } from 'react';
export default function Results(){
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
          status: 'Pending',
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
          status: 'Pending',
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
          status: 'Pending',
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
          status:'pass',
          department: 'Computer Science',
          status: 'Pending',
          email: 'johndoe@example.com',

        }
        
        
        
        
        
      ]; 
     
return (
    <div>
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <Link to="section1" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>

    
    <h6 className="text-red-600 absolute top-3 right-4 ">2016 EC vote for student president.</h6>
            {/* <span className="self-center  font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
        </a>
        
    </div>
     
       <nav className=" h-[50px]    border-blue-200 shadow-md dark:bg-emerald-600">
    {/* dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... */}
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    <a href="#" className="flex items-center">
    <h3 className="text-white flex items-center mt-[-0.5rem]">An official website of Welkite University.</h3>
            {/* <span className="self-center  font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
        </a>
        <div className="flex items-center">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium space-x-8 text-sm">
                <li>
                <Link to="/" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                <Link to="/" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">News</Link>
                </li>
                <li>
                <Link to="/" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Candidates</Link>
                </li>
                <li>
                <Link to="/" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Election Progress</Link>
                </li>
                <li>
                <Link to="/result" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Result</Link>
                    
                </li>
                {/* <li> */}
                {/* <Link to="/Candidateprofile" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Feedback</Link> */}
                {/* </li> */}
                <li>
                <Link to="/" smooth={true} duration={500} className="text-gray-900 dark:text-white text-sm hover:underline" aria-current="page">Login</Link>

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
   <div className='h-auto w-full'>
        <div className='h-[90px] w-full flex bg-emerald-500'>
            <div className='flex-column p-2 m-2 mb-2'>
                <div className='flex w-[13rem]  bg-emerald-600 '>
                    <h5 className='text-[0.9rem]'>Home</h5>
                    <h6 className='mt-1'><AiOutlineRight /></h6>
                    <h2 className='font-semi-bold text-white'>Election Result</h2>
                </div>
                <div>
                    <h1 className='font-bold text-[1.9rem] text-white'>Election Result</h1>
                </div>
            </div>
        </div>
        <div className='w-[13rem] h-1 bg-emerald-900 ml-4 mt-0'></div>
        <div className='p-5 mb-10'>
           
        


    <div className=" w-full flex-column items-center">
      <div className=" py-4 font-bold text-lg w-full text-center">
        Trusted for Your Vote
      </div>
<div className="w-full flex-column p-2">
        <div
          className=" py-4 text-black font-bold text-lg w-full text-start"
        >
          The 6th National Election Result
        </div>
        <div className='mb-[3rem]'>
        <button className="bg-gray-200 py-1 text-black font-bold  text-lg w-[70%] border h-[2.2rem] text-center cursor-pointer"
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
        {open && ( <div className=" w-[70%] bg-slate-100  mt-4">
        <div className='p-20 m-4 flex-col'>
        <div className='w-full h-[50px] bg-slate-500'>
          <h1 className='text-center text-sm  text-white p-4'>Result Report for election <span className='text-sky-500 text-[1rem]'>2016 EC</span></h1>
        </div>
        <table class="table-auto  w-full">
            <thead>
              <tr className='bg-emerald-500 divide-y-0 divide-slate-800'>
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
              <tr className='text-sm  divide-x-0 divide-slate-800 bg-emerald-50' key={candidate.id}>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={candidate.photoUrl} alt={candidate.firstName}/></td>
                <td class="border px-4 py-2">{candidate.firstName} {candidate.lastName}</td>
                <td class="border px-4 py-2">{candidate.department}</td>
                <td class="border px-4 py-2">{candidate.vote}</td>
                <td class="border px-4 py-2">{candidate.percent}</td>
                <td class="border px-4 py-2">{candidate.status}</td>
               
             </tr>
        ))}
         
            
            </tbody>
          </table>

        </div>
       
    </div>)}
        </div>
    <div className='mb-[3rem]'>
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
        <div className='p-20 m-4 flex-col'>
        <div className='w-full h-[50px] bg-slate-500'>
          <h1 className='text-center text-sm  text-white p-4'>Result Report for election <span className='text-sky-500 text-[1rem]'>2016 EC</span></h1>
        </div>
        <table class="table-auto  w-full">
            <thead>
              <tr className='bg-emerald-500 divide-y-0 divide-slate-800'>
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
              <tr className='text-sm  divide-x-0 divide-slate-800 bg-emerald-50' key={candidate.id}>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={candidate.photoUrl} alt={candidate.firstName}/></td>
                <td class="border px-4 py-2">{candidate.firstName} {candidate.lastName}</td>
                <td class="border px-4 py-2">{candidate.department}</td>
                <td class="border px-4 py-2">{candidate.vote}</td>
                <td class="border px-4 py-2">{candidate.percent}</td>
                <td class="border px-4 py-2">{candidate.status}</td>
               
             </tr>
        ))}
         
            
            </tbody>
          </table>

        </div>
       
    </div>)}
    </div>
   
      </div>
      
    
    </div>
                
            </div>
        </div>
  


    <Footer />
    </div>
);

}




