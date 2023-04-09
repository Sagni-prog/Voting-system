import React from 'react'
import img2 from './../../images/ivana-square.jpg'
import Sidebar from './Sidebar'
export default function Voters() {
  return (
    <div><div class="flex flex-col md:flex-row h-[90vh]">
  <Sidebar />
  
    <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
   
      <div class="flex gap-4 mb-4">
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
          <div class="bg-white rounded-lg shadow-md p-4 h-[17rem] overflow-y-auto">
          <table class="table-auto  w-full">
            <thead>
              <tr>
              <th class="px-1 py-2 font-bold text-left">photo</th>
                <th class="px-4 py-2 font-bold text-left">First name'</th>
                <th class="px-4 py-2 font-bold text-left">Last name</th>
                <th class="px-4 py-2 font-bold text-left">Email</th>
                <th class="px-4 py-2 font-bold text-left">Status</th>
                <th class="px-4 py-2 font-bold text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
              <tr>
               <td class="border px-1 py-2"><img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={img2} alt="user photo"/></td>
                <td class="border px-4 py-2">Natty </td>
                <td class="border px-4 py-2">yom</td>
                <td class="border px-4 py-2">j.Naty@example.com</td>
                <td class="border px-4 py-2 text-green-500 font-bold">Active</td>
                <td className='border px-4 py-2 '>
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a></td>
              </tr>
            
            </tbody>
          </table>
          </div>
          </div>
          </div>
      
    </div>
  )
}
