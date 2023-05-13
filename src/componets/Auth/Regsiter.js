import React, { useState } from 'react'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Regsiter() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  
  function handleFirstNameChange(e) {

    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e) => {
     
     setLastName(e.target.value);
  }
  const handleEmailChange = (e) => {
     
     setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
     
     setPassword(e.target.value);
  }
  const handlePhoneNumberChange = (e) => {
     
     setPhoneNumber(e.target.value);
  }
  
  const sendRegister = async(data) => {
       
    const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          'X-Face-Id' : localStorage.getItem('face-id')
        }
     });
     const res = await http.post('/signup',data);
     const user = res.data;
     console.log(user.status)
     
     if(user.status === 'sucess'){
     
     console.log('hello true')
      localStorage.setItem('token',user.token);
      localStorage.setItem('user',JSON.stringify(user));
      localStorage.removeItem('face-id');
      
      switch(user.role.roleable.role){
         case 'admin':
            navigate('/admin/dashboard');
            break;
         case 'candidate':
           navigate('candidate/dashboard');
           break;
         case 'chairman':
            navigate('chairman/dashboard');
            break;
         case 'voter':
            navigate('voter/dashboard');
            break;
         default:
            navigate('/');
            break;
           
      }
   }
  }
  
  const hadleSubmit = (e) => {
     
     e.preventDefault();
     
     const data = {
     'first_name': firstName,
     'last_name': lastName,
     'email': email,
     'password': password,
     'phone_number': phoneNumber
     }
     sendRegister(data);

     navigate('/')

     
  }
  
  return (
    <>
        <div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex items-center justify-center block px-4 pt-4 pb-10 text-center">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden inline-block align-middle "></span>

    <div className="inline-block w-full overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl">
    <section class="bg-gray-50 dark:bg-emerald-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[120vh] lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-[12vh]  h-[11vh] mr-2" src={img} alt="logo"/>
          Welkite University   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-emerald-800 dark:border-emerald-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={hadleSubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="First Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input value={firstName} onChange={ handleFirstNameChange } type="text" name="first_name" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input value={lastName} onChange={ handleLastNameChange }  type="text" name="last_name" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={ handleEmailChange }  type="email" name="email" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input value={phoneNumber} onChange={ handlePhoneNumberChange }  type="number" name="phone_number" id="password" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={ handlePasswordChange }  type="password" name="password" id="password" placeholder="••••••••" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      You have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  </div>
</div>
           {/* <div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>

    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

    <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
    <section class="bg-gray-50 dark:bg-emerald-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-[12vh]  h-[11vh] mr-2" src={img} alt="logo"/>
          Welkite University   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-emerald-800 dark:border-emerald-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up 
              </h1>
              <form onSubmit={hadleSubmit} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="First Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input value={firstName} onChange={ handleFirstNameChange } type="text" name="first_name" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input value={lastName} onChange={ handleLastNameChange }  type="text" name="last_name" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={email} onChange={ handleEmailChange }  type="email" name="email" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input value={phoneNumber} onChange={ handlePhoneNumberChange }  type="number" name="phone_number" id="password" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={password} onChange={ handlePasswordChange }  type="password" name="password" id="password" placeholder="••••••••" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      You have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  </div>
</div> */}

    </>
  )
}
