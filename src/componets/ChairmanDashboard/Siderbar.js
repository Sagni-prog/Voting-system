import React from 'react'
import { Link } from 'react-router-dom';
import {BsPersonFillAdd} from "react-icons/bs" 
import { MdDescription }  from "react-icons/md";
import {IoIosPeople}  from "react-icons/io"
export default function Sidebar() {
  return (
    <div>
  <div class="bg-emerald-800 text-white py-2 px-4 h-full w-[18rem]">
   
    <ul class="space-y-2">
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/Watchvotersforchairman" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />All Voters</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/Approvecandidate" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Appove voter</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/Watchvotersforchairman" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Appove Candidates</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/Updateprofileforchairman" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />
                 update profile</Link>
    </li>
   
  

  
    </ul>
  </div>


      
    </div>
  )
}