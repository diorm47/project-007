import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Exit } from "../../assets/icons/modal-exit.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { ReactComponent as Google } from "../../assets/icons/social-login-icons/google.svg";
import { mainApi } from "../../components/utils/main-api";
import "./login-auth.css";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/user-reducer";
import Snackbar from "../../components/snackbar/snackbar";

function Login() {
  // snackbar
  const [visibleSnack, setVisibleSnack] = useState(false);
  const [snackText, setSnackText] = useState("");
  const [snackStatus, setSnackStatus] = useState("");
  const snackOptions = (text, status) => {
    setVisibleSnack(true);
    setSnackText(text);
    setSnackStatus(status);
    setTimeout(() => {
      setVisibleSnack(false);
    }, 2000);
  };
  const navigate = useNavigate();
  const [hidden, setHide] = useState(false);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    const userdata = {
      email: email,
      password: password,
    };
    mainApi
      .loginAction(userdata)
      .then((userData) => {
        localStorage.setItem("token", userData.token);
        const is_logged = {
          is_logged: true,
        };
        dispatch(loginUserAction(is_logged));
        dispatch(loginUserAction(userData));
        navigate("/");
      })
      .catch((err) => {
        console.log("Error object:", err);
        let errorMessage = "An error occurred";
        if (err && Array.isArray(err) && err.length > 0) {
          errorMessage = err[0].msg || err[0].message || "Error";
        } else if (err && err.message) {
          errorMessage = err.message;
        }
        snackOptions(errorMessage, "error");
      });
  };
  return (
    <>
      <div className="login_page_wrapper">
        <div className="login_inputs login_page_wrapper_left">
          <div className="login_page_wrapper_left_content">
            <div className="login_auth_title">
              <h1>Log in to your account</h1>
            </div>
            <div className="login_input_item">
              <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login_input_item">
              <input
                type={hidden ? "password" : "text"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <button className="main_btn_temp" onClick={login}>
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
          </div>
        </div>
      </div>
      <Snackbar text={snackText} status={snackStatus} visible={visibleSnack} />
    </>
  );
}

export default Login;
