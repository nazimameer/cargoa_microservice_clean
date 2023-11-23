/* eslint-disable react-hooks/exhaustive-deps */
import axios from "../../axios/userAxios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function UserAuth({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("token")) {
          navigate("/user");
        } else {
          const response = await axios.get('/user/auth');
          const { role } = response.data;
          if (role !== 'user') {
            navigate('/user');
          }
        }
      } catch (error) {
        // Handle errors appropriately (e.g., log them or show an error message)
        console.error("Error in UserAuth:", error);
        navigate('/user');
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return children;
}