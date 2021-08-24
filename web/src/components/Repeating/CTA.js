import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import ButtonSolid from "../Button/ButtonSolid";
import ButtonGhost from "../Button/ButtonGhost";
// import CTAFullWidth from "../CTA/CTAFullWidth";

const CTA = ({ heading, headingLevel, subtext, onClick, className }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     backgroundDesktop: file(
  //       relativePath: { eq: "repeating/CTA/CTA desktop.jpg" }
  //     ) {
  //       childImageSharp {
  //         gatsbyImageData(layout: FULL_WIDTH)
  //       }
  //     }
  //     backgroundMobile: file(
  //       relativePath: { eq: "repeating/CTA/CTA - Mobile.jpg" }
  //     ) {
  //       childImageSharp {
  //         gatsbyImageData(layout: FULL_WIDTH)
  //       }
  //     }
  //   }
  // `);

  const HeadingTag = headingLevel || "h2";

  // const backgroundImages = [
  //   getImage(data.backgroundDesktop.childImageSharp.gatsbyImageData),
  //   {
  //     ...getImage(data.backgroundMobile.childImageSharp.gatsbyImageData),
  //     media: `(max-width: 767px)`,
  //   },
  // ];

  return (
    <section className={`bg-secondary-900 py-20 md:py-22 ${className || ""}`}>
      <div className="container">
        <div className="md:flex md:items-end md:space-x-24 lg:space-x-40">
          <header className="text-center md:text-left">
            <HeadingTag className="text-mobile-6xl md:text-6xl text-white md:mb-7">
              {heading || [
                "We’re Here for You",
                <span className="text-primary-900">.</span>,
              ]}
            </HeadingTag>

            <p className="text-base md:text-xl text-white md:mb-0">
              {subtext ||
                "Our goal is to build a relationship with each patient and develop individual treatment plans. Let’s get in touch today."}
            </p>
          </header>

          <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-4">
            <ButtonGhost
              modal="modal-contact"
              altStyle={true}
              onClick={onClick}
              icon="fas fa-map-marker-alt"
              text="Find a Location"
              className="w-full md:w-auto"
            />
            <ButtonSolid
              modal="modal-contact"
              text="Contact Us"
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
