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
import KidneyValueProps from "../components/Repeating/KidneyValueProps";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Kidney Institute at Eisenhower Medical Center — Rancho Mirage"
        description="Searching for a kidney doctor or dialysis center in Rancho Mirage? Our team at Eisenhower Medical Center is here for you. Call us today!"
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
              <h1>
                Kidney Institute at Eisenhower Medical Center — Rancho Mirage
              </h1>
              <p>
                A kidney diagnosis changes everything about how you plan your
                week, how you think about travel, and how you feel walking into
                a clinic three times a week. We know that. The team at the
                Kidney Institute at Eisenhower Medical Center is here not just
                to manage your treatment, but to make sure you feel supported,
                informed, and cared for every time you walk through our doors in
                Rancho Mirage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.mapPin.publicURL}
                    alt="Map pin icon"
                    className="mr-3"
                  />
                  <a
                    href="https://goo.gl/maps/cxbFBFnDNrywBPc78"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    39000 Bob Hope Dr, Ste 103, Rancho Mirage, CA 92270
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.clock.publicURL}
                    alt="Clock icon"
                    className="mr-3"
                  />
                  <span>Monday - Saturday 5:30 a.m. - 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.phone.publicURL}
                    alt="Phone icon"
                    className="mr-3"
                  />
                  <a href="tel:760-837-9696" className="hover:text-primary-900">
                    (760) 837-9696
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
              <h2>Dialysis</h2>
              <p>
                Most dialysis patients have to manage two separate care
                relationships: their dialysis clinic and their hospital. At our
                Rancho Mirage location, those two are already connected. Our
                team coordinates directly with Eisenhower Medical Center
                physicians, so your{" "}
                <a
                  href="https://www.kidneyinstitutes.com/dialysis-services"
                  className="font-bold text-[#162d6d]"
                >
                  hemodialysis or peritoneal dialysis
                </a>{" "}
                plan reflects everything happening with your health, not just
                what happens during your treatment sessions.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>Nephrology</h2>
              <p>
                Our nephrologists in Rancho Mirage see patients across the full
                range of early chronic kidney disease, late-stage disease, and
                everything in between. They&apos;re trained in both the{" "}
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
                , and they take the time to walk you through your options, your
                lab results, and what to expect next. Kidney care is harder to
                manage when you don&apos;t understand what&apos;s happening, and
                that&apos;s something our physicians take seriously.
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

      <KidneyValueProps locationsText="We're in the Probst Building on Bob Hope Drive. For patients already receiving care at Eisenhower, getting to us doesn't mean a separate trip across town." />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: {
        eq: "open-graph/facebook/Kidney Institute at Eisenhower Medical Center.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/Kidney Institute at Eisenhower Medical Center.jpg"
      }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/emc-hero.jpg" }) {
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
