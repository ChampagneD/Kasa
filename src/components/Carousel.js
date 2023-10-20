import { React, useState } from "react";
import "../style/Carousel.sass";
//Styles

import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  return (
    <div className="sliderStyles">
      <div>
        <div onClick={goToPrevious} className="leftArrowStyles">
          <img src={leftArrow} alt="" />
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className="slideStyles" style={slideStylesWidthBackground}>
        <p className="counterStyles">
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;
