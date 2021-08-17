import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Background from "../Background/Background";
import Slider from "../Slider/SliderStandard";

const StyledSlider = styled.div`
  /* .slick-prev,
  .slick-next {
    ${tw`h-12 w-12 bg-primary-400 border border-solid border-gray-800`}
    i {
      ${tw`text-2xl text-gray-900`}
    }
    &:hover {
      ${tw`bg-primary-400`}
    }
  } */
  /* .slick-prev {
    ${tw``}
  }
  .slick-next {
    ${tw``}
  } */
  .slick-dots {
    ${tw`relative flex! items-center space-x-3 mt-10`}
    li {
      ${tw`h-2.5 w-2.5 rounded-full bg-primary-900 md:bg-white bg-opacity-40 mr-0 transition-all duration-300 ease-linear`}
      &.slick-active {
        ${tw`bg-opacity-100`}
      }
    }
  }
`;

const Testimonial = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      quotes: file(relativePath: { eq: "repeating/testimonials/quotes.svg" }) {
        publicURL
      }
      facebook: file(
        relativePath: { eq: "repeating/testimonials/facebook.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 81)
        }
      }
      backgroundDesktop: file(
        relativePath: {
          eq: "repeating/testimonials/testimonials-bg-desktop.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      backgroundMobile: file(
        relativePath: {
          eq: "repeating/testimonials/testimonials-bg-mobile.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const testimonials = [
    {
      quote:
        "The institute is very good in the care and attention they give. Blessings to the nurses and technicians.",
      name: "Norma Valladares",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
    {
      quote:
        "I had a very good experience at the clinic in Rancho Mirage and also Indio. Good team effort!",
      name: "Patrick Boatsman",
      platform: data.facebook.childImageSharp.gatsbyImageData,
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <div className="container relative px-0 md:px-4">
      <div className="md:hidden">
        <GatsbyImage
          image={data.backgroundMobile.childImageSharp.gatsbyImageData}
        />
      </div>
      <img
        src={data.quotes.publicURL}
        alt="Quotes icon"
        className="relative md:absolute -top-8 md:z-10 left-4 md:left-10 lg:left-20"
      />
      <Background
        backgroundImages={
          data.backgroundDesktop.childImageSharp.gatsbyImageData
        }
        mobileRemoveBackground={true}
        padding="md:py-36 md:px-10 lg:px-20"
        className={`${
          className || "rounded-4xl overflow-hidden mb-20 md:mb-32"
        }`}
      >
        <header className="md:mb-10 relative">
          <HeadingTag>What Our Patients Say</HeadingTag>
        </header>

        <StyledSlider>
          <Slider>
            {testimonials.map((testimonial, i) => {
              return (
                <div key={i}>
                  <blockquote className="md:max-w-md md:w-3/4">
                    <q>{testimonial.quote}</q>
                    <footer className="mt-10 mx-auto">
                      <div>
                        <cite className="not-italic">
                          <div className="font-heading text-sm md:text-base text-secondary-900 uppercase font-bold tracking-wide mb-2">
                            {testimonial.name}
                          </div>
                          <GatsbyImage image={testimonial.platform} />
                        </cite>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              );
            })}
          </Slider>
        </StyledSlider>
      </Background>
    </div>
  );
};

export default Testimonial;
