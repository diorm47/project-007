import React from "react";
import "./tutorial-page.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import img1 from "../../assets/images/tutorial/Img.png";
import img2 from "../../assets/images/tutorial/Img (1).png";
import img3 from "../../assets/images/tutorial/Img (2).png";
import img4 from "../../assets/images/tutorial/Img (3).png";

function TutorialPage() {
  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <NavLink to="/tutorials">
            Tutorials <Arrow />
          </NavLink>
          <p>Favorite's Project</p>
        </div>
        <div className="header_template_title tutorial_page_title">
          <h1>Favorite's Project</h1>
          <div className="main_btn_temp see_more_btn_temp">
            <p>Download</p>
            <Download />
          </div>
        </div>
        <div className="header_template_text">
          <p>
            The script allows you to save projects to your list and then quickly
            open them. <br /> A kind of implementation of "Recent projects" from
            other programs in 3DE4.
          </p>
        </div>
      </div>
      <div className="tutorial_content container">
        <img src={img1} alt="" />
        <p>
          The idea for this script came at a time when it was necessary to make
          edits to different projects that are in different folders. The script
          is located under 3DE4 → Favourites Project and presents three options:{" "}
          <br />
          – the first item opens the main window of the script
          <br />
          – the second item adds the current project to the saved list
          <br />– the third item opens the last project from the list (it is
          important that it is from the list, not the last project that was
          opened). It is convenient when you remember what project is there and
          open it immediately
        </p>
        <p>The main window of the script looks like this:</p>
        <img src={img2} alt="" />
        <p>The list shows all the projects that are saved to the “database”.</p>
        <img src={img3} alt="" />
        <p>
          This part of the window allows you to work with the list. <br />
          You may find the necessary project (by name or comment). Open the
          selected project (opens with a buffer by default, but you may disable
          it) and delete the selected project from the list (not from the hard
          disk).
        </p>
        <img src={img4} alt="" />
        <p>This part of the window, allows you to save the current project that is currently open. It is also possible to specify a comment (saves to Project Notes and the list).</p>

      </div>
    </>
  );
}

export default TutorialPage;
