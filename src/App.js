import logo from './logo.svg';
import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'

function App() {
  return (
    <div>
          <div className='w-[100%] '>
    {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
  
    <nav className=" h-[80px] border-gray-200 dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center">
            {/* <img src={image} className="h-8 mr-3 rounded-full" alt="Flowbite Logo" /> */}
            <span className="self-center  text-2xl font-sans whitespace-nowrap "><span className="dark:text-white font-mono text-[2rem]"> Wolkite </span><span className='text-[1rem] ml-[-10px]'>university online voting system</span></span>
        </a>
        <div className="flex items-center mr-[-2.5rem]">
        <div className="flex items-center p-2 mt-[0.88rem]">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                  <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
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
    <div className="p-[8rem] pt-[6rem] dark:bg-gradient-to-r from-emerald-500 from-10% via-indigo-300 via-30% to-emerald-200 to-90% ... h-[85vh] flex"> 
        <div className="flex-1 w-50 ml-[-2rem] mr-[5rem]">
        <div className='mt-[9rem] '>
           <h1 className='text-[2.2rem] w-full font-extrabold font-mono text-white mb-1'>Vote for your <span className='text-black'>next <span className='text-white'>student</span> president</span></h1>
           <p className='text-g mb-3'>your have register yet?</p>
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
   <div class="container dark:bg-gradient-to-r from-emerald-500 from-10% via-indigo-300 via-30% to-emerald-200 to-90% mx-auto px-12 py-24">
  <h1 class="text-[2.2rem] w-full font-extrabold font-mono text-white mb-[2rem]">CANDIDATES</h1>
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
    </div>
 
  );
}

export default App;
