import React, { useState } from "react";
import "./full-library.css";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/icons/browse.svg";
import { ReactComponent as Success } from "../../assets/icons/success.svg";
import { allData } from "./data";
import LibraryCard from "../../components/library-card/library-card";
import TutorialPagination from "../../components/tutorial-pagination/tutorial-pagination";
import Switch from "../../components/switch/switch";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import contributor from "../../assets/images/contributor.png";


function FullLibrary() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Full library</p>
        </div>
        <div className="header_template_title">
          <h1>Distortion Grids Database </h1>
        </div>
        <div className="header_template_text">
          <p>
            Search for available distortion grids for chosen camera and lens
            models.
          </p>
        </div>
      </div>
      <div className="fl_img_block">
        <p>
          Unlock the power of precision with our <br /> Distortion Grids
          Database
        </p>
      </div>
      <div className="full_library_block container">
        <div className="full_library_filter">
          <div className="full_library_filter_title">
            <h2>Camera and Lens</h2>
          </div>
          <div className="full_library_filter_search">
            <input type="text" placeholder="Search" />
            <Search />
          </div>
          <div className="filter_apply_btn">
            <div className="main_btn_temp see_more_btn_temp">
              <p>Apply</p>
              <Success />
            </div>
          </div>
        </div>
        <div className="library_items">
          <div className="library_items_tops_filter">
            <TutorialPagination
              items={allData}
              setData={setData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={24}
            />
            <div className="free_assets_filter">
              <p>Free assets</p>
              <Switch />
            </div>
          </div>
          <div className="library_items_list">
            {data.map((item, index) => (
              <LibraryCard key={index} item={item} />
            ))}
          </div>
          <TutorialPagination
            items={allData}
            setData={setData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={24}
          />
        </div>
      </div>
      <section className="join_community">
        <div className="join_community_wrapper">
          <h2>Join the community</h2>
          <p>
            Share your assets and become a valued contributor to the Distortion
            Grids Database with bonus access to the library. Let's build an
            incredible library of distortion grids!
          </p>
          <NavLink to="/affiliate-program">
            <div className="main_btn_temp see_more_btn_temp">
              <p>Learn how</p>
              <ArrowRight />
            </div>
          </NavLink>
        </div>
      </section>
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

export default FullLibrary;
