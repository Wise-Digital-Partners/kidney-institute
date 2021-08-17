import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ValueProps = ({ className }) => {
  const data = useStaticQuery(graphql`
    {
      resources: file(
        relativePath: { eq: "repeating/resources/resources.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      nutrition: file(
        relativePath: { eq: "repeating/resources/nutrition.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
      travel: file(relativePath: { eq: "repeating/resources/travel.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 746)
        }
      }
    }
  `);

  const content = [
    {
      image: data.resources.childImageSharp.gatsbyImageData,
      heading: "New Patient Resources",
      text: "Fill out required forms before your visit. That way, we’re ready to begin your care when you arrive. ",
      link: "/resources",
    },
    {
      image: data.nutrition.childImageSharp.gatsbyImageData,
      heading: "Nutrition",
      text: "Our nutritionists can help you develop a kidney- friendly diet. Plans are tailored to each patient.",
      link: "/kidney-nutrition-dialysis-diet",
    },
    {
      image: data.travel.childImageSharp.gatsbyImageData,
      heading: "Travel",
      text: "Home dialysis options have made it possible for patients to travel safely and continue treatment.",
      link: "/traveling-on-dialysis",
    },
  ];

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10">
          {content.map((content, i) => {
            return (
              <AniLink fade to={content.link} className="group" key={i}>
                <div className="rounded-xl overflow-hidden mb-6">
                  <GatsbyImage
                    image={content.image}
                    alt={content.heading}
                    className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                  />
                </div>
                <h3 className="font-heading text-mobile-3xl md:text-3xl font-semibold mb-3.5">
                  {content.heading}
                </h3>
                <p className="mb-0">{content.text}</p>
              </AniLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
