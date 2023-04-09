import React from 'react'
import img2 from './../../images/ivana-square.jpg'
export default function ElectionProgress() {
  return (
    <div>
    <div class="bg-blue-100 p-4 rounded-lg shadow-md mt-[-4rem] mb-[-8rem]">
  <h2 class="text-[2.2rem] text-center font-mono  mt-[1rem]  dark:text-emerald-800  mb-[1.5rem]">Election Progress</h2>
  <h2 class="text-[1.2rem] text-center font-mono  mt-[1rem]  dark:text-red-800  mb-[-2.5rem]">2016 EC VOTE</h2>
  <div class="grid grid-cols-1 gap-2  mt-[-12rem] p-[12rem]">
  <div class="flex flex-row items-center gap-2 ">
      <div class="w-16 h-16 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[2rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[90%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>90%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-16 h-16 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[2rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[90%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>90%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-16 h-16 mb-2 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[2rem] mb-2 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[70%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>70%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-16 h-16 mb-2 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[2rem] mb-2 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[50%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>50%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-16 h-16 mb-2 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[2rem] mb-2 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[10%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>10%</span>
    </div>


  </div>
</div>
      
    </div>
  )
}
