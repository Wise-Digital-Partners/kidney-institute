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
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Rancho Mirage Dialysis Clinic & Nephrologists"
        description="Get top experts by your side. Our Rancho Mirage dialysis clinic and nephrologists are specialists in the diagnosis and treatment of kidney disease."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <Background
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        mobileRemoveBackground={true}
        padding="pt-4 md:pt-36 md:pb-56"
        className="mb-8 md:mb-14"
      >
        <div className="max-w-2xl">
          <h1 className="font-heading text-secondary-900 md:text-white text-mobile-7xl md:text-7xl text-secondary-600 font-extrabold mb-4 md:mb-6">
            Expert Kidney Care. Serving Rancho Mirage Since 1987.
          </h1>
          <p className="text-xl md:text-white font-semibold mb-7">
            Top physicians and specialists serving four dialysis clinics and two
            nephrology locations.
          </p>

          <ButtonSolid
            modal="modal-contact"
            icon="fas fa-map-marker-alt"
            text="Find a Location"
          />
        </div>
      </Background>

      <div className="relative md:hidden mb-14">
        <GatsbyImage image={data.heroMobile.childImageSharp.gatsbyImageData} />
        <GatsbyImage
          image={data.doctor.childImageSharp.gatsbyImageData}
          className="absolute bottom-0 right-0 w-3/4"
        />
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="md:text-center md:max-w-[800px] md:mx-auto mb-20 md:mb-32">
            <div className="hidden md:block">
              <img
                src={data.introVector.publicURL}
                alt="Heart icon"
                width="80"
                className="mb-6 mx-auto"
              />
            </div>
            <h2>Rancho Mirage Dialysis Clinic & Nephrologists</h2>
            <p>
              At Kidney Institute of the Desert, we’re a team of friendly kidney
              doctors and dialysis clinic nurses with years of experience caring
              for patients. Our goal is to help educate our patients about their
              kidney care and support them with treatments that are as
              comfortable and stress-free as possible.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <h2>Easy Access to Dialysis Services</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. Our Rancho Mirage kidney specialists provide expert,
                supportive services for those who are living with kidney
                disease.
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

          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.nephrologyExperts.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-4xl"
              />
            </div>
            <div>
              <h2>Top Nephrology Experts by Your Side</h2>
              <p>
                At Kidney Institute of the Desert, our physicians have spent
                years building their expertise and knowledge in kidney care both
                here and around the world. Our Rancho Mirage nephrologists are
                specialists in both the diagnosis and treatment of kidney
                disease.
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
    heroMobile: file(relativePath: { eq: "home/1.0-hero-curve-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    doctor: file(relativePath: { eq: "home/hero-doctor.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
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
