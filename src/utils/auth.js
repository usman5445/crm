import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const signInAuth = async (data) => {
  console.log(data);
  return await axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
};

export const signUpAuth = async (data) => {
  console.log(data);
  return await axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
};
