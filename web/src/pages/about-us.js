import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="About Kidney Institute of the Desert | Nephrology"
        description="Our patients and their kidney care journey mean everything to us. Meet the team of expert nephrologists whose number one priority is your kidney health."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-10 md:pt-12 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <h1>Who We Are</h1>
              <p>
                The Kidney Institute of the Desert first opened in Indio in 1987
                to provide the community with quality dialysis care. Since then,
                our team of dedicated nephrologists and dialysis nurses has
                expanded. We now serve four locations throughout the greater
                Coachella Valley in Indio, Rancho Mirage, Coachella, and La
                Quinta.
              </p>
              <ButtonSolid
                modal="modal-contact"
                icon="fas fa-map-marker-alt"
                text="Find a Location"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.whoWeAre.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div>
              <GatsbyImage
                image={data.meetTheTeam.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
            <div>
              <h2>Meet the Team</h2>
              <p>
                Our nephrologists have years of experience in kidney care both
                locally and around the world. They’re committed to providing the
                best treatment for every patient who is living with kidney
                failure.
              </p>
              <ButtonGhost href="/team" text="Get to Know Us" />
            </div>
          </div>
        </div>
      </section>

      <ValueProps />
      <AreasWeServe />
      <Testimonials />
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
    whoWeAre: file(relativePath: { eq: "about/Who We Are.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    meetTheTeam: file(relativePath: { eq: "about/2.0-meet-the-team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
