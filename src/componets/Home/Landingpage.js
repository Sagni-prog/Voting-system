import React from 'react'
import img from './../../images/vote-svgrepo-com-8.svg'
import image from './../../images/download (9).png'

export default function Landingpage() {
  return (
    <div>
      <div className="w-full home">
    <div className="p-[8rem] pt-[6rem]  to-90% h-[50vh] flex"> 
      
        <div className="flex-1 w-50 ">
          <div className="absolute ml-[3rem] mt-[4rem] ">
          {/* <img class="image w-70 absolute rounded-[100%]" src={img} alt="user photo"/> */}
          <img class="w-[50vh] h-[50vh] text-emerald-400  rounded-[150%]" src={img} alt="user photo"/>
          
          </div>
        </div>
        <div className="flex-1 w-50 ml-[-2rem] mr-[5rem]">
        <div className='mt-[1rem] '>
           <h1 className='text-[2.2rem] w-full font-extrabold font-mono text-emerald-400 mb-1'>Vote for your <span className='text-white'>next <span className='text-white'>student</span> president</span></h1>
           <p className='text-[#43ef7c] mb-3'> have you registered yet?</p>
        </div>
        <div>
        <button class="w-70 dark:bg-emerald-600  hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
            Vote now
            </button>
        </div>
    

        </div>
    </div>
</div>
    </div>
  )
}
