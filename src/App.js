
import { useEffect, useState, useReducer } from 'react';
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

import AnnouncementContext from './contexts/AnnouncementContext';
import AnnouncementReducer from './reducers/announcementReducer';

import AlertContext from './contexts/AlertContext';
import AlertReducer from './reducers/AlertReducer';

import SuccessContext from './contexts/SuccessContext';
import SuccessReducer from './reducers/SuccessReducer';

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
import Addcandidates from './componets/ChairmanDashboard/Addcandidate';
import AllChairman from './componets/admin/AllChairman';

import AllCandidates from './componets/ChairmanDashboard/AllCandidates';

import VoteResult from './componets/ChairmanDashboard/VoteResult';
import Complains from './componets/ChairmanDashboard/Complains';


import UpdateProfile from './componets/candidateDashboard/UpdateProfile';
import UpdatePassword from './componets/candidateDashboard/UpdatePassword';
// import CandidateComplain from './componets/ChairmanDashboard/Complain';
import CandidateComplain from './componets/candidateDashboard/Complain';
import AddDescription from './componets/candidateDashboard/AddDescription';

import Alert from './componets/Candidates.js/Alert';

import Logout from './componets/Auth/Logout';


function App() {
  
   
  window.onbeforeunload = function(e) {
    localStorage.removeItem('face-id');
    if (performance.getEntriesByType("navigation")[0].type === "navigate") {
      
    }
  };
  

  
  
 const [candidateState,candidateDispatch] = useReducer(CandidateReducer,[]);
 const [chairmanState,chairmanDispatch] = useReducer(ChairmanReducer,[]);
 const [voterState,voterDispatch] = useReducer(VoterReducer,[]);
 const [userState,userDispatch] = useReducer(UserReducer,[]);
 const [announcementState,announcementDispatch] = useReducer(AnnouncementReducer,[]);
 const [alert, alertDispatch] = useReducer(AlertReducer,false)
 const [success, successDispatch] = useReducer(SuccessReducer,false)

 
 
 const getCandidates = async() => {
  
    try {
      
        const response = await http.get('/candidates');
        const candidates = response.data;
        // console.log('from app candidate',candidates)
        // console.log('from app can')
        candidateDispatch({type: 'GET', candidates});
        
           } catch (error) {
      }
 }
 
 const getChairmans = async() => {
 
   try {
    
        const response = await http.get('/admin/chairmans');
        const chairmans = response.data;
        
        chairmans.data.map((data) => console.log(data.id))
        console.log("chairmano : ", chairmans);
        chairmanDispatch({type: 'GET', chairmans});
         } catch (error) {
      }
 }
 
 const getVoters = async() => {
    try {
        const response = await http.get('/voters');
        const voters = response.data;
        console.log("from voter length:", voters.voters.length)
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

const getPosts = async() => {
  
  const res = await http.get('/announcement');
  // console.log("announcements", res.data.data)
  const announcement = res.data
  announcementDispatch({type: 'GET',announcement});
} 

// console.log("announcement2: ",announcementState)

 

 
 useEffect(() => {
    getCandidates();
    getChairmans();
    getVoters();
    getPosts();
  //  console.log(Logout())
  
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
        
       <ChairmanContext.Provider
          
           value={
                     {
                         chairmanState,chairmanDispatch
                     }
           }
       >
       
       <AnnouncementContext.Provider
       
           value={
                   {
                      announcementState,announcementDispatch
                   }
                }
       
       >
       
       <AlertContext.Provider 
          value={
                   {
                       alert,alertDispatch
                   }
                }
       >
       
       <SuccessContext.Provider 
            
            value={
                     {
                        success,successDispatch
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
              <Route path="/admin/chairman" element={<AllChairman />} />
              <Route path='/admin/add-chairman' element={<AddChairman />} />
              
              {/* <Route path='/chairman/dashboard' element={<Chairman />} /> */}
              <Route path='/addcandidate' element={<AddCandidates />} />
              <Route path='/voters' element={<Voters />} />
             
              <Route path='/add-voter' element={<AddVoter />} />
              <Route path='/reportnews' element={<AddNews />} />
              <Route path='/notifications' element={<Feedbacks />} />
              <Route path="/candidatedescription" element={<CandidateDescription />} />
              <Route path="/allcandidates" element={<Allcandidate />} />
              <Route path="/Approvecandidate" element={<Approvecandidate />} />
              <Route path="/Watchvotersforchairman" element={<Watchvotersforchairman />} />
              <Route path="/Updateprofileforchairman" element={<Updateprofileforchairman />} />
              
              <Route path="/chairman/dashboard" element={<AllCandidates />} />
              <Route path="/chairman/candidates" element={<AllCandidates />} />
              <Route path="/chairman/add-candidate" element={<Addcandidates />} />
              <Route path="/chairman/vote-result" element={<VoteResult />} />
              <Route path="/chairman/complains" element={<Complains />} />
              
              <Route path="/Feedbackforchairman" element={<Feedbackforchairman />} />
              <Route path="/Updatepasswordforadmin" element={<Updatepassword />} />
              <Route path="/Updatepasswordforcharirman" element={<Updatepasswordforcharirman /> } />
              
              <Route path="/candidate/dashboard" element={<Addpolicyandstrategy /> } />
              <Route path="/candidate/add-strategy" element={<Addpolicyandstrategy /> } />
              <Route path="/candidate/add-description" element={<AddDescription />} />
              <Route path="/candidate/update-profile" element={<UpdateProfile />} />
              <Route path="/candidate/update-password" element={<UpdatePassword />} />
              <Route path="/candidate/complain" element={<CandidateComplain />} />
              
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
              
              <Route path='/alert' element = { <Alert />}/>
              {/* <Route path = '/signin' element = {<LoginVoter />} /> */}
            </Routes>
            <div>
          </div>
          </div>
        </Router>
        </SuccessContext.Provider>
        </AlertContext.Provider>
        </AnnouncementContext.Provider>
      </ChairmanContext.Provider> 
    </VoterContext.Provider>
  </CandidateContext.Provider>
 

 
  );
}

export default App;
