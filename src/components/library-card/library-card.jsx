import React from "react";
import "./library-card.css";
import { ReactComponent as Prem } from "../../assets/icons/prem.svg";
import avatar from "../../assets/images/contributor.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

function LibraryCard({ item }) {
  return (
    <div className="library_item_card">
      <div className="library_item_card_img">
        <div className="library_item_card_author">
          {item.free ? (
            <>
              <p>{item.user}</p>
              <img src={avatar} alt="" />
            </>
          ) : (
            <Prem />
          )}
        </div>
        <div className="library_item_model">
          <p>{item.model}</p>
        </div>
      </div>
      <div
        className={
          item.free
            ? "library_item_card_price"
            : "library_item_card_price library_item_pricely"
        }
      >
        {item.free ? <p>FREE</p> : <p>{item.price}$</p>}

        <ArrowRight />
      </div>
    </div>
  );
}

export default LibraryCard;
