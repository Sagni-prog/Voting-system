const AlertReducer = (state,action) => {
  
    switch(action.type){
    
      case 'TOGGLE': 
         return !action.alert
      default:
    }
  }
  
  export default AlertReducer;