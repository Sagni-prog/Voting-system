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
      candidates: [],
    },
   reducers: {
    addCandidate: (state, action) => {
      state.candidates = [...state.candidates, action.payload];
     console.log("hello",action.candidate)
     
    },
    setCandidate: (state, action) => {
      state.candidates = action.payload;
      console.log("Candidate data set", action.payload);
    },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCandidates.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCandidates.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.candidates = action.payload;
        })
        .addCase(fetchCandidates.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
});
export const fetchCandidates = createAsyncThunk(
  "candidate/fetchCandidates",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/candidates",
        {
          headers: {
            'X-Face-Id': localStorage.getItem('face-id'),
            'X-Requested-With': 'XMLHttpRequest',
            'content-type':'application/json'
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const registerCandidate = createAsyncThunk(
  "candidate/register",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/candidate/register",
        formData,
        {
          headers: {
            'X-Face-Id' : localStorage.getItem('face-id'),
            'X-Requested-With': 'XMLHttpRequest'
          },
        }
      );
     
     console.log(localStorage.getItem('face-id'))
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);


// export const fetchCandidate = createAsyncThunk("candidate/get", async () => {
//     const response = await axios.get("http://localhost:8000/all/candidates");
//     return response.data;
//   });
export default candidateSlice.reducer;
export const { setCandidate } = candidateSlice.actions;
export const selectCandidate = (state) => state.candidate.candidates;
export const getError = (state) => state.candidate.error;
export const candidateStatus = (state) => state.candidate.status;