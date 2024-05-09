import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/nav-bar/nav-bar";
import Login from "./pages/login-auth-reset/login";
import Auth from "./pages/login-auth-reset/auth";
import Reset from "./pages/login-auth-reset/reset";
import EditProfile from "./pages/edit-profile/edit-profile";
import Profile from "./pages/profile/profile";
import Footer from "./components/footer/footer";
import HowItWorks from "./pages/how-it-works/how-it-works";
import AffiliateProgram from "./pages/affiliate-program/affiliate-program";
import Tutorials from "./pages/tutorials/tutorials";
import Guide from "./pages/guide/guide";
import Faq from "./pages/faq/faq";
import MagneticGrid from "./pages/magnetic-grid/magnetic-grid";

function App() {
  const location = useLocation();

  return (
    <div className="pages_wrapper">
      {location.pathname !== "/login" &&
      location.pathname !== "/auth" &&
      location.pathname !== "/reset" &&
      location.pathname !== "/edit-profile" ? (
        <NavBar />
      ) : (
        ""
      )}

      <div className="page_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/magnetic-grid" element={<MagneticGrid />} />

          <Route path="/faq" element={<Faq />} />

        </Routes>
      </div>
      {location.pathname !== "/login" &&
      location.pathname !== "/auth" &&
      location.pathname !== "/reset" &&
      location.pathname !== "/edit-profile" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
