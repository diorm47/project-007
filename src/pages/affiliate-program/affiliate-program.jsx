import React from "react";
import "./affiliate-program.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload-icon.svg";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import contributor from "../../assets/images/contributor.png";

function AffiliateProgram() {
  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Affiliate program</p>
        </div>
        <div className="header_template_title">
          <h1>Affiliate program</h1>
        </div>
        <div className="affliate_header_text">
          <p>
            {" "}
            <b>Join the community of Lens Distortion Contributors!</b>
          </p>
          <p>
            {" "}
            <b>Shape the future.</b> Let’s build the most comprehensive
            Distortion Grids Database. Your shared distortion grids will make
            this resource even more valuable for the entire community.
          </p>
          <p>
            <b>Become a Contributor & Earn rewards.</b> Everyone who uploads
            distortion grids and gets them approved by our team becomes a valued
            contributor. You'll receive a <b>15% discount promo code</b> for any
            purchase in the Distortion Grids Database as a token of our
            appreciation. Top contributors, those who consistently share
            high-quality assets, will be recognized on a dedicated page,
            showcasing their work to a wider audience.
          </p>
          <p>
            <b>Let's push the boundaries of CG together!</b> Share your assets
            and contribute to this ever-growing resource. The more distortion
            grids we have, the more options artists will have to bring their
            visions to life. Upload your grids today and become part of a
            thriving creative community!
          </p>
        </div>

        <div className="custom_grids_upload">
          <div className="custom_form">
            <input type="text" placeholder="Camera" />
            <select name="" id="">
              <option value="">Lens manufacturer</option>
            </select>
            <input type="text" placeholder="Lens model" />
            <textarea placeholder="Description"></textarea>
            <div className="main_btn_temp">
              <p>Send</p>
              <ArrowRight />
            </div>
          </div>
          <div className="custom_upload">
            <UploadIcon />
            <p>
              Select a file from local drive <br /> or <span>drag it here</span>
            </p>
            <h4>(The download file cannot be larger than 15 MB)</h4>
            <div className="main_btn_temp">
              <p>Import</p>
              <ArrowRight />
            </div>{" "}
          </div>
        </div>
      </div>
      <section className="top_contributors container">
        <div className="top_contributors_title">
          <h2>Top contributors</h2>
          <NavLink to="/top-contributors">
            <div className="main_btn_temp">
              <p>See all</p>
              <ArrowRight />
            </div>
          </NavLink>
        </div>
        <div className="top_contributors_list">
          <div className="top_contributor">
            <h4>1.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>2.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>3.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>4.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>5.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>6.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>7.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>8.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>9.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>10.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>11.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>12.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>13.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>14.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
          <div className="top_contributor">
            <h4>15.</h4>
            <img src={contributor} alt="" />
            <div className="top_contributor_desc">
              <p>Annette Black</p>
              <div>
                <ContributionIcon />
                <span>1274</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AffiliateProgram;
