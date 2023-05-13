import axios from "axios"
    
     const token = localStorage.getItem('token');
     const faceId = localStorage.getItem('face-id');
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-Face-Id' : faceId ? faceId : 'hjhknj',
        }
     });
     
export default http
