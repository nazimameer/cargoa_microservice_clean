import { useState } from "react";
import axios from "../axios/userAxios";
import { message } from "antd";
const UserHome = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const LoginUser = () => {
    const data = {
      username,
      password,
    };
    try {
      console.log("happ");
      axios.post('/user/login', { data }).then((response) => {
       if(response.status)  console.log(response.status);
      });
    } catch (error) {
      message.error(`${error}`);      
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold py-3">User Portal</h1>
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
              onChange={(e) => setUsername(e.target.value)}
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
