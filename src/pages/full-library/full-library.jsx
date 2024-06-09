import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as Search } from "../../assets/icons/browse.svg";

import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Success } from "../../assets/icons/success.svg";

import LibraryCard from "../../components/library-card/library-card";
import Switch from "../../components/switch/switch";
import TutorialPagination from "../../components/tutorial-pagination/tutorial-pagination";
import { mainApi } from "../../components/utils/main-api";
import { getGridsAction } from "../../redux/grids-reducer";
import { allData } from "./data";
import "./full-library.css";
import TopContributorsList from "../../components/top-contributos-list/top-contributos-list";

function FullLibrary() {
  React.useEffect(() => {
    document.title = `Full library | Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const gridsData = useSelector((state) => state.grids);
  const dispatch = useDispatch();
  const [data, setData] = useState(gridsData || []);
  const [currentPage, setCurrentPage] = useState(0);

  const getGrids = () => {
    mainApi.getGridsApi().then((userData) => {
      dispatch(getGridsAction(userData));
      setData(userData);
    });
  };

  useEffect(() => {
    getGrids();
  }, []);

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
          {data && data.length > 24 ? (
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
          ) : (
            ""
          )}
          <div className="library_items_list">
            {data.map((item, index) => (
              <LibraryCard key={index} item={item} />
            ))}
          </div>
          {data && data.length > 24 ? (
            <div className="library_items_bottom_filter">
              <TutorialPagination
                items={allData}
                setData={setData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={24}
              />
            </div>
          ) : (
            ""
          )}
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
      <TopContributorsList />
    </>
  );
}

export default FullLibrary;
