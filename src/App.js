import logo from './logo.svg';
// import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'
import { useEffect, useState, useReducer } from 'react';
import Navbar from './componets/Nav/Navbar';
import Landingpage from './componets/Home/Landingpage';
import Candidates from './componets/Candidates.js/Candidates';
import ElectionProgress from './componets/ElectionProgress/ElectionProgress';
import Report from './componets/Blog/Report';
import Footer from './componets/Footer/Footer';
import Resultes from './componets/Result/Results'
import Candidateprofile from './componets/page/Candidateprofile'
import AddCandidates from './componets/admin/AddCandidate'
import Voters from './componets/admin/Voters';
import CandidateDescription from './componets/admin/CandidateDescription'
import AddChairman from './componets/admin/AddChairman';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import TheApp from './componets/TheApp';
import AddNews from './componets/admin/AddNews';
import Feedbacks from './componets/admin/Feedbacks';
import Allcandidate from './componets/admin/Allcandidate';
import Updateprofile from './componets/admin/Updateprofile';
import Regsiter from './componets/Auth/Regsiter';
import RecognizeFace from './componets/Auth/RecognizeFace';
import Login from './componets/Auth/Login';

import CandidateContext from './contexts/CandidateContext';
import CandidateReducer from './reducers/CandidateReducer';
import http from './http/http';
import axios from 'axios';

// import { Hey } from './componets/Hey';
import { Hey } from './componets/hey';



function App() {
  
 const [candidateState,candidateDispatch] = useReducer(CandidateReducer,[]);
 const [candidates,setCandidates] = useState([])
 
 
 const getCandidates = async() => {
 
 
 const response = await http.get('/candidates');
 
        const candidates = JSON.parse(response.data.substring(1));
        candidateDispatch({type: 'GET', candidates});
 }
 

 
 useEffect(() => {
    getCandidates();
  
  },[])
  
  // candidateState.map((data) => console.log(data.first_name))


  return (
  
   
     
   <CandidateContext.Provider
      value={{
         candidateState,candidateDispatch
      }}
   >
          <Router>
          <div>
           
            <Routes>
              <Route path="/landingpage" element={<Landingpage />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/electionprogress" element={<ElectionProgress />} />
              <Route path="/report" element={<Report />} />
              <Route path="/footer" element={<Footer />} />
              {/* <Route path="/Candidateprofile" element={<Candidateprofile />} /> */}
              <Route path="/result" element={<Resultes />} />
              <Route path='/' element={<TheApp/>}/>
              <Route path='/#' element={<TheApp/>}/>
              <Route path='/home' element={<TheApp />}/>
              <Route path='/addcandidate' element={<AddCandidates />} />
              <Route path='/voters' element={<Voters />} />
              <Route path='/addchairman' element={<AddChairman />} />
              <Route path='/reportnews' element={<AddNews />} />
              <Route path='/notifications' element={<Feedbacks />} />
              <Route path="/candidatedescription" element={<CandidateDescription />} />
              <Route path="/allcandidates" element={<Allcandidate />} />
              <Route path="/updatecandidate" element={<Updateprofile />} />
              <Route path = "/regsiter" element = {<Regsiter />} />
              <Route path = 'face' element = { <RecognizeFace />} />
              <Route path = '/login' element = {<Login />} />
            </Routes>
            <div>
          
             
      
          
          </div>
          </div>
        </Router>
      </CandidateContext.Provider>
 

 
  );
}

export default App;
