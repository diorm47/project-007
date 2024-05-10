import React from "react";
import "./home.css";
import { ReactComponent as Browse } from "../../assets/icons/browse.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import Select from "react-select";
import about_img from "../../assets/images/about-img.png";

import { ReactComponent as QualityMark } from "../../assets/icons/quality-mark.svg";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import tutorial1 from "../../assets/images/tutorial-1.png";
import tutorial2 from "../../assets/images/tutorial-2.png";
import tutorial3 from "../../assets/images/tutorial-3.png";
import ReviewsCarousel from "../../components/reviews-carousel/rev-carousel";
import { NavLink } from "react-router-dom";

function Home() {
  React.useEffect(() => {
    document.title = `Matchmove machine`;
  }, []);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
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
    <>
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
            <div className="main_btn_temp ">
              <p>Browse</p>
              <Browse />
            </div>
          </div>
          <div className="home_header_content_see_more">
            <NavLink to="/full-library">
              <div className="home_header_content_see_more_btn">
                <p>See full library</p>
                <More />
              </div>
            </NavLink>
            <ArrowDown />
          </div>
        </div>
      </header>
      <section className="home_about">
        <div className="home_about_wrapper">
          <div className="home_about_wrapper_content container">
            <div className="home_about_wrapper_left">
              <h2>About</h2>
              <p>
                High-quality <span>filming of distortion grids</span> requires
                1-3 hours of work by a film crew and expensive rental equipment.
                Grids remain in project archives and are not reused, or artists
                do not have time to receive them before tracking begins, and
                they spend a lot of time setting up the lens.
              </p>
              <p>
                Facing these challenges while producing camera tracking for our
                clients, we have <span>collected popular combinations</span> of
                camera models and lenses, as well as rare assets added weekly
                thanks to the support of the global community.
              </p>
              <p>
                Save your time and your clients’ budget, and be sure{" "}
                <NavLink to="/how-it-works"> of quality!</NavLink>
              </p>
            </div>
            <div className="home_about_wrapper_right">
              <img src={about_img} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="home_moto">
        <h1>
          “Each lens is unique - it is impossible to create <br />a universal
          preset!”
        </h1>
        <p>
          We tested the hypothesis in practice and{" "}
          <NavLink to="/how-it-works"> share the results.</NavLink>
        </p>
      </section>
      <section className="home_about how_it_works">
        <div className="home_about_wrapper">
          <div className="home_about_wrapper_content container">
            <div className="home_about_wrapper_left">
              <h2>How it works</h2>
              <p>
                We film distortion grids following{" "}
                <NavLink to="/how-it-works">the guide</NavLink> and then we
                create presets and STMaps.
              </p>
              <p>
                If you spot this icon on an asset, it signifies that we
                meticulously crafted it in our Matchmove machine studio,
                <span>ensuring the quality</span> of the purchased asset is
                guaranteed. Otherwise, we offer a money-back guarantee.
              </p>
              <p>
                Assets lacking this mark are available for{" "}
                <span>free download</span>, uploaded by users, and we cannot
                assure they will function exactly as intended. Discover more
                about our process for preparing and testing distortion grids and
                presets.
              </p>
              <NavLink to="/how-it-works">
                <div className="main_btn_temp see_more_btn_temp">
                  <p>See more</p>
                  <ArrowRight />
                </div>
              </NavLink>
            </div>
            <div className="home_about_wrapper_right">
              <QualityMark />
            </div>
          </div>
        </div>
      </section>
      <section className="home_tutorial">
        <div className="home_tutorial_wrapper container">
          <div className="home_tutorial_title">
            <h2>Tutorials</h2>
          </div>
          <div className="home_tutorial_cards">
            <div className="home_tutorial_card">
              <div className="home_tutorial_card_img">
                <img src={tutorial1} alt="" />
              </div>
              <div className="home_tutorial_card_title">
                <h4>
                  Multi-Camera Geometry <br /> Tracking
                </h4>
                <button className="home_tutorial_card_btn">
                  <Download />
                </button>
              </div>
              <div className="home_tutorial_card_desc">
                <p>
                  Welcome to an in-depth exploration of Multi-Camera Geometry
                  Tracking Technology! In this video, we'll unlock the mysteries
                  behind this cutting-edge innovation and its incredible
                  applications.
                </p>
              </div>
            </div>
            <div className="home_tutorial_card">
              <div className="home_tutorial_card_img">
                <img src={tutorial2} alt="" />
              </div>
              <div className="home_tutorial_card_title">
                <h4>Extract Focal Length</h4>
                <button className="home_tutorial_card_btn">
                  <Download />
                </button>
              </div>
              <div className="home_tutorial_card_desc">
                <p>
                  The script allows you to copy the Focal Length curve from the
                  EXR metadata directly to the Curve Editor, as well as to the
                  lens connected to the camera (if the focal length does not
                  change and the curve is not needed, you can just get it from
                  the EXR and write it to Lens).
                </p>
              </div>
            </div>
            <div className="home_tutorial_card">
              <div className="home_tutorial_card_img">
                <img src={tutorial3} alt="" />
              </div>
              <div className="home_tutorial_card_title">
                <h4>OpenEXR Metadata Reader</h4>
                <button className="home_tutorial_card_btn">
                  <Download />
                </button>
              </div>
              <div className="home_tutorial_card_desc">
                <p>
                  The script allows you to view the metadata of EXR files inside
                  the 3DEqualizer
                </p>
              </div>
            </div>
          </div>

          <NavLink to="/tutorials">
            <div className="home_header_content_see_more_btn browse_all">
              <p>Browse all</p>
              <More />
            </div>
          </NavLink>
        </div>
      </section>
      <section className="reviews">
        <div className="reviews_wrapper ">
          <div className="reviews_wrapper_title container">
            <h2>Reviews</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>
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

export default Home;
