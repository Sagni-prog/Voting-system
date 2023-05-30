
const Logout = () => {


  localStorage.removeItem('user');
  localStorage.removeItem('token');
  
  
  console.log("you are logged out")
}

export default Logout