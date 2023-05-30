
import {React,useEffect,useState, useContext} from 'react'

import Sidebar from './Siderbar'
import { Link } from 'react-router-dom';
import image from './../../images/ivana-square.jpg'
import img from './../../images/elections-poll-svgrepo-com-2.svg'
import { AiOutlineRight} from "react-icons/ai";
import VoterContext from '../../contexts/VoterContext';
import { useNavigate } from 'react-router-dom'
import http from '../../http/http';

import AllElectionData from '../admin/AllElectionData';

export default function Complains() {

  const navigate = useNavigate();
  
  const {voterState, voterDispatch} = useContext(VoterContext)
  
  console.log("what is wrong from voters")
  console.log("what is wrong from voters",voterState)
  useEffect(() => {
  try {
    
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('dah', user.user.role.roleable.role)
     if(user && user.user.role.roleable.role !== 'chairman'){
         
          navigate('/login')

     }

       if(!localStorage.getItem('token') | !localStorage.getItem('user')){
    
           navigate('/login')
    }
      } catch (error) {
    
  }
    
  },[]);
  
  const [complain, setComplain] = useState([]);
  useEffect(() => {
    getComplains()
  },[]);
  
  const getComplains = async() => {
     
     const data = await http.get('/complain');
     console.log("from complains",data.data)
     setComplain(data.data)
  }
  
  
  return (
    <div>
    <div>
    <div className="relative h-[100px]   p-2 px-[5rem] mb-2">
    <a href="#" className="flex items-center gap-1">
    <img class=" w-[15vh] -z-10 h-[14vh]  rounded-[150%]" src={img} alt="user photo"/>
    <Link to="/" smooth={true} duration={500} aria-current="page"><h1 className='dark:text-emerald-500 font-mono text-[2rem] '>Wolkite  University</h1></Link>

    
    <h6 className="absolute text-red-600 top-3 right-4 ">2016 EC vote for student president.</h6>
           
        </a>
        
    </div>
     
       <nav className=" h-[50px]    border-blue-200 shadow-md dark:bg-emerald-600">
   
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <a href="#" className="flex items-center">
    <h3 className="text-white flex items-center mt-[-0.5rem]">An official website of Welkite University.</h3>
        
        </a>
        <div className="flex items-center">
        <div className="flex items-center">
            <ul className="flex flex-row space-x-8 text-sm font-medium">
                <li>
                <Link to="/" replace={true}   className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">News</Link>
                </li>
                <li>
                <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Candidates</Link>
                </li>
                <li>
                <Link to="/" replace={true}  smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Election Progress</Link>
                </li>
                <li>
                <Link to="/result" replace={true} smooth={true} duration={500} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Result</Link>
                    
                </li>
                
                <li>
                <Link to="/" smooth={true} duration={500} className="text-sm text-gray-900 dark:text-white hover:underline" aria-current="page">Login</Link>

                </li>
      
                <li>
                <img class="w-8 h-8 mt-[-0.23rem] rounded-full" src={image} alt="user photo"/>
                
                </li>
            </ul>
        </div>
            
        </div>
    </div>
</nav>
      
</div>
<div className='h-[90px] w-full flex bg-emerald-500'>
            <div className='p-2 m-2 mb-2 flex-column'>
                <div className='flex w-[13rem]  bg-emerald-600 '>
                    <h5 className='text-[0.9rem]'>Home</h5>
                    <h6 className='mt-1'><AiOutlineRight /></h6>
                    <h2 className='text-white font-semi-bold'>Chairman</h2>
                </div>
                <div>
                    <h1 className='font-bold text-[1.9rem] text-white'>Dashboard</h1>
                </div>
            </div>
        </div>
    <div class="flex flex-col md:flex-row h-[90vh]">
  <Sidebar />
  
    <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
   
     <AllElectionData />
          
     <div class="bg-gray-100 p-6 h-[90vh] w-full overflow-y-auto flex-row">
  <h2 class="text-2xl font-bold mb-10">
  Notifications
  </h2>
  
<div className='find-one flex flex-row-3 mt-[1rem] gap-4 p-5 '>

     
    { 
     complain.length !==0 ? 
     complain.data.map((complain,index) => 
       index <= 2 &&
        <div class="find-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-emerald-600 dark:border-emerald-500">
            
            <p class="mb-3 font-normal text-gray-50 dark:text-gray-100">
               { complain.complain_desctiption }
            </p>
            <a href="#">
                <h6 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                   {complain.name}
                </h6>
            </a>
           
        </div>
      )
     
    :
    'Post not found'
   }

</div>




        </div>
          
          </div>
          </div>
          <div>
 
  
     </div>
      
    </div>
  )
}
