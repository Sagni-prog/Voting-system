/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import img2 from '../../../images/ivana-square.jpg'
import axios from 'axios'

const candidateSlice=createSlice({
    name: "candidate",
    initialState: {
        status: "idle",
        error: null,
        candidates:[
            {
              id: 1,
              fullName: 'Natnael Getachew',
              firstName:'yohanes ',
              lastName:'getachew',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2020,
              graduationYear: 2024,
              department: 'Computer Science',
              status: 'Pending',
              email: 'johndoe@example.com',
            },
            {
              id: 2,
              fullName: 'Natnael Getachew',
              firstName:'zebider',
              lastName:'mikiket',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            },
            {
              id: 3,
              fullName: 'Natnael Getachew',
              firstName:'natty',
              lastName:'getachew',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
        ,
            {
              id:4,
              fullName: 'Natnael Getachew',
              firstName:'natty',
              lastName:'getachew',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
            ,
            {
              id: 5,
              fullName: 'Natnael Getachew',
              firstName:'natty',
              lastName:'getachew',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
            ,
            {
              id: 6,
              fullName: 'Natnael Getachew',
              firstName:'ggg',
              lastName:'getachew',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
            ,
            {
              id: 7,
              fullName: 'Natnael Getachew',
              firstName:'natty',
              lastName:'getachew',
              photoUrl: 'https://via.placeholder.com/150',
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
            ,
            {
              id: 8,
              fullName: '',
              firstName:'',
              lastName:'',
              photoUrl: `${img2}`,
              bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              admissionYear: 2019,
              graduationYear: 2023,
              department: 'Electrical Engineering',
              status: 'Approved',
              email: 'janedoe@example.com',
            }
           
            
            
          ]

    },
   reducers: {
    addCandidate: (state, action) => {
      state.push(action.payload);
    },
    },
});
export const fetchCandidate = createAsyncThunk("candidate/get", async () => {
    const response = await axios.get("http://localhost:8000/all/candidates");
    return response.data;
  });
export default candidateSlice.reducer;
export const selectCandidate = (state) => state.candidate.candidates;
export const { setCandidate } = candidateSlice.actions;