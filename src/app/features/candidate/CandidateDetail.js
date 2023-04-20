import { createSlice } from "@reduxjs/toolkit";
import img2 from '../../../images/ivana-square.jpg';

const candidateDetailSlice=createSlice({
    name:"candidateDetail",
    initialState:{
        
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
            email: 'johndoe@example.com',
          
    },
    reducers: {
      selectCandidate: (state, action) => {
        return action.payload;
      },
    },
});
export const selectCandidateDetailed = (state) => state.candiateSelected;
export default candidateDetailSlice.reducer;
export const { selectProduct } = candidateDetailSlice.actions;