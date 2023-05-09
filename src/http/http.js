import axios from "axios"
     
     const http = axios.create({
        'baseURL': 'http://localhost:8000/api',
        headers: {
          'X-Face-Id' : 'kjaesioamkklcajsoejas000'
        }
     });
     
export default http
