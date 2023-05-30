import {React, useContext, useEffect} from 'react'
import './../../App.css'
import AnnouncementContext from '../../contexts/AnnouncementContext'


export default function Report() {

const { announcementState,announcementDispatch }   = useContext(AnnouncementContext);
useEffect(() => {
  
  console.log("from blogs", announcementState)
})
  return (
    <div className='p-5'>
    <div className="bg-white rounded-lg  px-6 py-6 text-center">
            <h2 className=" text-title text-[2rem] text-gray-900 font-medium mb-2 text-center">Latest News</h2>
        
          </div>
<div className='find-one flex flex-row-3 mt-[1rem] gap-4 p-5 '>

     
    { 
     announcementState.length !==0 ? 
      announcementState.data.map((announcement,index) => 
       index <= 2 &&
        <div class="find-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-emerald-600 dark:border-emerald-500">
            <svg class="w-10 h-10 mb-2 text-gray-50 dark:text-gray-40" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
            <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                   { announcement.announcement_title}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-50 dark:text-gray-100">
               { announcement.announcement_description }
            </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
      )
     
    :
    'Post not found'
   }

</div>
      
    </div>
  )
}
