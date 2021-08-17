import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";
import englishForm from "../downloads/english-forms.pdf";
import spanishForm from "../downloads/spanish-forms.pdf";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Resources | Nephrology | Kidney Institute of the Desert"
        description="Get everything you need to be a 'kidney warrior.' Find a clinic, download the forms you'll need, check on insurance, and tap into educational resources."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-4 md:pt-24 mb-10 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Take Charge of Your Kidney Care</h1>
              <p className="mb-0">
                Here's everything you need to start being a “kidney warrior”
                when it comes to your kidney care. Get access to the forms
                you’ll need if you’re a new Kidney Institute patient, view a
                list of health insurance plans we accept, find a clinic, and tap
                into educational resources.
              </p>
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

      <section className="mb-8 md:mb-32">
        <div className="container">
          <div className="bg-[#A68098] bg-opacity-20 px-6 py-20 rounded-xl md:rounded-3xl">
            <header className="max-w-2xl mx-auto text-center">
              <div className="text-primary-900 font-bold tracking-wide uppercase mb-2">
                Step 01
              </div>
              <h2>New Patient? Start Here</h2>
              <p>
                To ensure each patient receives personal, genuine care during
                their visit, we ask that you complete a few forms and review our
                procedures ahead of time. That way, we can begin your care as
                soon as you arrive.
              </p>
              <div class="flex items-center justify-center flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
                <a
                  href={englishForm}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white shadow-3xl text-secondary-900 font-semibold px-5 py-3 rounded-4xl flex items-center justify-center space-x-4 text-center"
                >
                  <span>Download English Form</span>
                  <img src={data.downloadIcon.publicURL} alt="Download icon" />
                </a>

                <a
                  href={spanishForm}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white shadow-3xl text-secondary-900 font-semibold px-5 py-3 rounded-4xl flex items-center justify-center space-x-4 text-center"
                >
                  <span>Download Spanish Form</span>
                  <img src={data.downloadIcon.publicURL} alt="Download icon" />
                </a>
              </div>
            </header>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div>
              <GatsbyImage
                image={
                  data.checkInsuranceCoverage.childImageSharp.gatsbyImageData
                }
                width="560"
                className="rounded-4xl"
              />
            </div>
            <div>
              <div className="text-primary-900 font-bold tracking-wide uppercase mb-2">
                Step 02
              </div>
              <h2 className="font-body text-mobile-4xl md:text-4xl">
                Check Insurance Coverage
              </h2>
              <p className="md:text-xl">
                At the Kidney Institutes, we have a comprehensive list of health
                insurance plans we accept. They include:
              </p>
              <div className="grid md:grid-cols-2 gap-x-4">
                <div>
                  <ul className="list-disc pl-6">
                    <li>Aetna</li>
                    <li>Blue Cross</li>
                    <li>Blue Shield</li>
                    <li>Cigna</li>
                    <li>Community Care</li>
                    <li>DUAL</li>
                    <li>EPMG</li>
                    <li>Exclusive Care</li>
                    <li>Health Net</li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc pl-6">
                    <li>IEHP Direct</li>
                    <li>Kaiser</li>
                    <li>La Salle</li>
                    <li>Medical</li>
                    <li>Multiplan</li>
                    <li>Primary Care Associates</li>
                    <li>Prospect/Molina</li>
                    <li>Tricare</li>
                    <li>Veterans</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:bg-gray-50 md:py-32 mb-20 md:mb-32">
        <div className="container">
          <div className="text-primary-900 font-bold tracking-wide uppercase mb-2 md:text-center">
            Step 03
          </div>
        </div>
        <AreasWeServe heading="Find a Clinic" className="m-0" />
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header>
            <h2 className="font-body text-mobile-4xl md:text-4xl mb-10 md:mb-16">
              Additional Resources
            </h2>
          </header>
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <AniLink
              fade
              to="/kidney-nutrition-dialysis-diet"
              className="group"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <GatsbyImage
                  image={data.nutrition.childImageSharp.gatsbyImageData}
                  width="560"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                Your Guide to a Kidney-Friendly Diet
              </h3>
              <p className="mb-0">
                What foods are good for your kidneys? What do you need to avoid?
                Visit our nutritionist guide.
              </p>
            </AniLink>
            <AniLink fade to="/traveling-on-dialysis" className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <GatsbyImage
                  image={data.travel.childImageSharp.gatsbyImageData}
                  width="560"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                People On Dialysis Can Travel Too
              </h3>
              <p className="mb-0">
                Are you heading out of town? There are options that allow you to
                travel safely and continue your treatment.
              </p>
            </AniLink>
          </div>
        </div>
      </section>

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
    hero: file(
      relativePath: { eq: "Resources/Patient Forms/1.0-forms-hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    checkInsuranceCoverage: file(
      relativePath: { eq: "Resources/Patient Forms/3.0-insurance.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    downloadIcon: file(
      relativePath: { eq: "Resources/Patient Forms/2.0-download-icon.svg" }
    ) {
      publicURL
    }
    nutrition: file(
      relativePath: { eq: "Resources/Nutrition/1.0-hero-nutrition.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    travel: file(relativePath: { eq: "Resources/Travel/1.0-travel-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
