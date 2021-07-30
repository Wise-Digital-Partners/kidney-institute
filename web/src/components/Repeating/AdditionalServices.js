import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import ButtonWithUnderline from "../Button/ButtonWithUnderline";

const AreasWeServe = ({ className, headingLevel, heading, hiddenCard }) => {
  const data = useStaticQuery(graphql`
    {
      selling: file(
        relativePath: { eq: "repeating/additional-services/Selling.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 373)
        }
      }
      valuation: file(
        relativePath: { eq: "repeating/additional-services/Valuation.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 373)
        }
      }
      associate: file(
        relativePath: {
          eq: "repeating/additional-services/Find an ssociate.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 373)
        }
      }
      buy: file(
        relativePath: {
          eq: "repeating/additional-services/Buying a practice.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 373)
        }
      }
    }
  `);

  const content = [
    {
      image: data.selling.childImageSharp.gatsbyImageData,
      heading: "Selling Your Dental Practice",
      text: "We set clear goals and expectations upfront to ensure a smooth transition.",
      link: "/sell-your-dental-practice/",
    },
    {
      image: data.valuation.childImageSharp.gatsbyImageData,
      heading: "Dental Practice Valuation",
      text: "How much is your practice is worth? We provide certified business valuations.",
      link: "/dental-practice-valuation/",
    },
    {
      image: data.associate.childImageSharp.gatsbyImageData,
      heading: "Find an Associate",
      text: "Our extensive network of practices helps us match dentists looking for associates.",
      link: "/find-a-dental-associate/",
    },
    {
      image: data.buy.childImageSharp.gatsbyImageData,
      heading: "Buying a Dental Practice",
      text: "When you’re ready to buy a dental practice, search our listings to find the right match.",
      link: "/buy-a-dental-practice/",
    },
  ];

  const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-18 md:mb-32"}`}>
      <div className="container">
        <header className="mb-10 md:mb-12 text-center">
          <HeadingTag>{heading || "We Also Can Help With"}</HeadingTag>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-6">
          {content.map((content, i) => {
            return (
              <AniLink
                fade
                to={content.link}
                className={`relative group shadow-3xl ${
                  i === hiddenCard && "hidden"
                }`}
                key={i}
              >
                <GatsbyImage
                  image={content.image}
                  alt={content.heading}
                  className="mx-auto w-full"
                />
                <div className="px-4 pt-6 lg:pt-10 pb-10 md:pb-22">
                  <h3 className="mb-2.5">{content.heading}</h3>
                  <p className="md:mb-0">{content.text}</p>
                  <ButtonWithUnderline
                    className="md:hidden"
                    text="Learn More"
                  />
                </div>
                <span className="hidden md:block absolute left-0 bottom-0 px-4 py-1 text-white font-bold uppercase tracking-wider after:bg-primary-900 after:h-full after:w-3 after:absolute after:top-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-linear">
                  <span className="relative z-10">Learn More</span>
                </span>
              </AniLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
