import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import VendorHome from "./vendor/VendorHome";
import UserLogin from "./user/UserLogin";
import UserHome from "./user/UserHome";
const App = () => (
  <BrowserRouter>
    <Routes>
      
      <Route exact path="/" element={<LandingPage />} />
      {/* user Routes */}
      <Route  path="/user" element={<UserLogin />} />
      <Route path="/home" element={<UserHome />} />
      {/* vendor Routes  */}
      <Route path="/vendor" element={<VendorHome />} />
      <Route path="/dashboard" element={<VendorHome />} />
    </Routes>
  </BrowserRouter>
);

export default App;
