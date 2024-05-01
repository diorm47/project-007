import React from "react";
import "./profile.css";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import avatar from "../../assets/icons/default-avatar.jpg";
import { NavLink } from "react-router-dom";

import { ReactComponent as Facebook } from "../../assets/icons/contacts/facebook.svg";
import { ReactComponent as Vimeo } from "../../assets/icons/contacts/vimeo.svg";
import { ReactComponent as Instagram } from "../../assets/icons/contacts/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/contacts/linkedin.svg";
import { ReactComponent as Youtube } from "../../assets/icons/contacts/youtube.svg";

function Profile() {
  return (
    <div className="profile_page">
      <div className="profile_page_header">
        <div className="profile_page_header_content container">
          <div className="profile_page_header_content_top_actions">
            <div className="profile_page_header_content_top_actions_left">
              <NavLink to="/edit-profile">
                <button className="edit_profile_btn">
                  <Settings />
                </button>
              </NavLink>
              <div className="profile_username">
                <p>
                  #109 / <span>Greg</span>
                </p>
              </div>
            </div>
            <button className="logout_btn">
              <Logout />
            </button>
          </div>
          <div className="profile_page_infs">
            <div className="profile_page_infs_left">
              <div className="profile_page_infs_avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="profile_page_infs_left_desc">
                <div>
                  <h4>Email:</h4>
                  <NavLink to="">
                    <p>greg-grids@machine.com</p>
                  </NavLink>
                </div>
                <div>
                  <h4>Website:</h4>
                  <NavLink to="">
                    <p>https://machine.com</p>
                  </NavLink>
                </div>
                <div>
                  <h4>Portfolio:</h4>
                  <NavLink to="">
                    <p>https://behance.com/greg-grids</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="profile_page_infs_right">
              <p>Contacts: </p>
              <div className="profile_page_infs_right_socials">
                <div className="profile_page_infs_right_social_item">
                  <Facebook />
                </div>
                <div className="profile_page_infs_right_social_item">
                  <Vimeo />
                </div>
                <div className="profile_page_infs_right_social_item">
                  <Instagram />
                </div>
                <div className="profile_page_infs_right_social_item">
                  <Linkedin />
                </div>
                <div className="profile_page_infs_right_social_item">
                  <Youtube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
