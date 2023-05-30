
import React, { useEffect } from 'react'
import { useState} from 'react';
import Sidebar from './Sidebar'

import { AiOutlineRight} from "react-icons/ai";
import http from '../../http/http';
import { useNavigate } from 'react-router-dom'
import Alert from './Alert';



export default function AddCandidate() {

  const navigate = useNavigate();
  
  useEffect(() => {
  
  try {
    
    if(!localStorage.getItem('token')){
  
      navigate('/face-auth')
     }
     
  if(!localStorage.getItem('user')){
    console.log("no user")
    navigate('/face-auth')
  }
  if(JSON.parse(localStorage.getItem('user')).user.role.roleable.role !== 'admin'){
       
    navigate('/face-auth')

     }
  
      } catch (error) {
    
  }
  
  },[]);
  
  
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [examScore, setExamScore] = useState(null);
  const [gpa, setGpa] = useState(null);
  const [admissionYear, setAdmissionYear] = useState('');
  const [graduationYear, setGraduationYear] = useState('')
  const [educationalYear, setEducationalYear] = useState('');
  const [department, setDepartment] = useState('');
  const [sex, setSex] = useState('');
  const [cv, setCv] = useState('');
  const [photo,setPhoto]=useState();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  
  const sendCandidate = async(data) => {
  
     const res = await http.post('/candidate/register',data);
     console.log(res.data.status)
     console.log(res)
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
     
  }

  const handleSubmit = (event) => {
  try{
    event.preventDefault();
   
    const formData = new FormData();
    formData.append("first_name",firstName);
    formData.append("last_name",lastName);
    formData.append("email", email);
    formData.append("password",password);
    formData.append("exam_score",examScore,);
    formData.append("gpa", gpa);
    formData.append("admission_year", admissionYear);
    formData.append("graduation_year", graduationYear);
    formData.append("educational_year", '4');
    formData.append("sex",sex);
    formData.append("department",department);
    // formData.append("vote_id",2);
    // formData.append("cv", cv[0]);
    
    console.log('exam score test',examScore)
    console.log('exam score test')
    
    sendCandidate(formData)
    // setSuccessMessage('Candidate added successfully.');
    // setErrorMessage('');
    } catch (error) {
   
    // setSuccessMessage('');
    // setErrorMessage('Failed to add candidate.');
  }
  

  };
  
     
  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setAdmissionYear('');
    setDepartment('');
    setEducationalYear('');
    setExamScore('');
    setGpa('');
    setGraduationYear('');
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
  <h2 class="text-2xl font-bold mb-4">Candidate Registration</h2>
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
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="last-name">
        Department
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="gpa"
        type="text"
        placeholder="Enter your last name"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
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
        type="text"
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
        type="text"
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
        type="text"
       
      />
    </div>
    <div class="mb-4 w-full">
  <label class="block text-gray-700 font-bold mb-2" for="sex">
    Sex
  </label>
  <div class="flex flex-row items-center gap-4">
    <input type="radio" name="sex" id="boy" value="Male" class="appearance-none border rounded-full h-5 w-5 border-gray-400 checked:bg-blue-600 checked:border-transparent focus:outline-none"
        onChange={(e) => setSex(e.target.value)}
      checked={sex === 'Male'} 
    />
    <label for="boy" class="text-gray-700">Male</label>
    <input type="radio" name="sex" id="girl" value="female" class="appearance-none border rounded-full h-5 w-5 border-gray-400 checked:bg-pink-600 checked:border-transparent focus:outline-none"  
     onChange={(e) =>setSex (e.target.value)}
     checked={sex === 'female'}
     />
    <label for="girl" class="text-gray-700">Female</label>
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
     </div>
    </div>
  )
}
