import React from "react";
import "./tutoril-card.css";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import tutorial1 from "../../assets/images/tutorial-1.png";

function TutorialCard({data}) {
   console.log(data);
  return (
    <div className="home_tutorial_card tutorial_card">
      <div className="home_tutorial_card_img">
        <img src={tutorial1} alt="" />
      </div>
      <div className="home_tutorial_card_title">
        <h4>{data.title}</h4>
        <button className="home_tutorial_card_btn">
          <Download />
        </button>
      </div>
      <div className="home_tutorial_card_desc">
        <p>{data.desc}</p>
      </div>
    </div>
  );
}

export default TutorialCard;
