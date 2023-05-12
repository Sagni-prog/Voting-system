const CandidateReducer = (state,action) => {
  
  switch(action.type){
    
    case 'GET': 
       return action.candidates
      
    default:
      
  }
}

export default CandidateReducer;