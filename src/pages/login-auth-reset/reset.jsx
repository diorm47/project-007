import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back-icon.svg";
import { ReactComponent as Okey } from "../../assets/icons/okey.svg";
import { ReactComponent as Close } from "../../assets/icons/modal-exit.svg";

function Reset() {
  const [step, setStep] = useState(1);
  return (
    <div className="auth_reset_page">
      <div className="back_icon">
        <NavLink to="/login">
          <BackIcon />
        </NavLink>
      </div>
      <div className="auth_reset_page_content">
        {step == 1 ? (
          <div className="auth_step_1">
            <div className="reset_text">
              <p>
                Enter your registered email address and we'll send you a
                password reset link
              </p>
            </div>
            <div className="login_input_item">
              <input type="email" placeholder="E-mail" />
            </div>

            <div className="reset_step">
              <button className="main_btn_temp" onClick={() => setStep(2)}>
                <p>Reset</p>
                <ArrowRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="auth_step_2">
            <div className="succes_reset_icon">
              <Okey />
            </div>
            <div className="reset_text">
              <p>
                We’ve sent a password reset link to your email address. Please
                check your inbox and follow the instructions
              </p>
            </div>
            <div className="reset_step ">
              <NavLink to="/login">
                <button
                  className="main_btn_temp reset_step_close"
                  onClick={() => setStep(2)}
                >
                  <p>Close</p>
                  <Close />
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reset;
