import logo from './logo.svg';
import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.jpg'

function App() {
  return (
   <div>
    {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}

    <nav className="bg-white h-full border-gray-200 dark:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
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
            <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"></a>
            
        </div>
    </div>
</nav>

<div>
    <div>
        <div>
        <div>
           <h1>Vote for your next student president</h1>
           <p>your have register yet?</p>
        </div>
        <div>
            <button>vote now</button>
        </div>
    

        </div>
        <div>

        </div>
    </div>
</div>


      

   </div>
  );
}

export default App;
