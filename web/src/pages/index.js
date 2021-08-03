import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import Resources from "../components/Repeating/Resources";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Kidney Institute of the Desert | Nephrology | Dialysis"
        description="At Kidney Institute of the Desert's six locations, you get top care from experts in nephrology, plus a team of caring dialysis nurses. "
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Background
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        // mobileRemoveBackground={true}
        padding="pt-24 md:pt-36 pb-32 md:pb-56"
        className="mb-14 md:mb-14"
      >
        <div className="max-w-2xl">
          <p className="font-heading text-white text-mobile-7xl md:text-7xl text-secondary-600 font-extrabold mb-4 md:mb-6">
            Expert Kidney Care. Serving the Desert Since 1987.
          </p>
          <p className="text-xl text-white mb-7">
            Top physicians and specialists serving four dialysis clinics and two
            nephrology locations.
          </p>

          <ButtonSolid modal="modal-contact" text="Find a Location" />
        </div>
      </Background>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="text-center max-w-[800px] mx-auto mb-20 md:mb-32">
            <img
              src={data.introVector.publicURL}
              alt="Heart icon"
              width="80"
              className="mb-6 mx-auto"
            />
            <h1>
              Top Nephrologists & Kidney Dialysis Clinics in Coachella Valley
            </h1>
            <p>
              At Kidney Institute of the Desert, we’re a About of friendly
              kidney doctors and dialysis clinic nurses with years of experience
              caring for patients. Our goal is to help educate our patients
              about their kidney care and support them with treatments that are
              as comfortable and stress-free as possible.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <h2>Dialysis Services</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. Our kidney specialists provide expert, supportive
                services for those who are living with kidney disease.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.dialysisServices.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-4xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.nephrologyExperts.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-4xl"
              />
            </div>
            <div>
              <h2>Nephrology Experts</h2>
              <p>
                At Kidney Institute of the Desert, our physicians have spent
                years building their expertise and knowledge in kidney care both
                here and around the world. Our nephrologists are specialists in
                both the diagnosis and treatment of kidney disease.
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe />
      <ValueProps />
      <Resources />
      <Testimonials />
      <About />
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
    heroDesktop: file(relativePath: { eq: "home/hero-desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(relativePath: { eq: "home/home-hero-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    introVector: file(relativePath: { eq: "home/intro.svg" }) {
      publicURL
    }
    nephrologyExperts: file(
      relativePath: { eq: "home/nephrology-experts.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    dialysisServices: file(relativePath: { eq: "home/dialysis-services.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
