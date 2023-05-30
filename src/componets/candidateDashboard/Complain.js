import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from '../Nav/Navbar';
import { Link } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import Alert from '../admin/Alert';
import http from '../../http/http';

export default function Complain() {
    const [complain, setComplain] = useState('');
    
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = (event) => {
        try{
          event.preventDefault();
          const formData = new FormData();
          formData.append("complain_description",complain);
          sendDescription(formData)
          
          } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Failed to add strategy and policy.');
            setTimeout(() => {
              setErrorMessage('');
            }, 4000);
          
        }  
     };
     
     const sendDescription = async(data) => {
        
        const res = await http.post('/complain',data);
        console.log("from descriptin", res.data)
        if(res.data.status !== 'succcess'){
            setSuccessMessage('');
          setErrorMessage('Failed to add strategy and policy.');
          setTimeout(() => {
            setErrorMessage('');
          }, 4000);
        }
        
        setComplain('');
        setSuccessMessage('strategy and policy added successfully.');
        setErrorMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 4000);
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
  <h2 class="text-2xl font-bold mb-10">Add Compalain</h2>
  <div className='mb-2'>
      {/* Display success message if available */}
      {successMessage && (
        
        <Alert type="success" message={successMessage} />
      )}

      {/* Display error message if available */}
      {errorMessage && <Alert type="error" message={errorMessage} />}
    </div>

  <form onSubmit={handleSubmit}>
  <div className='flex gap-4'>
      
      </div>
      <div class="mb-4 w-full">
          <label class="block text-gray-700 font-bold mb-2" for="title">
            Description
          </label>
          <div class="w-full mb-4 border border-emerald-200 rounded-lg bg-emerald-50 dark:bg-emerald-700 dark:border-emerald-600">
       <div class="flex items-center justify-between px-3 py-2 border-b dark:border-emerald-600">
          
           <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
               <span class="sr-only">Full screen</span>
           </button>
           <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
               Show full screen
               <div class="tooltip-arrow" data-popper-arrow></div>
           </div>
       </div>
       <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-emerald-800">
           <label for="editor" class="sr-only">Submit</label>
           <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-emerald-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Put your complains here..." required
             value={complain}
             onChange={(e) => setComplain(e.target.value)}
           ></textarea>
       </div>
   </div>
          </div>
  
   <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
     Submit
   </button>
</form>

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
