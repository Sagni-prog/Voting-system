/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import img2 from '../../../images/ivana-square.jpg'
import axios from 'axios'
import http from "../../../http/http";
import { AsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  candidates: [],
  status: 'iddle',
  error: null
}

 export const fetchCandidates = createAsyncThunk('candidates/fetchCandidates', async () => {
     
     const response = await http.get('/candidates');
     console.log("from http",response)
     return response.data;
 })

const candidateSlice=createSlice({
    name: "candidate",
    initialState,
   reducers: {
    addCandidate: (state, action) => {
      state.candidates = [...state.candidates, action.payload];
     console.log("hello",action.candidate)
    },
   
    
    extraReducers: (builder) => {
      builder
           .addCase(addCandidate.pending, (state) => {
                      state.status = "loading";
            })
           .addCase(fetchCandidates.fulfilled, (state, action) => {
                 state.status = "succeeded";
                 const loadedCandidates = action.payload;
                 state.candidate = state.candidate.concat(loadedCandidates);
                 
        })
           .addCase(addCandidate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
        });
    }
}});

export default candidateSlice.reducer;
export const selectCandidate = (state) => state.candidate.candidates;
export const getError = (state) => state.error
export const candidateStatus = (state) => state.status
export const { setCandidate } = candidateSlice.actions;