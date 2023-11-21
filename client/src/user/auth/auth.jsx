/* eslint-disable react-hooks/exhaustive-deps */
import axios from "../../axios/userAxios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function UserAuth({ children }) {
  const navigate = useNavigate();
  useEffect(async() => {
    if (!localStorage.getItem("token")) {
      navigate("/user");
    } 

    const response = await axios.get('/user/auth');
    console.log(response);
  }, []);

  return children;
}
