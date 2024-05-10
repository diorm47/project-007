import React, { useEffect, useState } from "react";
import "./to-top.css";
import { ReactComponent as ArrowTop } from "../../assets/icons/arrow-top.svg";

function ToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > window.innerHeight) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= window.innerHeight) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={
        showScroll ? "scroll-to-top scroll-to-top_visible" : "scroll-to-top"
      }
      onClick={scrollTop}
    >
      <ArrowTop />
    </button>
  );
}

export default ToTop;
