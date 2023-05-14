import axios from "axios"
    
     const token = localStorage.getItem('token');
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
        }
     });
     
export default http
