import axios from "axios";
const baseUrl = 'http://localhost:8000'
const EmployeeInstance = axios.create({
  baseURL: baseUrl,
});

EmployeeInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken"); // taking token from local storage

    if (token) { 
      // checking if token is present or not

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default EmployeeInstance;