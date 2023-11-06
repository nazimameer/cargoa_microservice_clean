import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import VendorHome from "./vendor/VendorHome";
import UserHome from "./user/userHome";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/user" element={<UserHome />} />
      <Route path="/vendor" element={<VendorHome />} />
    </Routes>
  </BrowserRouter>
);

export default App;
