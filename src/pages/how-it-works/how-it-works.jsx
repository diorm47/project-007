import React from "react";
import "./how-it-works.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/nav-link-arrow.svg";
import { ReactComponent as Img1 } from "../../assets/images/how-it-works/1.svg";
import img2 from "../../assets/images/how-it-works/2.png";
import img3 from "../../assets/images/how-it-works/3.png";
import img4 from "../../assets/images/how-it-works/4.png";
function HowItWorks() {
  return (
    <>
      <div className="header_template container">
        <div className="navigation_links">
          <NavLink to="/">
            Home <Arrow />
          </NavLink>
          <p>How it works</p>
        </div>
        <div className="header_template_title">
          <h1>How it works</h1>
        </div>
        <div className="header_template_text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
            dui justo duis euismod sit quis. Velit ullamcorper arcu sit
            pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
            convallis ultricies ullamcorper metus. Senectus quam interdum dictum
            consectetur vestibulum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
            dui justo duis euismod sit quis. Velit ullamcorper arcu sit
            pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
            convallis ultricies ullamcorper metus. Senectus quam interdum dictum
            consectetur vestibulum.
          </p>
        </div>
      </div>
      <section className="home_moto">
        <h1>
          “Each lens is unique - it is impossible to create <br />a universal
          preset!”
        </h1>
        <p>
          We tested the hypothesis in practice and{" "}
          <a href="#">share the results.</a>
        </p>
      </section>
      <div className="description_text container">
        <h2>Distortion grid shooting technique</h2>
        <div className="description_text_flex">
          <div className="mw_527">
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
              dui justo duis euismod sit quis. Velit ullamcorper arcu sit
              pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
              convallis ultricies ullamcorper metus. Senectus quam interdum
              dictum consectetur vestibulum.Lorem ipsum dolor sit amet
              consectetur. Habitant quam eget mollis dui justo duis euismod sit
              quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
              <br />
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor. Facilisi sem neque convallis ultricies ullamcorper
              metus. Senectus quam interdum dictum consectetur vestibulum.
            </p>
            <p>
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
            </p>
          </div>
          <Img1 />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis dui
          justo duis euismod sit quis. Velit ullamcorper arcu sit pellentesque
          dictum morbi leo cursus tortor. Facilisi sem neque convallis ultricies
          ullamcorper metus. Senectus quam interdum dictum consectetur
          vestibulum.Lorem ipsum dolor sit amet consectetur. Habitant quam eget
          mollis dui justo duis euismod sit quis. Velit ullamcorper arcu sit
          pellentesque dictum morbi leo cursus tortor.
          <br />
          Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
          quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit amet
          consectetur. Habitant quam eget mollis dui justo duis euismod sit
          quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo cursus
          tortor. Facilisi sem neque convallis ultricies ullamcorper metus.
          Senectus quam interdum dictum consectetur vestibulum.
        </p>
        <p>
          Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
          quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit amet
          consectetur. Habitant quam eget mollis dui justo duis euismod sit
          quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo cursus
          tortor.
        </p>
        <h2>Preset process</h2>
        <div className="description_text_flex">
          <img src={img2} alt="" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
              dui justo duis euismod sit quis. Velit ullamcorper arcu sit
              pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
              convallis ultricies ullamcorper metus. Senectus quam interdum
              dictum consectetur vestibulum.Lorem ipsum dolor sit amet
              consectetur. Habitant quam eget mollis dui justo duis euismod sit
              quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
              <br />
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor. Facilisi sem neque convallis ultricies ullamcorper
              metus. Senectus quam interdum dictum consectetur vestibulum.
            </p>
            <p>
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
            </p>
          </div>
        </div>
        <h2>Similarity testing techniques</h2>
        <div className="description_text_flex">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
              dui justo duis euismod sit quis. Velit ullamcorper arcu sit
              pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
              convallis ultricies ullamcorper metus. Senectus quam interdum
              dictum consectetur vestibulum.Lorem ipsum dolor sit amet
              consectetur. Habitant quam eget mollis dui justo duis euismod sit
              quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
              <br />
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor. Facilisi sem neque convallis ultricies ullamcorper
              metus. Senectus quam interdum dictum consectetur vestibulum.
            </p>
            <p>
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
            </p>
          </div>
          <img src={img3} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis dui
          justo duis euismod sit quis. Velit ullamcorper arcu sit pellentesque
          dictum morbi leo cursus tortor. Facilisi sem neque convallis ultricies
          ullamcorper metus. Senectus quam interdum dictum consectetur
          vestibulum.Lorem ipsum dolor sit amet consectetur. Habitant quam eget
          mollis dui justo duis euismod sit quis. Velit ullamcorper arcu sit
          pellentesque dictum morbi leo cursus tortor.
          <br />
          Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
          quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit amet
          consectetur. Habitant quam eget mollis dui justo duis euismod sit
          quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo cursus
          tortor. Facilisi sem neque convallis ultricies ullamcorper metus.
          Senectus quam interdum dictum consectetur vestibulum.
        </p>
        <p>
          Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
          quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit amet
          consectetur. Habitant quam eget mollis dui justo duis euismod sit
          quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo cursus
          tortor.
        </p>
        <h2>Test example</h2>
        <div className="description_text_flex">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Habitant quam eget mollis
              dui justo duis euismod sit quis. Velit ullamcorper arcu sit
              pellentesque dictum morbi leo cursus tortor. Facilisi sem neque
              convallis ultricies ullamcorper metus. Senectus quam interdum
              dictum consectetur vestibulum.Lorem ipsum dolor sit amet
              consectetur. Habitant quam eget mollis dui justo duis euismod sit
              quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
              <br />
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor. Facilisi sem neque convallis ultricies ullamcorper
              metus. Senectus quam interdum dictum consectetur vestibulum.
            </p>
            <p>
              Facilisi sem neque convallis ultricies ullamcorper metus. Senectus
              quam interdum dictum consectetur vestibulum.Lorem ipsum dolor sit
              amet consectetur. Habitant quam eget mollis dui justo duis euismod
              sit quis. Velit ullamcorper arcu sit pellentesque dictum morbi leo
              cursus tortor.
            </p>
          </div>
          <img src={img4} alt="" />
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
