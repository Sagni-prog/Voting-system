import logo from './logo.svg';
import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'
import DatePicker from 'react-datepicker';

import { useState } from 'react';

function App() {
  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <div>
          <div className='w-[100%] bg-blue-100'>
    {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
  
    <nav className=" h-[80px]    border-blue-200 dark:bg-gradient-to-r from-sky-600 from-10% via-sky-500 via-30% to-sky-600 to-90% ">
    {/* dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... */}
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center">
    
            <span className="self-center  font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"> Wolkite</span><span className='font-medium text-white text-[18px] ml-[0.2rem]'>university online voting system</span></span>
        </a>
        <div className="flex items-center mr-[-2.5rem]">
        <div className="flex items-center p-2 mt-[0.88rem]">
            <ul className="flex flex-row font-medium mt-1 mr-6 space-x-8 text-sm">
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

<div className="w-full home">
    <div className="p-[8rem] pt-[6rem]  to-90% h-[85vh] flex"> 
        <div className="flex-1 w-50 ml-[-2rem] mr-[5rem]">
        <div className='mt-[9rem] '>
           <h1 className='text-[2.2rem] w-full font-extrabold font-mono text-white mb-1'>Vote for your <span className='text-white'>next <span className='text-white'>student</span> president</span></h1>
           <p className='text-gray-200 mb-3'>your have register yet?</p>
        </div>
        <div>
        <button class="w-70 dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%  hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Vote now
            </button>
        </div>
    

        </div>
        <div className="flex-1 w-50">
          <div className="absolute ml-[3rem] mt-[-1.5rem]">
          <img class="image w-70 absolute rounded-[100%]" src={img} alt="user photo"/>
          <img class="image1  w-[70vh] h-[70vh]  rounded-[150%]" src={image} alt="user photo"/>
          </div>
        </div>
    </div>
</div>


      

   </div>
   <div class="container bg-blue-100 mx-auto px-12 py-24">
  <h1 class="text-[2.2rem] w-full font-extrabold font-mono text-black mb-[2rem]">CANDIDATES</h1>
  <div class="grid grid-cols-3 gap-4">
  <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800 hover:bg-gray-400 text-white py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
    <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800  hover:bg-gray-400  text-white  py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
    <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800  hover:bg-gray-400  text-white  py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
    <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800  hover:bg-gray-400  text-white py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
    <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800  hover:bg-gray-400  text-white  py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
    <div class="dark:bg-white text-black   rounded-lg shadow-md">
      <img src={img2} alt="Candidate 1" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <p class="text-black leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec sagittis odio.</p>
        <div class="flex justify-between">
          <a href="#" class="inline-flex items-center dark:bg-gradient-to-r  from-sky-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Read  More<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
          <a href="#" class="bg-emerald-800 hover:bg-gray-400 text-white py-2 px-4 rounded-lg">Vote Now</a>
        </div>
      </div>
    </div>
 
  </div>
</div>
<div class="bg-white p-4 rounded-lg shadow-md">
  <h2 class="text-[2.2rem] w-full font-extrabold font-mono text-black px-8 py-6">Election Progress</h2>
  <div class="grid grid-cols-1 gap-4 p-20 mt-[-4rem]">
  <div class="flex flex-row items-center gap-2 ">
      <div class="w-20 h-20 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[3rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[90%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>90%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-20 h-20 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[3rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[90%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>90%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-20 h-20 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[3rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[90%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>90%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-20 h-20 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[3rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[70%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>70%</span>
    </div>
    <div class="flex flex-row items-center gap-2 ">
      <div class="w-20 h-20 mb-4 ">
        <img class="rounded-[25px] object-cover h-full w-full" src={img2}/>
      </div>
      <div class="w-full">
        <div class="relative pt-1">
          <div class="overflow-hidden h-[3rem] mb-4 text-xs flex rounded bg-blue-200">
            <div  class="shadow-none w-[50%] flex flex-col text-center whitespace-nowrap text-white justify-center dark:bg-emerald-500 "></div>
          </div>
        </div>
      </div>
      <span>50%</span>
    </div>


  </div>
</div>

<figure class="p-10  bg-blue-100">
<div className="max-w-screen-md mx-auto text-center">
<svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-sky-500  dark:text-sky-500 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-black">"Don't blow it, vote students for senior class president" poster with whoopi cushions!."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <img class="w-6 h-6 rounded-full" src={img2} alt="profile picture"/>
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-black">Micheal Gough</cite>
            <cite class="pl-3 text-sm text-gray-900 dark:text-black">Software Enigneering</cite>
        </div>
    </figcaption>
</div>
  
</figure>


<footer class="dark:text-white  rounded-lg shadow m-4  border-blue-200 dark:bg-gradient-to-r from-sky-500 from-10% via-sky-600 via-30% to-sky-500 to-90% ">
<section class="">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">For your Feedback</h2>
      {/* <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
      <form action="#" class="space-y-8">

          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-blue-900 bg-gray-50 rounded-lg shadow-sm border border-blue-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-200 dark:border-blue-100 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit dark:bg-emerald-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-sky-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm dark:text-white  sm:text-cente text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Name of your Team™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
<div class="bg-white m-10 p-[2rem] rounded-lg shadow-md">
  <div class="flex items-center mb-6">

    <img class="w-[6rem] h-[6rem] rounded-full mr-4" src={img2} alt="User Profile Image"/>
    <div>
      <h2 class="text-xl font-bold">John Doe</h2>
      <p class="text-gray-700">john.doe@example.com</p>
      <p class="text-gray-700">jit St gebrel,oromia, Ethiopia</p>
      <p class="text-gray-700">Biomedical Engineering</p>
    </div>
  </div>
  <h2 class="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis</h2>

  <p class="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod euismod eros vel venenatis. Integer eget purus risus. Aliquam at enim in dolor imperdiet semper. Aenean vel sapien ex. In efficitur fringilla lorem, eu cursus neque varius in.</p>
  <div class="flex items-center">
    <p class="text-gray-700 mr-2">Rating:</p>
    <div class="flex items-center">
      <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
        <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
      </svg>
      <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
        <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
      </svg>
      <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
        <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
      </svg>
      <svg class="w-4 h-4 fill-current text-yellow-400 mr-1" viewBox="0 0 20 20">
        <path d="M10 1l2.928 6.165L19.856 7.67l-4.118 4.014.973 6.07L10 16.25l-5.711 3.505.973-6.07-4.118-4.014L7.072 7.165 10 1z"/>
      </svg>
     
      
</div>

</div>
 <div className='p-6 '>
      <div class="flex items-center mb-6 gap-4">
      <div className='p-2'>
      <div className='gap-10 flex'>
      <span className='text-black'>Department</span>
      <p class="text-gray-500">software Engineering</p>
      </div>
      <div className='gap-10 flex'>
      <span className='text-black mr-3'>Exam core</span>
      <p class="text-gray-500 ">202</p>
      </div>
      <div className='gap-10 flex'>
      <span className='text-black mr-14'>GPA</span>
      <p class="text-gray-500 ">3.88</p>
      </div>
      <div className='gap-10 flex'>
      <span className='text-black mr-[3.6rem]'>SEX</span>
      <p class="text-gray-500 ">M</p>
      </div>
     
      </div>
  
      <div className='p-2'>
      <div className='gap-10 flex mt-[-1.03rem]'>
      <span className='text-black'>Admission Year</span>
      <p class="text-gray-500">02-04-2021</p>
      </div>
      <div className='gap-[2.22rem] flex'>
      <span className='text-black'>Graduation Year</span>
      <p class="text-gray-500 ">02-04-2021</p>
      </div>
      <div className='gap-[2rem] flex'>
      <span className='text-black'>Educational Year</span>
      <p class="text-gray-500 ">02-04-2021</p>
      </div>
    
     

    
    </div>
  </div>
      </div>
</div>

<div class="flex flex-col md:flex-row h-[90vh]">
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
      



<div class="flex flex-col md:flex-row h-[90vh]">
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
 
  );
}

export default App;
