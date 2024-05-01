import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Exit } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { ReactComponent as Apple } from "../../assets/icons/social-login-icons/apple.svg";
import { ReactComponent as Facebook } from "../../assets/icons/social-login-icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/social-login-icons/google.svg";
import { ReactComponent as Microsoft } from "../../assets/icons/social-login-icons/microsoft.svg";
import "./login-auth.css";

function Login() {
  const [hidden, setHide] = useState(false);

  return (
    <div className="login_page_wrapper">
      <div className="login_inputs login_page_wrapper_left">
        <div className="login_page_wrapper_left_content">
          <div className="login_auth_title">
            <h1>Log in to your account</h1>
          </div>
          <div className="login_input_item">
            <input type="text" placeholder="E-mail or login" />
          </div>
          <div className="login_input_item">
            <input type={hidden ? "password" : "text"} placeholder="Password" />
            <div
              className={hidden ? "hide_pass hidden_pass" : "hide_pass"}
              onClick={() => setHide(!hidden)}
            >
              <PasswordHide />
            </div>
          </div>
          <div className="remember_reset">
            <div className="remember_me">
              <input type="checkbox" checked />
              <p>Remember me </p>
            </div>
            <NavLink to="/reset">
              <p>Forgot password</p>
            </NavLink>
          </div>
          <div className="login_btns">
            <button className="main_btn_temp">
              <p>Sign In</p>
              <ArrowRight />
            </button>
            <NavLink to="/auth">
              <button className="main_btn_temp_transparent">
                <p>Register</p>
                <More />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="login_socials">
        <NavLink to="/">
          <div className="login_exit">
            <Exit />
          </div>
        </NavLink>
        <div className="login_page_wrapper_right_content">
          <div className="login_auth_title">
            <h1>Sign in with</h1>
          </div>
          <div className="login_social_item">
            <Google />
            <p>Sign in with Google</p>
          </div>
          <div className="login_social_item">
            <Facebook />
            <p>Sign in with Facebook</p>
          </div>
          <div className="login_social_item">
            <Apple />
            <p>Sign in with Apple</p>
          </div>
          <div className="login_social_item">
            <Microsoft />
            <p>Sign in with Microsoft</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
