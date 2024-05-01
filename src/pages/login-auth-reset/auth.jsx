import React, { useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as PasswordHide } from "../../assets/icons/password-eye.svg";
import { ReactComponent as PasswordHidden } from "../../assets/icons/hidden-password.svg";
import Select from "react-select";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Success } from "../../assets/icons/success.svg";

function Auth() {
  const [hidden, setHide] = useState(false);
  const [step, setStep] = useState(1);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1111121a"
        : provided.backgroundColor,
      color: state.isSelected ? "white" : provided.color,
    }),
  };

  return (
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
              <input type="text" placeholder="Name" />
            </div>{" "}
            <div className="login_input_item">
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="login_input_item">
              <input
                type={hidden ? "password" : "text"}
                placeholder="Password"
              />
              <div className="hide_pass" onClick={() => setHide(!hidden)}>
                {hidden ? <PasswordHidden /> : <PasswordHide />}
              </div>
            </div>
            <div className="header_form_select login_input_item_select">
              <Select placeholder="Lens manufacturer" styles={customStyles} />
            </div>
            <div className="auth_step_1_next">
              <button className="main_btn_temp" onClick={() => setStep(2)}>
                <p>Next</p>
                <ArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="auth_step_2">
            <div className="login_input_item">
              <input type="text" placeholder="Website" />
            </div>
            <div className="login_input_item">
              <input type="text" placeholder="Portfolio" />
            </div>
            <div className="login_input_item">
              <textarea placeholder="About me" />
            </div>

            <div className="login_btns">
              <button
                className="main_btn_temp_transparent"
                onClick={() => setStep(1)}
              >
                <ArrowLeft />
                <p>Back</p>
              </button>

              <button className="main_btn_temp">
                <p>Register</p>
                <Success />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
