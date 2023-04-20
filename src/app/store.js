import { configureStore } from '@reduxjs/toolkit'
import candidate from './features/candidate/Candidate'
import candidateDetail from './features/candidate/CandidateDetail'

const store = configureStore({
  reducer: {
    candidate,
    candidateDetail},
})
export const dispatch = store.dispatch;
export default store;