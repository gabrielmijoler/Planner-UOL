import axios from "axios";
import { useEffect } from "react";

const token = localStorage.getItem('token')
console.log("token",token)

const instance = axios.create({
    baseURL: 'https://latam-challenge-2.deta.dev/api/v1/',
    headers:{
      'Content-Type':'application/json',
      "Authorization": `Bearer ${token}`,
    }
  });

export default instance;