import React, { useState } from "react";
import "./tutorials.css";
import { NavLink } from "react-router-dom";
import { allData } from "./data";

import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";

import TutorialCard from "../../components/tutorial-card/tutoril-card";
import TutorialPagination from "../../components/tutorial-pagination/tutorial-pagination";
function Tutorials() {
  React.useEffect(() => {
    document.title = `Tutorials | Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>Tutorials</p>
        </div>
        <div className="header_template_title">
          <h1>Tutorials</h1>
        </div>
      </div>
      <div className="tutorials_list container">
        <TutorialPagination
          items={allData}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={6}
        />
        <div className="tutorial_cards">
          {data.map((item, index) => (
            <TutorialCard key={index} data={item} />
          ))}
        </div>
        <TutorialPagination
          items={allData}
          setData={setData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={6}
        />
      </div>
    </>
  );
}

export default Tutorials;
