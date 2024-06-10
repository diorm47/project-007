import React, { useEffect, useState } from "react";
import "./top-contributors.css";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { NavLink } from "react-router-dom";

import TutorialPagination from "../../components/tutorial-pagination/tutorial-pagination";
import ContributorCard from "../../components/contributor-card/contributor-card";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { mainApi } from "../../components/utils/main-api.js";
import { getAllUsersAction } from "../../redux/users-reducer.jsx";
import { useDispatch, useSelector } from "react-redux";

function TopContributors() {
  React.useEffect(() => {
    document.title = `Top contributors | Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const allUsers = useSelector((state) => state.users)
  const sortedUser = allUsers.sort((a, b) => b.grids - a.grids)
  const [allData, setAllData] = useState(sortedUser);
  const [data, setData] = useState(sortedUser);
  const dispatch = useDispatch();

  const getUsers = () => {
    mainApi.getAllUsers().then((users) => {
      dispatch(getAllUsersAction(users));
      const sorted = users.sort((a, b) => b.grids - a.grids)
      setAllData(sorted);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Top contributors</p>
        </div>
        <div className="header_template_title">
          <h1>Top contributors</h1>
        </div>
        <div className="header_template_text">
          <p>
            We spotlight the incredible users who power the Distortion Grids
            Database! This page recognizes our top contributors, ranked by the
            number of their uploaded assets that have passed moderation. Your
            contributions are vital in building a fantastic resource for the
            community.
          </p>
        </div>
      </div>
      <div className="top_contributors_wrapper container">
        {data && data.length > 30 ? (
          <TutorialPagination
            items={allData}
            setData={setData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={30}
          />
        ) : (
          ""
        )}
        <div className="top_contributors_cards">
          {data.map((data, index) => (
            <ContributorCard data={data} number={index} />
          ))}
        </div>
        {data && data.length > 30 ? (
          <TutorialPagination
            items={allData}
            setData={setData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={30}
          />
        ) : (
          ""
        )}
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
    </>
  );
}

export default TopContributors;
