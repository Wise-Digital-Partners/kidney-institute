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
        title="Coachella Valley Nephrology - Indio"
        description="At Coachella Valley Nephrology in Indio, we're a team of friendly kidney doctors and dialysis clinic nurses with years of experience caring for patients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="md:bg-gray-50 pt-6 md:py-24 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#F2A679] rounded text-center text-white text-xs font-semibold px-2 py-1 inline-flex mb-6">
                Nephrology Clinic
              </div>
              <h1>Coachella Valley Nephrology - Indio</h1>
              <p>
                At Coachella Valley Nephrology in Indio, we’re a team of
                friendly kidney doctors and dialysis clinic nurses with years of
                experience caring for patients. Our goal is to help educate our
                patients about their kidney care and support them with
                treatments that are as comfortable and stress-free as possible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.mapPin.publicURL}
                    alt="Map pin icon"
                    className="mr-3"
                  />
                  <a
                    href="https://goo.gl/maps/2riR8mrR8jwc1mFw9"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    81-719 Dr Carreon Blvd, Suite A Indio, CA 92201
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.clock.publicURL}
                    alt="Clock icon"
                    className="mr-3"
                  />
                  <span>Monday - Friday 8:00 a.m. - 5:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.phone.publicURL}
                    alt="Phone icon"
                    className="mr-3"
                  />
                  <a href="tel:760-360-4433" className="hover:text-primary-900">
                    (760) 360-4433
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-4xl"
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
                className="rounded-4xl"
              />
            </div>
            <div>
              <h2>Easy Access to Dialysis Services in Coachella Valley</h2>
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
                At Coachella Valley Nephrology in Indio, our physicians have
                spent years building their expertise and knowledge in kidney
                care both here and around the world. Our nephrologists are
                specialists in both the diagnosis and treatment of kidney
                disease.
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps locationsText="We're located along Carreon Boulevard, next door to the John F. Kennedy Memorial Hospital." />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/coachella-vallery-hero.jpg" }) {
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
