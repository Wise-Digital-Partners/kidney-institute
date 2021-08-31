import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Dialysis Clinic Locations | Kidney Institute of the Desert"
        description="We have clinics and offices located throughout the Palm Springs area and greater Coachella Valley. Find one near you."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <AreasWeServe
        className="pt-16 mb-18 md:mb-32"
        heading="Find a Kidney Care Center"
        headingLevel="h1"
        subtext="We have clinics and offices located throughout the Palm Springs area and greater Coachella Valley. Our team of nephrologists and dialysis specialists would love to meet you!"
      />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Global.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Global.jpg" }
    ) {
      publicURL
    }
  }
`;
export default Page;
