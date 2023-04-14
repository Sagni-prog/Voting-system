import React from 'react'
import './../App.css'
import { useState } from 'react'
import Navbar from './Nav/Navbar'
import Landingpage from './Home/Landingpage'
import Candidates from './Candidates.js/Candidates'
import ElectionProgress from './ElectionProgress/ElectionProgress'
import Report from './Blog/Report'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
export default function TheApp() {
  return (
    <div>
     <div className='w-[100%] border-blue-200'>
      {/* nav and home */}
      <Navbar />
      <Element name="section1">
      <Landingpage />
        </Element> 
        </div>
        <Element name="section2">
        <Report />
        </Element>
        <Element name="section3">
        <Candidates />
        </Element>
        <Element name="section4">
        <ElectionProgress />
        </Element>
        <Element name="section5">
        <Footer />
        </Element> 
    
      
    </div>
  )
}
