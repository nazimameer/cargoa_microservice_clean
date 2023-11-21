import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import VendorHome from "./vendor/VendorHome";
import UserLogin from "./user/pages/UserLogin";
import UserHome from "./user/pages/UserHome";
import UserAuth from "./user/auth/auth";
const App = () => (
  <BrowserRouter>
    <Routes>
      
      <Route exact path="/" element={<LandingPage />} />
      {/* user Routes */}
      <Route  path="/user" element={<UserLogin />} />
      <Route path="/home" element={<UserAuth> <UserHome /> </UserAuth>} />
      {/* vendor Routes  */}
      <Route path="/vendor" element={<VendorHome />} />
      <Route path="/dashboard" element={<VendorHome />} />
    </Routes>
  </BrowserRouter>
);

export default App;
