/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function storeunwanted() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [error,setError]=useState(false);
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
  if(password===confrimPassword){
    navigate('/');
    
  }

    }

  return (
    <section class="bg-gray-50 dark:bg-emerald-900 fixed inset-0 z-10 overflow-y-auto">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
   
    <a href="#" class=" z-1 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-[12vh]  h-[11vh] mr-2" src={img} alt="logo"/>
            Welkite University   
        </a>
    
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-emerald-800 dark:border-emerald-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up to your account
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
                    </div>
                    <div>
                        <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input type="text"  class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name"  value={firstName} onChange={(e) => setFirstName(e.target.value)} required=""/>
                    </div>
                    <div>
                        <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input type="text"  class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password"  placeholder="••••••••" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  value={password} onChange={(e) => setPassword(e.target.value)} required=""/>
                    </div>
                    <div>
                        <label for="confrimPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confrim Password</label>
                        <input type="password"  placeholder="••••••••" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={confrimPassword} onChange={(e)=>setConfrimPassword(e.target.value)} required=""/>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              {/* <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/> */}
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">sign up with google</a> */}
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        If you already have account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>

   

    </div>
  </section>)
}