import axios from "axios";



export const getInstance = () => {
  const token = localStorage.getItem("token") || "";
  console.log("token",token)
  return axios.create({
    baseURL: 'https://latam-challenge-2.deta.dev/api/v1/',
    headers:{
      'Content-Type':'application/json',
      "Authorization": `Bearer ${token}`,
    }
  });
};