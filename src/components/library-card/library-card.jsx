import React from "react";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import avatar from "../../assets/images/contributor.png";
import "./library-card.css";

function LibraryCard({ item }) {
  console.log(item);
  return (
    <div className="library_item_card">
      <div className="library_item_card_img">
        <div className="library_item_card_author">
          <>
            <p>{item.user.name}</p>
            <img src={avatar} alt="" />
          </>
        </div>
        <div className="library_item_model">
          <p>{item.lens_model}</p>
        </div>
      </div>
      <div
        className="library_item_card_price library_item_pricely"
      >
        <p>Download</p>

        <ArrowRight />
      </div>
    </div>
  );
}

export default LibraryCard;
