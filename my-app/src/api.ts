import axios from "axios";

const instance = axios.create({
    baseURL: 'https://latam-challenge-2.deta.dev/api/v1/',
    headers:{
      'Content-Type':'application/json',
    }
  });

export default instance;