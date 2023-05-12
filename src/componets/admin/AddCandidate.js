/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import React from 'react'
import { useState,useCallback } from 'react';
import Sidebar from './Sidebar'
import Navbar from '../Nav/Navbar';
import { Link } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img2 from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { registerCandidate } from './../../app/features/candidate/Candidate'
import {useNavigate} from 'react-router-dom'
// import{ CandidateSlice }from './../../app/features/candidate/Candidate'

export default function AddCandidate() {
  const [startDate, setStartDate] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [examScore, setExamScore] = useState('');
  const [gpa, setGpa] = useState('');
  const [admissionYear, setAdmissionYear] = useState(new Date());
  const [graduationYear, setGraduationYear] = useState(new Date());
  const [educationalYear, setEducationalYear] = useState(new Date());
  const [sex, setSex] = useState('');
  const [cv, setCv] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const formDataToJson = (formData) => {
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    return JSON.stringify(jsonObject);
  };

  const handleSubmit = (event) => {
  
    event.preventDefault();
    // Handle form submission here
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName",firstName);
    formData.append("lastName",firstName);
    formData.append("email", email);
    formData.append("password",password);
    formData.append("examScore,",examScore,);
    formData.append("gpa", gpa);
    formData.append(" admissionYear", admissionYear);
    formData.append("graduationYear", graduationYear);
    formData.append("sex",sex);
    formData.append("cv", cv);
    dispatch(registerCandidate(formData))
    .unwrap()
    .then((result) => {
      navigate('/');
    })
    .catch((error) => {
     console.log("err")
    });

  };
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
  <h2 class="text-2xl font-bold mb-4">Candidate Registration</h2>
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
        placeholder="Enter your last name"
        value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
        placeholder="Enter your email address"
        value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        placeholder="Enter your password"
        value={password}
            onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    </div>
    <div className='flex gap-4'>
  <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="first-name">
        Exam score
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="exam_score"
        type="text"
        placeholder="Enter your first name"
        value={examScore}
        onChange={(e) => setExamScore(e.target.value)}
      />
    </div>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="last-name">
        GPA
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gpa"
        type="text"
        placeholder="Enter your last name"
        value={gpa}
        onChange={(e) => setGpa(e.target.value)}
      />
    </div>
  </div>
    <div className='flex gap-4'>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="cv">
      Admission Year
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="graduation_Year"
        value={admissionYear}
        onChange={e=>setAdmissionYear(e.target.value)}
        type="date"
      />
    </div>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="Admission Year">
      Graduation Year
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="admission_year"
       
        value={graduationYear}
        onChange={e=>setGraduationYear(e.target.value)}
        type="date"
      />
    </div>
    </div>
    <div className='flex gap-4'>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="cv">
      Educational Year
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="educational_year"
        value={educationalYear}
        onChange={e=>setEducationalYear(e.target.value)}
        type="date"
       
      />
    </div>
    <div class="mb-4 w-full">
  <label class="block text-gray-700 font-bold mb-2" for="sex">
    Sex
  </label>
  <div class="flex flex-row items-center gap-4">
    <input type="radio" name="sex" id="boy" value="boy" class="appearance-none border rounded-full h-5 w-5 border-gray-400 checked:bg-blue-600 checked:border-transparent focus:outline-none"
        onChange={(e) => setSex(e.target.value)}
      checked={sex === 'boy'} 
    />
    <label for="boy" class="text-gray-700">Boy</label>
    <input type="radio" name="sex" id="girl" value="girl" class="appearance-none border rounded-full h-5 w-5 border-gray-400 checked:bg-pink-600 checked:border-transparent focus:outline-none"  
     onChange={(e) =>setSex (e.target.value)}
     checked={sex === 'girl'}
     />
    <label for="girl" class="text-gray-700">Girl</label>
  </div>
</div>
    </div>
    <div className='flex gap-4'>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="cv">
        CV
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cv"
        type="file"
        value={cv}
        onChange={(e) => setCv(e.target.value)}
      />
    </div>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="cv">
        Photo
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="photo"
        type="file"
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
 
 {/* <footer class="bg-white rounded-lg shadow dark:bg-emerald-600 -mx-1">
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
 </footer> */}
 
 
       
     </div>
    </div>
  )
}
