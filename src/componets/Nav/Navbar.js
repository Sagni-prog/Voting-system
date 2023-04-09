import React from 'react'
import image from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
export default function Navbar() {
  return (
    <div>
    <div className="h-[80px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1>
            {/* <span className="self-center  font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
        </a>
    </div>
     
       <nav className=" h-[50px]    border-blue-200 dark:bg-emerald-600">
    {/* dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... */}
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    <a href="#" className="flex items-center">
   
            {/* <span className="self-center  font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"></span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span> */}
        </a>
        <div className="flex items-center">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium space-x-8 text-sm">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Candidates</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Election Progress</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Feedback</a>
                </li>
                <li>
                  <a href="#" className="text-sm  text-white hover:underline">Login</a>
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
