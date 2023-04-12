import React from 'react'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { Link as ScrollLink } from 'react-scroll'
export default function Footer() {
  return (
    <div>
 
<footer class="bg-white rounded-lg shadow dark:bg-emerald-600 -mx-1">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                <img src={img} class="h-8 mr-3" alt="election" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wolkite  University</span>
            </a>
            <ul class="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
               
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-50 lg:my-8" />
        <span class="block text-sm text-gray-50 sm:text-center dark:text-gray-50">© 2023 <a href="#" class="hover:underline">Your Team goes here™</a>. All Rights Reserved.</span>
    </div>
</footer>


      
    </div>
  )
}
