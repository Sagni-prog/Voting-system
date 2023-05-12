import {React,useContext, useEffect} from 'react'
import CandidateContext from '../contexts/CandidateContext'

export const Hey = () => {

//  const {state, dispatch}= useContext(CandidateContext)
const {candidateState, candidateDispatch} = useContext(CandidateContext)
 
 useEffect(() => {
    console.log("from hey",candidateState)
    console.log("from hey")
 })
  return (
    candidateState.map((data) => {
       return (
         <h1>{data.first_name}</h1>
       )
    })
  )
}
