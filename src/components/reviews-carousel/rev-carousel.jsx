import React from "react";
import "./rev-carousel.css";
import rev_ava from "../../assets/images/review-ava.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Prev } from "../../assets/icons/slider-left.svg";
import { ReactComponent as Next } from "../../assets/icons/slider-right.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="car_arrow car_next_arr " onClick={onClick}>
      <Next />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="car_arrow car_prev_arr " onClick={onClick}>
      <Prev />
    </div>
  );
}

function ReviewsCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 111,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 111,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="reviews_carousel container">
      <Slider {...settings}>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="rev_card">
            <div className="rev_card_text">
              <p>
                Lorem ipsum dolor sit amet consectetur. Quam sagittis massa odio
                nibh elementum amet. Convallis cursus volutpat egestas gravida
                mattis vitae tincidunt quam maecenas. Neque interdum diam est
                purus in. Egestas leo scelerisque tortor mauris facilisi odio
                est interdum.
              </p>
            </div>
            <div className="rev_card_author">
              <img src={rev_ava} alt="" />
              <div>
                <h4>Jacob Jones</h4>
                <p>
                  Digital Genius,<span> Chief Software</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ReviewsCarousel;
