import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import http from '../../http/http';
// import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Alert from './Alert';


export default function AddChairman() {

  //  const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
  

  const sendRegister = async(data) => {
  
  try {
    
  
    const token = localStorage.getItem('token')
    const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          'Authorization': `Bearer ${token}`
        }
     });
     const res = await http.post('/chairman/register',data);
     const user = res.data;
     console.log(user.status)
     
     if(user.status === 'sucess'){
  
      localStorage.removeItem('face-id');
      
   }
   
   if(res.data.status !== 'sucess'){
    setSuccessMessage('');
    setErrorMessage('Failed to add candidate.');
    setTimeout(() => {
     setErrorMessage('');
      }, 4000);
   }
   
   clearFields()
   setSuccessMessage('Candidate added successfully.');
   setErrorMessage('');
   
   setTimeout(() => {
     setSuccessMessage('');
   }, 4000);
      } catch (error) {
    
    }
  }
    
    
  
    const handleSubmit = (event) => {
      try{
    
      event.preventDefault();
     
      const formData = new FormData();
      formData.append("first_name",firstName);
      formData.append("last_name",firstName);
      formData.append("email", email);
      formData.append("password",password);
      formData.append("sex",sex);
      formData.append("face_id",localStorage.getItem('face-id'));
      
      sendRegister(formData)
       
      
      } catch (error) {
     
     
    }
  
  
    }
    
    const clearFields = () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setSex('');
  
  }
    return (
      <div>
  
  <div className='h-[90px] w-full flex bg-emerald-500'>
              <div className='p-2 m-2 mb-2 flex-column'>
                  <div className='flex w-[13rem]  bg-emerald-600 '>
                      <h5 className='text-[0.9rem]'>Home</h5>
                      <h6 className='mt-1'><AiOutlineRight /></h6>
                      <h2 className='text-white font-semi-bold'>Dashboard</h2>
                  </div>
                  <div>
                      <h1 className='font-bold text-[1.9rem] text-white'>Dashboard</h1>
                  </div>
              </div>
          </div>
         
      <div class="flex flex-col md:flex-row h-[90vh]">
  <Sidebar />
    <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
    <div class="w-90  bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Chairman Registration</h2>
    
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
    <div class="mb-4 w-full">
        <label class="block text-gray-700 font-bold mb-2" for="first-name">
          First Name
        </label>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="first-name"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 font-bold mb-2" for="last-name">
          Last Name
        </label>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          
        />
      </div>
    </div>
    <div className='flex gap-4'>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
      </div>
      <div class="mb-4 w-full">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      </div>
      <div className='flex gap-4'>
  
      <div class="mb-4 w-full">
        <label class="block text-gray-700 font-bold mb-2" for="last-name">
          Sex
        </label>
        <input
          class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sex"
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          placeholder="Enter your  gender"
        />
      </div>
    </div>
     
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
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
