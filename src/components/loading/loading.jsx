import React from "react";
import "./loading.css";
import { ReactComponent as LoadingIcon } from "../../assets/icons/loading.svg";

function Loading() {
  return (
    <div className="loading_wrapper">
      <div className="loading_bg">
        <div className="loading_bg_filtered">
          <LoadingIcon />
          <p>
            Loading<span>...</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
