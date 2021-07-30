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
          gatsbyImageData(layout: FIXED, width: 84)
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
      name: "LeoPercopo",
      quote:
        "HCS have repeatedly impressed us with their commitment to excellence and drive to exceed our expectations. It’s been a pleasure working with the HCS Executive Manager for our property. Our weekly meetings have led to great results.",
    },
    {
      name: "Patrick Dahms",
      quote:
        "I brought HCS with me from The Aspen St. Regis Resort last year because I saw their savings, quality of performance, and their capacity to consistently exceed the expectations of a five diamond resort.",
    },
    {
      name: "Jill	Madzik",
      quote:
        "The staff has proven to very dependable; they do an exceptional job and are a pleasure to work with. The Sedona Area Manager and National Client Development Manager have always met our housekeeping needs, even with short notice.",
    },
    {
      name: "Brent M. DeNardo",
      quote:
        "We have enjoyed our partnership with HCS and look forward to continued partnership with an organization that has met and exceeded our properties expectations.",
    },
    {
      name: "Donna Jacobs",
      quote:
        "I needed a company that I could trust for the floors, to keep them preserved, but also looking beautiful. They know my main requirement is that these floors never look like they need to be cleaned or buffed. They have never let me down.",
    },
    {
      name: "Rick	Schatz",
      quote:
        "I am amazed at the lack of turnover. I know I have a partner who cares about what I care about. They have gone above and beyond the scope of the contract to meet our need.",
    },
  ];

  return (
    <StyledReviewCards>
      {reviews.map((review, i) => {
        return (
          <div
            className={`w-full bg-white border border-solid border-gray-200 rounded-lg mb-8 md:mb-10 p-6 md:pt-8 md:px-7 md:mx-3 lg:mx-5 ${gridItemClass}`}
            key={i}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <img
                  className="rounded-full"
                  src={review.headshot || data.headshot.publicURL}
                  alt="User Headshot"
                  width="40"
                />
                <div className="ml-4">
                  <span className="text-gray-900 tracking-wider font-bold">
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
              <q className="block text-gray-900 mb-6 md:mb-0 before:hidden">
                {review.quote}
              </q>
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
