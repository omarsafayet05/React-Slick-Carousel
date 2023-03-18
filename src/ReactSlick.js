import React from "react";
import Slider from "react-slick";
import "./style.css";

import image1 from "./images/cabin_night_photo01.jpg";
import image2 from "./images/cabin_night_photo02.jpg";
import image3 from "./images/cabin_night_photo03.jpg";
import image4 from "./images/cabin_night_photo04.jpg";
import image5 from "./images/cabin_night_photo05.jpg";
import image6 from "./images/cabin_night_photo06.jpg";
import image7 from "./images/cabin_night_photo07.jpg";
import image8 from "./images/cabin_night_photo08.jpg";
import image9 from "./images/cabin_night_photo09.jpg";
import image10 from "./images/cabin_night_photo10.jpg";
import image11 from "./images/cabin_night_photo11.jpg";
import image12 from "./images/cabin_night_photo12.jpg";

const ReactSlick = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="container">
        <Slider {...settings}>
          <div className="style">
            <img src={image1} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image2} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image3} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image4} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image5} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image6} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image7} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image8} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image9} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image10} alt="" srcset="" />
          </div>
          <div className="style">
            <img src={image11} alt="" srcset="" />+
          </div>
          <div className="style">
            <img src={image12} alt="" srcset="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ReactSlick;
