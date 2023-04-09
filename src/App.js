import logo from './logo.svg';
import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import Navbar from './componets/Nav/Navbar';
import Landingpage from './componets/Home/Landingpage';
import Candidates from './componets/Candidates.js/Candidates';
import ElectionProgress from './componets/ElectionProgress/ElectionProgress';
import Report from './componets/Blog/Report';
import Footer from './componets/Footer/Footer';
import AddCandidates from './componets/admin/AddCandidate'

function App() {
  
 
  return (
    <div>
        <div className='w-[100%] border-blue-200'>
        
      {/* nav and home */}
          <Navbar />
          <Landingpage />

        </div>

        <Candidates />
        <ElectionProgress />
        <Report />
        <Footer />
        {/* <AddCandidates /> */}
 
    </div>
 
  );
}

export default App;
