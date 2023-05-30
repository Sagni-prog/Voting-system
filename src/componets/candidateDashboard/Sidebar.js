import React from 'react'
import { Link } from 'react-router-dom';
import {BsPersonFillAdd} from "react-icons/bs" 
import { MdDescription }  from "react-icons/md";
import {IoIosPeople}  from "react-icons/io"

import Logout from '../Auth/Logout';


export default function Sidebar() {

const logout = () => {
  Logout()
}
  return (
    <div>
  <div class="bg-emerald-800 text-white py-2 px-4 h-full w-[18rem]">
   
    <ul class="space-y-2">
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Home</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidate/add-strategy" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Add Strategies </Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidate/add-description" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Add Description </Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidate/update-profile" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Update Profile </Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidate/update-password" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Update Password </Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidate/complain" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Complain</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'
      onClick={logout}
    >
                 <Link to="" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Logout</Link>
    </li>
    
    </ul>
  </div>


      
    </div>
  )
}