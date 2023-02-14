import axios from "axios";


const instance = axios.create({
    baseURL: 'https://latam-challenge-2.deta.dev/api/v1/',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;