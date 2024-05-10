import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav-bar/nav-bar";
import ToTop from "./components/to-top/to-top";
import EditProfile from "./pages/edit-profile/edit-profile";
import Auth from "./pages/login-auth-reset/auth";
import Login from "./pages/login-auth-reset/login";
import Reset from "./pages/login-auth-reset/reset";
import NotFound from "./pages/not-found/not-found";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import AffiliateProgram from "./pages/affiliate-program/affiliate-program";
import Faq from "./pages/faq/faq";
import Guide from "./pages/guide/guide";
import HowItWorks from "./pages/how-it-works/how-it-works";
import MagneticGrid from "./pages/magnetic-grid/magnetic-grid";
import Tutorials from "./pages/tutorials/tutorials";
import FullLibrary from "./pages/full-library/full-library";
import TopContributors from "./pages/top-contributors/top-contributors";

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
          <Route path="/full-library" element={<FullLibrary />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/affiliate-program" element={<AffiliateProgram />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/magnetic-grid" element={<MagneticGrid />} />
          <Route path="/top-contributors" element={<TopContributors />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToTop />
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
