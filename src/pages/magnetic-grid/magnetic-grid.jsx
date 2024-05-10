import React from "react";
import "./magnetic-grid.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Prev } from "../../assets/icons/slider-left.svg";
import { ReactComponent as Next } from "../../assets/icons/slider-right.svg";
import car_img from "../../assets/images/magnetic-car.png";
import video from "../../assets/images/grid-video.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as LogoMax } from "../../assets/icons/logo-max.svg";

import { ReactComponent as Icon1 } from "../../assets/icons/specification-icons/icon1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/specification-icons/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/specification-icons/icon3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/specification-icons/icon4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/specification-icons/icon5.svg";
import { ReactComponent as Icon6 } from "../../assets/icons/specification-icons/icon6.svg";
import { ReactComponent as Icon7 } from "../../assets/icons/specification-icons/icon7.svg";
import { ReactComponent as Icon8 } from "../../assets/icons/specification-icons/icon8.svg";
import { NavLink } from "react-router-dom";

function SampleNextArrow(props) {
  
  const { onClick } = props;
  return (
    <div
      className="car_arrow car_arrow_m car_next_arr car_next_arr_m"
      onClick={onClick}
    >
      <Next />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="car_arrow car_arrow_m car_prev_arr car_prev_arr_m "
      onClick={onClick}
    >
      <Prev />
    </div>
  );
}

function MagneticGrid() {
  React.useEffect(() => {
    document.title = `Magnetic grid | Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="magnetic_header">
        <div className="magnetic_header_wrapper container">
          <div className="magnetic_header_title">
            <h1>
              XYZ.GRID - <br /> MAGNETIC <br /> DISTORTION <br /> GRID
            </h1>
            <p>
              Helps to make high-quality 3D tracking, recreate scene geometry
              and save time for the whole crew on set
            </p>
            <div className="turn_text">
              <p>Turn</p>
            </div>
          </div>
          <div className="magnetic_header_carousel">
            <Slider {...settings}>
              <div>
                <img src={car_img} alt="" />
              </div>
              <div>
                <img src={car_img} alt="" />
              </div>
              <div>
                <img src={car_img} alt="" />
              </div>
              <div>
                <img src={car_img} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="specification_section">
        <div className="specifications_wrapper">
          <div className="specification_section_title">
            <h1>Specifications</h1>
          </div>
          <div className="specification_cards container">
            <div className="specification_card">
              <Icon1 />
              <div className="specification_card_desc">
                <h4>Dimensions</h4>
                <div className="specification_card_line"></div>
                <p>
                  47x24inch (120x62cm) - Main <br />
                  24x12inch (60x31cm) - Mini
                </p>
              </div>
            </div>
            <div className="specification_card">
              <Icon2 />
              <div className="specification_card_desc">
                <h4>Thickness</h4>
                <div className="specification_card_line"></div>
                <p>0.028inch (0.7mm)</p>
              </div>
            </div>
            <div className="specification_card">
              <Icon3 />
              <div className="specification_card_desc">
                <h4>Easily to transport</h4>
                <div className="specification_card_line"></div>
                <p>
                  Just twist into pipe and there you go! + Cardboard tube To
                  prevent from damage during transport
                </p>
              </div>
            </div>
            <div className="specification_card">
              <Icon4 />
              <div className="specification_card_desc">
                <h4>Water and bending resistance</h4>
                <div className="specification_card_line"></div>
                <p>Designed to work in the harshest shooting locations</p>
              </div>
            </div>
            <div className="specification_card">
              <Icon5 />
              <div className="specification_card_desc">
                <h4>Comes with matte finish</h4>
                <div className="specification_card_line"></div>
                <p>
                  Helps to reduce glare and hotspots and makes working side
                  scratch resistant
                </p>
              </div>
            </div>
            <div className="specification_card">
              <Icon6 />
              <div className="specification_card_desc">
                <h4>Magnetic stickers</h4>
                <div className="specification_card_line"></div>
                <p>
                  Helps to collect all necessary information fast and accurate
                </p>
              </div>
            </div>
            <div className="specification_card">
              <Icon7 />
              <div className="specification_card_desc">
                <h4>Magnetic plate</h4>
                <div className="specification_card_line"></div>
                <p>
                  Metal surface + couple seconds and XYZ.Grid ready for
                  shootings, while traditional grids require a lot of time for
                  their installation and alignment
                </p>
              </div>
            </div>
            <div className="specification_card">
              <Icon8 />
              <div className="specification_card_desc">
                <h4>Extra Mini Grid</h4>
                <div className="specification_card_line"></div>
                <p>For macro and tele lenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_buy_section">
        <div className="grid_buy_section_wrapper container">
          <div className="grid_buy_section_form">
            <h2>Buy a grid for $100</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <div className="main_btn_temp see_more_btn_temp">
              <p>Send</p>
              <ArrowRight />
            </div>
            <div className="buy_grid_bottom">
              <p>
                We ship all over the world and accept all types of payments.{" "}
                <br />
                Shipping cost depends of destination.
              </p>
            </div>
          </div>
          <div className="logo_max">
            <LogoMax />
          </div>
        </div>
      </div>
      <div className="grid_video">
        <div className="grid_video_wrapper">
          <p>
            Watch our <b>video guide</b> of how to shoot distortion grids.{" "}
            <br />
            We also created a full text version of it, you can find it{" "}
            <a href="#">here</a>.
          </p>
          <img src={video} alt="" />
        </div>
      </div>
      <section className="join_community">
        <div className="join_community_wrapper">
          <h2>Join the community</h2>
          <p>
            Share your assets and become a valued contributor to the Distortion
            Grids Database with bonus access to the library. Let's build an
            incredible library of distortion grids!
          </p>
          <NavLink to="/affiliate-program">
            <div className="main_btn_temp see_more_btn_temp">
              <p>Learn how</p>
              <ArrowRight />
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default MagneticGrid;
