import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import VendorHome from "./vendor/VendorHome";
import UserLogin from "./user/UserLogin";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/user" element={<UserLogin />} />
      <Route path="/vendor" element={<VendorHome />} />
    </Routes>
  </BrowserRouter>
);

export default App;
