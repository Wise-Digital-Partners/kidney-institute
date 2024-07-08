import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import Resources from "../components/Repeating/Resources";
import CallToAction from "../components/Repeating/CTA";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Coachella Kidney Institute | Nephrology & Dialysis Clinic"
        description="At the Coachella Kidney Institute, we're a team of friendly kidney doctors and dialysis clinic nurses with years of experience caring for patients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:bg-gray-50 pt-6 md:py-24 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#A68098] rounded text-center text-white text-xs font-semibold px-2 py-1 inline-flex mb-6">
                Dialysis Clinic
              </div>
              <h1>Coachella Kidney Institute</h1>
              <p>
                At the Kidney Institute, we’re a team of friendly kidney doctors
                and dialysis clinic nurses with years of experience caring for
                patients. Our goal is to help educate our patients about their
                kidney care and support them with treatments that are as
                comfortable and stress-free as possible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.mapPin.publicURL}
                    alt="Map pin icon"
                    className="mr-3"
                  />
                  <a
                    href="https://goo.gl/maps/VGR6Ywq8BK1i3V2J7"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    1413 6th St. Coachella, CA 92236
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.clock.publicURL}
                    alt="Clock icon"
                    className="mr-3"
                  />
                  <span>Monday, Wednesday, Friday 5:30 a.m. - 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.phone.publicURL}
                    alt="Phone icon"
                    className="mr-3"
                  />
                  <a href="tel:760-391-5300" className="hover:text-primary-900">
                    (760) 391-5300
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center mb-20 md:mb-32">
            <div>
              <GatsbyImage
                image={data.dialysis.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
            <div>
              <h2>Easy Access to Dialysis Services in Coachella</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. We provide expert, supportive dialysis services for
                those who are living with kidney disease.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>Top Nephrology Experts By Your Side</h2>
              <p>
                At the Coachella Kidney Institute, our physicians have spent
                years building their expertise and knowledge in kidney care both
                here and around the world. Our nephrologists are specialists in
                both the{" "}
                <a
                  href="https://www.kidneyinstitutes.com/dialysis-services"
                  className="font-bold text-[#162d6d]"
                >
                  diagnosis
                </a>{" "}
                and{" "}
                <a
                  href="https://www.kidneyinstitutes.com/nephrology"
                  className="font-bold text-[#162d6d]"
                >
                  treatment of kidney disease
                </a>
                .
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps locationsText="We're located in the heart of Coachella’s downtown, near Coachella City Hall." />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Coachella Kidney Institute.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Coachella Kidney Institute.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/coachella-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    dialysis: file(relativePath: { eq: "Locations/dialysis.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    nephrology: file(relativePath: { eq: "Locations/nephrology.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    mapPin: file(relativePath: { eq: "global/map-pin.svg" }) {
      publicURL
    }
    clock: file(relativePath: { eq: "global/clock.svg" }) {
      publicURL
    }
    phone: file(relativePath: { eq: "global/phone.svg" }) {
      publicURL
    }
  }
`;
export default Page;
