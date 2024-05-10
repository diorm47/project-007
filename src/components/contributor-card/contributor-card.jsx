import React from "react";
import "./contributor-card.css";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import contributor from "../../assets/images/contributor.png";

function ContributorCard({data, number}) {
  
  return (
    <div className="top_contributor">
      <h4>{number}.</h4>
      <img src={contributor} alt="" />
      <div className="top_contributor_desc">
        <p>{data.name}</p>
        <div>
          <ContributionIcon />
          <span>{data.contrubutions}</span>
        </div>
      </div>
    </div>
  );
}

export default ContributorCard;
