import { createSlice } from "@reduxjs/toolkit";
import img2 from '../../../images/ivana-square.jpg';

const candidateDetailSlice=createSlice({
    name:"candidateDetail",
    initialState:{
        status: "idle",
        error: null,
        candidate:{
             
          id: 1,
          fullName: 'Natnael Getachew',
          firstName:'natty',
          lastName:'getachew',
          photoUrl: `${img2}`,
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          admissionYear: 2020,
          graduationYear: 2024,
          department: 'Computer Science',
          status: 'Pending',
          email: 'johndoe@example.com'
        }, 
    },
    reducers: {
      selectCandidate: (state, action) => {
        return action.payload;
      },
    },
});
export const selectCandidateDetailed = (state) => state.candidate.candidate;
export default candidateDetailSlice.reducer;
export const { selectCandidate } = candidateDetailSlice.actions;