import React from "react";
import "./contributor-card.css";
import { ReactComponent as ContributionIcon } from "../../assets/icons/contribution-icon.svg";
import avatar from "../../assets/images/default.png";
import { useNavigate } from "react-router-dom";

function ContributorCard({ data, number }) {
  const navigate = useNavigate()
  const userProfile = (id) => {
    navigate(`/user/${id}`)
  }
  return (
    <div className="top_contributor" onClick={() => userProfile(data._id)}>
      <h4>{number + 1}.</h4>
      <img
        src={data.avatarUrl ? `http://localhost:3001${data.avatarUrl}` : avatar}
        alt=""
      />
      <div className="top_contributor_desc">
        <p>{data.name}</p>
        <div>
          <ContributionIcon />
          <span>{data.grids}</span>
        </div>
      </div>
    </div>
  );
}

export default ContributorCard;
