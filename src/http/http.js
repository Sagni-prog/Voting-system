import axios from "axios"
     
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          'Content-Type': 'application/json',
          'X-Face-Id' : 'kjaesioamkklcajsoejas000'
        }
     });
     
export default http
