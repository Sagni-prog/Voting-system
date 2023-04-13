import React from 'react'
import image from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { Link as ScrollLink } from 'react-scroll'
export default function Navbar() {
  return (
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <ScrollLink to="section1" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></ScrollLink>

    
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
                <ScrollLink to="section5" smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Feedback</ScrollLink>

                    
                </li>
                <li>
                <ScrollLink to="section2" smooth={true} duration={500} className="text-gray-900 dark:text-white text-sm hover:underline" aria-current="page">Login</ScrollLink>

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
  )
}
