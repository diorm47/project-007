import React from "react";
import "./contributor-card.css";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import avatar from "../../assets/images/default.png";

function ContributorCard({ data, number }) {
  return (
    <div className="top_contributor">
      <h4>{number}.</h4>
      <img
        src={data.avatarUrl ? `http://localhost:3001${data.avatarUrl}` : avatar}
        alt=""
      />
      <div className="top_contributor_desc">
        <p>{data.name}</p>
        <div>
          <ContributionIcon />
          <span>sddsc</span>
        </div>
      </div>
    </div>
  );
}

export default ContributorCard;
