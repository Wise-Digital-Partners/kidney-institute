import React, { useRef, useEffect } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Slick from "react-slick";
import styled from "@emotion/styled";
import tw from "twin.macro";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled.div`
  .slick-list,
  .slick-slider {
    position: inherit;
  }
  /* .slick-dots {
      li,
      button {
         ${tw`w-2 h-2`}
      }
      li {
         ${tw`mx-2`}
      }
   } */
`;

const Slider = ({ slideIndex, children }) => {
  const slider = useRef();

  useEffect(() => {
    slider.current.slickGoTo(slideIndex);
  }, [slideIndex]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !w-10 !h-10 !border !border-solid !border-primary-400 rounded-full slick-prev"
        aria-label="Previous Slide"
      ></button>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="group !w-10 !h-10 !border !border-solid !border-primary-400 rounded-full slick-next"
        aria-label="Next Slide"
      ></button>
    );
  }

  const sliderSettings = {
    dots: true,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 750,
    autoplay: true,
    autoplaySpeed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <StyledSlider>
      <Slick {...sliderSettings} ref={slider}>
        {children}
      </Slick>
    </StyledSlider>
  );
};

export default Slider;
