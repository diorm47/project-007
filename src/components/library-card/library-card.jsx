import React from "react";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import avatar from "../../assets/icons/default-avatar.jpg";
import "./library-card.css";
import { useNavigate } from "react-router-dom";

function LibraryCard({ item }) {
  const navigate = useNavigate();
  const userProfile = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="library_item_card">
      <div className="library_item_card_img">
        <div
          className="library_item_card_author"
          onClick={() => userProfile(item.user._id)}
        >
          <>
            <p>{item.user.name}</p>
            <img
              src={
                item.user.avatarUrl
                  ? `http://localhost:3001${item.user.avatarUrl}`
                  : avatar
              }
              alt=""
            />
          </>
        </div>
        <div className="library_item_model">
          <p>{item.lens_model}</p>
        </div>
      </div>
      {item.file ? (
        <a href={`http://localhost:3001${item.file}`}>
          <div className="library_item_card_price library_item_pricely">
            <p>Download</p>

            <ArrowRight />
          </div>
        </a>
      ) : (
        <div className="library_item_card_price library_item_pricely">
          <p>Download</p>

          <ArrowRight />
        </div>
      )}
    </div>
  );
}

export default LibraryCard;
