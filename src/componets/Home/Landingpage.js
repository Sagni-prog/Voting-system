import{ React,useContext} from 'react'
import './Landingpage.css'
import img from './../../images/vote-svgrepo-com-8.svg'
import image from './../../images/download (9).png'
import { MdHowToVote } from 'react-icons/md';
import bg1 from './../../images/339492458_179742571115721_1024488669478325209_n.jpeg';
import bg2 from './../../images/339492458_179742571115721_1024488669478325209_n.jpeg';
import bg3 from './../../images/339492458_179742571115721_1024488669478325209_n.jpeg';
import bg4 from './../../images/339492458_179742571115721_1024488669478325209_n.jpeg';
import { useState, useEffect } from 'react';
import Logo from '../../Logo';
import Alert from '../Candidates.js/Alert';
import './../Candidates.js/alert.css'
import Success from '../Candidates.js/Success';

import AlertContext from '../../contexts/AlertContext'
import SuccessContext from '../../contexts/SuccessContext'
 


export default function Landingpage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const {alert, alertDispatch} = useContext(AlertContext)
  const { success,successDispatch} = useContext(SuccessContext)
  
  
  const slides = [
    { backgroundImage: `url(${bg1})` },
    { backgroundImage: `url(${bg2})` },
    { backgroundImage: `url(${bg3})` },
    { backgroundImage: `url(${bg4})` },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <div className="w-full home">
        <div className='alert'>
        {
            alert ? 
            <Alert />
            :
            <Success />

        }
          
        </div>
        
    <div className="p-[8rem] pt-[6rem] shadow-md height-half   h-[50vh] flex"> 

        <div className="flex-1 w-50 width-half ">
          <div className="absolute ml-[3rem] top-mt mt-[2.9rem] ">
          
          <Logo />
    
          </div>
        </div>
        <div className="flex-1 homequery w-50 ml-[-2rem] mr-[5rem]">
        <div className='mt-[1rem] g'>
           <h1 className='text-[2.2rem] tex textt w-full font-extrabold font-mono text-emerald-400 mb-1'>Vote for your <span className='tex text-white'>next <span className='tex text-white'>student</span> president</span></h1>
           <p className='text-[#43ef7c] mb-3'> have you registered yet?</p>
        </div>
        <div>
        <button class="flex gap-1 btn w-70 dark:bg-emerald-600  hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
            Vote now
            <MdHowToVote size={22} color="#FFF" className="my-icon" />
            </button>
        </div>
    

        </div>
    </div>
</div>
    </div>
  )
}
