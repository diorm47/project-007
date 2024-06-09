import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { ReactComponent as PasswordHidden } from "../../assets/icons/hidden-password.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { ReactComponent as Success } from "../../assets/icons/success.svg";
import { mainApi } from "../../components/utils/main-api";
import Snackbar from "../../components/snackbar/snackbar";

function Auth() {
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

  const [hidden, setHide] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [website, setWebsite] = useState();
  const [portfolio, setPorfolio] = useState();
  const [about_me, setAboutme] = useState();
  const auth = () => {
    const userdata = {
      name: username,
      email: email,
      password: password,
      website: website,
      portfolio: portfolio,
      about_me: about_me,
    };
    mainApi
      .authorizationAction(userdata)
      .then((userData) => {
        localStorage.setItem("token", userData.token);
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
      <div className="auth_reset_page">
        <div className="back_icon">
          <NavLink to="/login">
            <BackIcon />
          </NavLink>
        </div>
        <div className="auth_reset_page_content">
          <div className="login_auth_title">
            <h1>Register form</h1>
          </div>
          <div className="auth_steps">
            <div className="auth_step auth_step_filled"></div>
            <div
              className={step == 2 ? "auth_step auth_step_filled" : "auth_step"}
            ></div>
          </div>
          {step == 1 ? (
            <div className="auth_step_1">
              <div className="login_input_item">
                <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>{" "}
              <div className="login_input_item">
                <input
                  type="email"
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
                <div className="hide_pass" onClick={() => setHide(!hidden)}>
                  {hidden ? <PasswordHidden /> : <PasswordHide />}
                </div>
              </div>
              <div className="auth_step_1_next">
                <button
                  className="main_btn_temp"
                  disabled={!username || !email || !password}
                  onClick={() => setStep(2)}
                >
                  <p>Next</p>
                  <ArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div className="auth_step_2">
              <div className="login_input_item">
                <input
                  type="text"
                  placeholder="Website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="login_input_item">
                <input
                  type="text"
                  placeholder="Portfolio"
                  value={portfolio}
                  onChange={(e) => setPorfolio(e.target.value)}
                />
              </div>
              <div className="login_input_item">
                <textarea
                  placeholder="About me"
                  value={about_me}
                  onChange={(e) => setAboutme(e.target.value)}
                />
              </div>

              <div className="login_btns">
                <button
                  className="main_btn_temp_transparent"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft />
                  <p>Back</p>
                </button>

                <button className="main_btn_temp" onClick={auth}>
                  <p>Register</p>
                  <Success />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Snackbar text={snackText} status={snackStatus} visible={visibleSnack} />
    </>
  );
}

export default Auth;
