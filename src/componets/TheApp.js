import React, { useEffect, useState } from "react";
import axios from "axios";
import './../App.css'
import Navbar from './Nav/Navbar'
import Landingpage from './Home/Landingpage'
import Candidates from './Candidates.js/Candidates'
import ElectionProgress from './ElectionProgress/ElectionProgress'
import Report from './Blog/Report'
import Footer from './Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import store from "./../app/store";
import { useSelector } from "react-redux";
const baseUrl = "localhost:8000";
export default function TheApp() {
  const dispatch = store.dispatch;

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
