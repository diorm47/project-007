import React from "react";
import "./home.css";
import { ReactComponent as Browse } from "../../assets/icons/browse.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import Select from "react-select";

function Home() {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#1111121a"
        : provided.backgroundColor,
      color: state.isSelected ? "white" : provided.color,
    }),
  };

  return (
    <header className="home_header">
      <div className="home_header_content">
        <div className="home_header_content_title">
          <h1>Distortion grids database</h1>
        </div>
        <div className="home_header_content_desc">
          <p>
            You can easily search ready-to-use distortion grids from our
            database. Just select the desired camera and lens, then click the
            'Browse' button, or see the full library of available assets by
            clicking the link below.
          </p>
        </div>
        <div className="header_form">
          <div className="header_form_select">
            <Select placeholder="Camera" styles={customStyles} />
          </div>
          <div className="header_form_select">
            <Select placeholder="Lens manufacturer" styles={customStyles} />
          </div>
          <div className="header_form_select">
            <Select placeholder="Lens model" styles={customStyles} />
          </div>
          <div className="main_btn_temp">
            <p>Browse</p>
            <Browse />
          </div>
        </div>
        <div className="home_header_content_see_more">
          <div className="home_header_content_see_more_btn">
            <p>See full library</p>
            <More />
          </div>
          <ArrowDown/>
        </div>
      </div>
    </header>
  );
}

export default Home;
