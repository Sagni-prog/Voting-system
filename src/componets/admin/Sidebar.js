import React from 'react'

export default function Sidebar() {
  return (
    <div>
  <div class="bg-gray-800 text-white py-2 px-4 h-full w-[18rem]">
    <h2 class="text-lg font-bold mb-0 p-4">Dashboard</h2>
    <ul class="space-y-2">
      <li className='h-[2rem] mb-2 p-5'>
        <a href="#" class="block text-gray-400 hover:text-white">Voters</a>
      </li>
      <li className='h-[2rem] mb-2 p-5'>
        <a href="#" class="block text-gray-400 hover:text-white">Candidates</a>
      </li>
      <li className='h-[2rem] mb-2 p-5'>
        <a href="#" class="block text-gray-400 hover:text-white">Add candidate</a>
      </li>
      <li className='h-[2rem] mb-2 p-5'>
        <a href="#" class="block text-gray-400 hover:text-white"></a>
      </li>
    </ul>
  </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
  <h1 class="text-3xl font-bold mb-8">Election Data</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">voters</h2>
      <p class="text-5xl font-bold text-green-500">15,000</p>
      
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">Vote</h2>
      <p class="text-5xl font-bold text-blue-500">10,000</p>
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">Candidates</h2>
      <p class="text-5xl font-bold text-purple-500">15</p>
   
    </div>
    <div class="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center">
      <h2 class="text-lg font-bold mb-2">chairmans</h2>
      <p class="text-5xl font-bold text-red-500">20</p>
    
    </div>
  </div>
</div>
      
    </div>
  )
}