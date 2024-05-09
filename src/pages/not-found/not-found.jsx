import React from "react";
import "./not-found.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Icon } from "../../assets/icons/not-found.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";

function NotFound() {
  return (
    <div className="header_template container">
      <div className="navigation_links">
        <NavLink to="/">
          Home <Arrow />
        </NavLink>
        <p>Error</p>
      </div>
      <div className="header_template_title">
        <h1>Error</h1>
      </div>
      <div className="not_found_wrapper">
        <div className="not_found_wrapper_top">
          <Icon />
          <p>
            Ooooooops! <br />
            Page not found.
          </p>
        </div>
        <div className="not_found_text">
          <p>
            We're sorry, but the page you are looking for could not be found. It
            seems that the link you followed may be broken or the page may have
            been removed.
            <br /> Please check the URL for any typos or return to the homepage
            to find what you're looking for.
            <br /> If you continue to experience this issue, please contact our
            support team for further assistance.
            <br />
            Thank you for your understanding.
          </p>
        </div>
        <NavLink to="/">
          <div className="main_btn_temp see_more_btn_temp">
            <p>Home</p>
            <Home />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
