import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
// import tw from "twin.macro";

const ReviewCards = ({ gridLayout }) => {
  const StyledReviewCards = styled.div`
    .masonry-item {
      @media (min-width: 768px) {
        width: calc(50% - 1.5rem);
      }
      @media (min-width: 1024px) {
        width: calc(50% - 2.5rem);
      }
    }
  `;
  const data = useStaticQuery(graphql`
    {
      yelp: file(relativePath: { eq: "reviews/yelp.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 70)
        }
      }
      google: file(relativePath: { eq: "reviews/google.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 86)
        }
      }
      facebook: file(relativePath: { eq: "reviews/facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 110)
        }
      }
      headshot: file(relativePath: { eq: "reviews/user.svg" }) {
        publicURL
      }
    }
  `);

  let gridItemClass = null;

  if (gridLayout === "masonry") {
    gridItemClass = "masonry-item";
  } else {
    gridItemClass = "grid-item";
  }

  const reviews = [
    {
      name: "Norma Valladares",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "The institute is very good in the care and attention they give. Blessings to the nurses and technicians.",
    },
    {
      name: "Patrick Boatsman",
      platform: data.facebook.childImageSharp.gatsbyImageData,
      quote:
        "I had a very good experience at the clinic in Rancho Mirage and also Indio. Good team effort!",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-solid border-gray-300 rounded-lg mb-8 md:mb-10 p-6 md:py-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-4">
                  <span className="text-secondary-900 font-semibold">
                    {review.name}
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <GatsbyImage
                  image={review.platform}
                  alt="Social platform logo"
                />
              </div>
            </div>
            <blockquote>
              <q className="block mb-6 md:mb-0 before:hidden">{review.quote}</q>
            </blockquote>
            <div className="block md:hidden">
              <GatsbyImage image={review.platform} alt="Social platform logo" />
            </div>
          </div>
        );
      })}
    </StyledReviewCards>
  );
};

export default ReviewCards;
