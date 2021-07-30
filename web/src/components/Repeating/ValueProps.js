import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";

const ValueProps = ({ className, headingLevel, heading }) => {
  const data = useStaticQuery(graphql`
    {
      convenientLocations: file(
        relativePath: { eq: "repeating/value-props/Convenient Locations.svg" }
      ) {
        publicURL
      }
      expertCare: file(
        relativePath: { eq: "repeating/value-props/Expert Care.svg" }
      ) {
        publicURL
      }
      friendlySupportiveSpecialists: file(
        relativePath: {
          eq: "repeating/value-props/Friendly & Supportive Specialists.svg"
        }
      ) {
        publicURL
      }
    }
  `);

  const content = [
    {
      icon: data.expertCare.publicURL,
      heading: "Expert Care",
      text: "You’ll be treated by top nephrologists and kidney care specialists with expertise in their fields.",
    },
    {
      icon: data.friendlySupportiveSpecialists.publicURL,
      heading: "Friendly & Supportive Specialists",
      text: "Our team of friendly kidney doctors and nurses provides personal, genuine care for every patient.",
    },
    {
      icon: data.convenientLocations.publicURL,
      heading: "Convenient Locations",
      text: "We have six kidney and dialysis clinics located in Indio, Rancho Mirage, Coachella, and La Quinta.",
    },
  ];

  // const HeadingTag = headingLevel || "h2";

  return (
    <section className={`${className || "mb-20 md:mb-32"}`}>
      <div className="container">
        {/* <header className="max-w-2xl mx-auto mb-14 text-center">
          <HeadingTag>{heading || ""}</HeadingTag>
        </header> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 text-center">
          {content.map((content, i) => {
            return (
              <div key={i}>
                <div className="mb-4">
                  <img
                    src={content.icon}
                    alt={content.heading}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-heading text-secondary-900 font-semibold text-lg md:text-xl mb-3">
                  {content.heading}
                </h3>
                <p className="mb-0">{content.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
