import axios from 'axios';

 const  api = axios.create(
    {
      baseURL: "https://booking-database-aa483-default-rtdb.europe-west1.firebasedatabase.app/",
    }
  );
  export default api;