import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { ReactComponent as Visa } from "../../assets/icons/payments/visa.svg";
import { ReactComponent as Mastercard } from "../../assets/icons/payments/mc.svg";
import { ReactComponent as Paypal } from "../../assets/icons/payments/pp.svg";
import { ReactComponent as AmEx } from "../../assets/icons/payments/ae.svg";
import { ReactComponent as GPay } from "../../assets/icons/payments/gp.svg";
import { ReactComponent as APay } from "../../assets/icons/payments/ap.svg";
import { ReactComponent as Facebook } from "../../assets/icons/contacts/facebook.svg";
import { ReactComponent as Vimeo } from "../../assets/icons/contacts/vimeo.svg";
import { ReactComponent as Instagram } from "../../assets/icons/contacts/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/contacts/linkedin.svg";
import { ReactComponent as Youtube } from "../../assets/icons/contacts/youtube.svg";

function Footer() {
  return (
    <footer>
      <div className="footer_main">
        <div className="footer_wrapper container">
          <NavLink to="/">
            <div className="footer_logo">
              <Logo />
            </div>
          </NavLink>
          <div className="footer_menu">
            <div className="footer_menu_item">
              <h3>Menu</h3>
              <div className="footer_menu_list">
                <NavLink to="">
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
                <NavLink to="">
                  <p>Guide</p>
                </NavLink>
                <NavLink to="">
                  <p>Magnetic grid</p>
                </NavLink>
                <NavLink to="">
                  <p>FAQ</p>
                </NavLink>
              </div>
            </div>
            <div className="footer_menu_line"></div>
            <div className="footer_menu_item">
              <h3>Links</h3>
              <div className="footer_menu_list">
                <NavLink to="">
                  <p>Privacy policy</p>
                </NavLink>
                <NavLink to="">
                  <p>Terms of use</p>
                </NavLink>{" "}
                <NavLink to="">
                  <p>Our studio</p>
                </NavLink>
              </div>
            </div>
            <div className="footer_menu_line"></div>
            <div className="footer_menu_item">
              <h3>Payments</h3>
              <div className="footer_payments">
                <div className="footer_payment_item">
                  <Visa />
                </div>
                <div className="footer_payment_item">
                  <Mastercard />
                </div>
                <div className="footer_payment_item">
                  <Paypal />
                </div>
                <div className="footer_payment_item">
                  <AmEx />
                </div>
                <div className="footer_payment_item">
                  <GPay />
                </div>
                <div className="footer_payment_item">
                  <APay />
                </div>
              </div>
            </div>
            <div className="footer_menu_line"></div>
            <div className="footer_menu_item">
              <h3>Contacts</h3>
              <div className="profile_page_infs_right_socials footer_contacts">
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
              <div className="footer_email">
                <h3>EMAIL</h3>

                <NavLink to="mailto:grids@matchmovemachine.com">
               <p>    grids@matchmovemachine.com</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© Matchmove machine, 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
