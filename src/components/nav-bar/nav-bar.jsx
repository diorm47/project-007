import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./nav-bar.css";
import { useSelector } from "react-redux";
import avatar from "../../assets/images/default.png";

function NavBar() {
  const userData = useSelector((state) => state.user);

  return (
    <div className="nav_overlay">
      <nav>
        <div className="nav_wrapper container">
          <NavLink to="/" className="nav_logo">
            <Logo />
          </NavLink>
          <div className="nav_logo_place"></div>
          <div className="nav_menu">
            <NavLink to="/full-library">
              <p>Full library</p>
            </NavLink>
            <NavLink to="/how-it-works">
              <p>How it works</p>
            </NavLink>
            <NavLink to="/affiliate-program">
              <p>Affiliate program</p>
            </NavLink>
            <NavLink to="/tutorials">
              <p>Tutorials</p>
            </NavLink>
            <NavLink to="/guide">
              <p>Guide</p>
            </NavLink>
            <NavLink to="/magnetic-grid">
              <p>Magnetic grid</p>
            </NavLink>
            <NavLink to="/faq">
              <p>FAQ</p>
            </NavLink>
          </div>
          <div className="nav_right">
            {!userData.email ? (
              <NavLink to="/login">
                <div className="nav_login_btn main_btn_temp">
                  <p>Sign In</p>
                  <ProfileIcon />
                </div>
              </NavLink>
            ) : (
              <NavLink to="/profile">
                <div className="nav_user_profile">
                  <img
                    src={
                      userData.avatarUrl
                        ? `http://localhost:3001${userData.avatarUrl}`
                        : avatar
                    }
                    alt=""
                  />
                  <div>
                    <h4>{userData.name}</h4>
                    <p>{userData.email}</p>
                  </div>
                </div>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
