import React from "react";
import "./share-page.css";
import { ReactComponent as Qr } from "../../assets/icons/qr.svg";
import { ReactComponent as Share } from "../../assets/icons/share-icon.svg";
import { ReactComponent as Copy } from "../../assets/icons/copy.svg";

import { ReactComponent as Facebook } from "../../assets/icons/socials/facebook.svg";
import { ReactComponent as X } from "../../assets/icons/socials/x.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/socials/ln.svg";
import { ReactComponent as Instagram } from "../../assets/icons/socials/ins.svg";
import { ReactComponent as Reddit } from "../../assets/icons/socials/rd.svg";
function SharePage() {
  return (
    <div className="share_page container">
      <h2>Share this page</h2>
      <div className="share_page_wrapper">
        <div className="share_page_qr">
          <Qr />
        </div>
        <div className="share_page_content">
          <div className="share_page_content_title">
            <Share />
            <p>Link</p>
          </div>
          <div className="share_page_content_link">
            <input
              type="text"
              value="https://grids.matchmovemachine.com/profile/109"
            />
            <Copy />
          </div>
          <div className="share_socials">
            <div className="share_social_item">
              <div className="share_social_item_icon">
                <Facebook />
              </div>
              <p>Facebook</p>
            </div>
            <div className="share_social_item">
              <div className="share_social_item_icon">
                <X />
              </div>
              <p>Twitter</p>
            </div>
            <div className="share_social_item">
              <div className="share_social_item_icon">
                <Linkedin />
              </div>
              <p>LinkedIn</p>
            </div>
            <div className="share_social_item">
              <div className="share_social_item_icon">
                <Instagram />
              </div>
              <p>Instagram</p>
            </div>
            <div className="share_social_item">
              <div className="share_social_item_icon">
                <Reddit />
              </div>
              <p>Reddit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharePage;
