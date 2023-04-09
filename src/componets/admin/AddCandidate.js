import React from 'react'
import { useState } from 'react';
import Sidebar from './Sidebar'
import Navbar from '../Nav/Navbar';
export default function AddCandidate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>

    <Navbar />
    <div class="flex flex-col md:flex-row h-[90vh]">
  
<Sidebar />
  <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
 
  <div class="w-90  bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-4">Candidate Registration</h2>
  <form>
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
        onChange={e=>setStartDate(e.target.value)}
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
        onChange={e=>setStartDate(e.target.value)}
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
        onChange={e=>setStartDate(e.target.value)}
        type="date"
      />
    </div>
    <div class="mb-4 w-full">
      <label class="block text-gray-700 font-bold mb-2" for="last-name">
        SEX
      </label>
      <input
        class="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="sex"
        type="text"
        placeholder="Enter your last name"
      />
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
      
    </div>
  )
}
