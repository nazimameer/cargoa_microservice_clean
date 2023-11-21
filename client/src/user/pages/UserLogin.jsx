import { useState } from "react";
import axios from '../../axios/userAxios'
import { useNavigate } from 'react-router-dom';
import { message } from "antd";
const UserHome = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate()
  const LoginUser = async() => {
    try {
      const data = {
        email,
        password,
      };
      console.log(data);
      const response = await axios.post('/user/login', data);
      if(response && response.data) {
        const { token } = response.data;
        localStorage.setItem('token', token)
        navigate('/home');
      }
    } catch (error) {
      message.error(`${error}`);      
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold py-3">Users Portal</h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={LoginUser}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserHome;
