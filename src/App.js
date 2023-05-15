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
import Register from './componets/Auth/Regsiter'
import Candidateprofile from './componets/page/Candidateprofile'
import AddCandidates from './componets/admin/AddCandidate'
import Voters from './componets/admin/Voters';
import CandidateDescription from './componets/admin/CandidateDescription'
import AddChairman from './componets/admin/AddChairman';
import Approvecandidate from './componets/ChairmanDashboard/Approvecandidate';
import ApproveVoters from './componets/ChairmanDashboard/ApproveVoters';
import ChairmanDashboardHome from './componets/ChairmanDashboard/ChairmanDashboardHome';
import Watchvotersforchairman from './componets/ChairmanDashboard/WatchVoters';
import Updateprofileforchairman from './componets/ChairmanDashboard/Updateprofile';
import Feedbackforchairman from './componets/ChairmanDashboard/Feedbackforchairman';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import TheApp from './componets/TheApp';
import AddNews from './componets/admin/AddNews';
import Feedbacks from './componets/admin/Feedbacks';
import Allcandidate from './componets/admin/Allcandidate';
import Updateprofile from './componets/admin/Updateprofile';
import RecognizeFace from './componets/Auth/RecognizeFace';
import Login from './componets/Auth/Login';
import LoginVoter from './componets/Auth/LoginVoter';
import AddResult from './componets/admin/AddResult';

import CandidateContext from './contexts/CandidateContext';
import CandidateReducer from './reducers/CandidateReducer';
import ChairmanContext from './contexts/ChairmanContext';
import ChairmanReducer from './reducers/ChairmanReducer';
import VoterContext from './contexts/VoterContext';
import VoterReducer from './reducers/VoterReducer';
import UserContext from './contexts/UserContext';
import UserReducer from './reducers/UserReducer';

import http from './http/http';
import axios from 'axios';
import RegsiterChairman from './componets/Auth/RegsiterChairman';
import AddVoter from './componets/admin/AddVoter';
import Updatepassword from './componets/admin/Updatepassword';
import Addcandidateforchairman from './componets/ChairmanDashboard/Addcandidate';
import Updatepasswordforcharirman from './componets/ChairmanDashboard/Updatepasswordforcharirman';
import PublishReport from './componets/admin/PublishReport';
import ElectionResult from './componets/admin/ElectionResult'
import AddElectionSlug from './componets/admin/AddElectionSlug'
import AddVote from './componets/admin/AddVote';
import Addpolicyandstrategy from './componets/candidateDashboard/Addpolicyandstrategy';
import CandidateDashboardHome from './componets/candidateDashboard/CandidateDashboardHome';
function App() {
  
   
  window.onbeforeunload = function(e) {
    localStorage.removeItem('face-id');
    if (performance.getEntriesByType("navigation")[0].type === "navigate") {
      // localStorage.clear();

    }
  };
  

  
  
 const [candidateState,candidateDispatch] = useReducer(CandidateReducer,[]);
 const [chairmanState,chairmanDispatch] = useReducer(ChairmanReducer,[]);
 const [voterState,voterDispatch] = useReducer(VoterReducer,[]);
 const [userState,userDispatch] = useReducer(UserReducer,[]);

 
 
 const getCandidates = async() => {
  
    try {
      
        const response = await http.get('/candidates');
        const candidates = response.data;
        console.log('from app candidate',candidates)
        console.log('from app can')
        candidateDispatch({type: 'GET', candidates});
        
           } catch (error) {
      }
 }
 
 const getChairmans = async() => {
 
   try {
    
        const response = await http.get('/admin/chairmans');
        const chairmans = response.data;
        console.log('from app chairman',chairmans)
        console.log('from app')
        chairmanDispatch({type: 'GET', chairmans});
         } catch (error) {
      }
 }
 const getVoters = async() => {
    try {
        const response = await http.get('/voters');
        const voters = response.data;
        voterDispatch({type: 'GET', voters});
           } catch (error) {
      
      }
 }
//  const getCandidates = async() => {
 
//  const response = await http.get('/candidates');
 
//         const candidates = response.data;
//          console.log(response.data)
//          console.log(response.data[0].candidate.role.roleable)
//         console.log(candidates)
//         candidateDispatch({type: 'GET', candidates});
//  }
 

 
 useEffect(() => {
    getCandidates();
    getChairmans();
    getVoters();
  
  },[])


  return (
  
   
     
   <CandidateContext.Provider
      value={
                {
                   candidateState,candidateDispatch
                }
          }
   >   
       <VoterContext.Provider 
           value={
                      {
                         voterState,voterDispatch
                      }
                 }
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
              <Route path='/admin/dashboard' element={<AddCandidates />} />
              <Route path="/admin/update-profile" element={<Updateprofile />} />
              <Route path="/admin/add-election" element={<AddVote />} />
              {/* <Route path='/chairman/dashboard' element={<Chairman />} /> */}
              <Route path='/addcandidate' element={<AddCandidates />} />
              <Route path='/voters' element={<Voters />} />
              <Route path='/addchairman' element={<AddChairman />} />
              <Route path='/add-voter' element={<AddVoter />} />
              <Route path='/reportnews' element={<AddNews />} />
              <Route path='/notifications' element={<Feedbacks />} />
              <Route path="/candidatedescription" element={<CandidateDescription />} />
              <Route path="/allcandidates" element={<Allcandidate />} />
              <Route path="/Approvecandidate" element={<Approvecandidate />} />
              <Route path="/Watchvotersforchairman" element={<Watchvotersforchairman />} />
              <Route path="/Updateprofileforchairman" element={<Updateprofileforchairman />} />
              <Route path="/chairman/dashboard" element={<ChairmanDashboardHome />} />
              <Route path="/Feedbackforchairman" element={<Feedbackforchairman />} />
              <Route path="/Updatepasswordforadmin" element={<Updatepassword />} />
              <Route path="/Updatepasswordforcharirman" element={<Updatepasswordforcharirman /> } />
              <Route path="/Addpolicyandstrategy" element={<Addpolicyandstrategy /> } />
              <Route path="/CandidateDashboardHome" element={<CandidateDashboardHome /> } />
              <Route path="/AddElectionSlug" element={<AddElectionSlug />} />
              <Route path="/AddVote" element={<AddVote /> } />
              <Route path="/ElectionResult" element={<ElectionResult /> } />
              <Route path="/AddResult" element={<AddResult /> } />
              <Route path = "/regsiter" element = {<Register  />} />
              <Route path = 'face' element = { <RecognizeFace />} />
              <Route path = "/register" element = {<Register />} />
              <Route path = "/chairman/register" element = {<RegsiterChairman />} />
              <Route path = 'face-auth' element = { <RecognizeFace />} />
              <Route path = '/login' element = {<Login />} />
              <Route path = '/signin' element = {<LoginVoter />} />
              {/* <Route path = '/signin' element = {<LoginVoter />} /> */}
            </Routes>
            <div>
          
             
      
          
          </div>
          </div>
        </Router>
        </VoterContext.Provider>
      </CandidateContext.Provider>
 

 
  );
}

export default App;
