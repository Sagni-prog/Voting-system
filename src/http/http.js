import axios from "axios"
    
     const token = localStorage.getItem('token');
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
        }
     });
     
  http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
     
export default http
