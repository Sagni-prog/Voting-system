import { configureStore } from '@reduxjs/toolkit'
import candidate from './features/candidate/Candidate'
import candidateDetail from './features/candidate/CandidateDetail'
import voter from './features/voter/VoterSlice'


const store = configureStore({
  reducer: {
    candidate,
    candidateDetail,
    voter},
})
export const dispatch = store.dispatch;
export default store;