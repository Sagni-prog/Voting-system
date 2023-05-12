import axios from "axios"
     
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          'Content-Type': 'application/json',
          'X-Face-Id' : localStorage.getItem('face-id'),
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
     });
     
export default http
