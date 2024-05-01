import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/nav-bar/nav-bar";
import Login from "./pages/login-auth-reset/login";
import Auth from "./pages/login-auth-reset/auth";
import Reset from "./pages/login-auth-reset/reset";
import EditProfile from "./pages/edit-profile/edit-profile";
import Profile from "./pages/profile/profile";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
