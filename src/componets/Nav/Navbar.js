import React from 'react'
import image from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { Link as ScrollLink } from 'react-scroll'
import { Link as Link} from 'react-router-dom'
import { useState } from 'react';
export default function Navbar() {
    const [isChecked, setIsChecked] = useState(false);
    const [visisble,setVisible]=useState(false)
    function clicked(){
        setIsChecked(isChecked)
    }

  return (
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <ScrollLink to="section1" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></ScrollLink>

    
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
                <ScrollLink to="section1" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</ScrollLink>
                </li>
                <li>
                <ScrollLink to="section2" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">News</ScrollLink>
                </li>
                <li>
                <ScrollLink to="section3" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Candidates</ScrollLink>
                </li>
                <li>
                <ScrollLink to="section4" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Election Progress</ScrollLink>
                </li>
                <li>
                <Link to="/result" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Result</Link>
                    
                </li>
                <li>
                <Link to="/addcandidate" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Dashboard</Link>
                    
                </li>
                {/* <li> */}
                {/* <Link to="/Candidateprofile" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Feedback</Link> */}
                {/* </li> */}
                <li>
                <button onClick={() => setIsChecked(!isChecked)} className="text-sm text-gray-900 dark:text-white hover:underline" aria-current="page">Login</button>
                </li>
      
                <li>
                <img onClick={() => setVisible(!visisble)}  class="w-8 h-8 mt-[-0.23rem] rounded-full" src={image} alt="user photo" aria-current="page"/>
                
                </li>
    
            </ul>
        </div>
            
        </div>
    </div>
</nav>
{visisble &&
(     <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-emerald-700 rounded-md shadow-lg drop dropdown ring-1 ring-black ring-opacity-5 focus:outline-none mr-2">
                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-emerald-400 hover:text-gray-700"
                        to="/">
                        <a href="#">Profile</a>
                      </Link>

                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-emerald-400 hover:text-gray-700"
                        to="/">
                        <a
                          href="#"
                          >
                          Sign out
                        </a>
                      </Link>
                    </div>)}
    {isChecked && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
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
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-emerald-50 border border-emerald-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-emerald-700 dark:border-emerald-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  </div>
</div>

)}
      
</div>
  )
}
