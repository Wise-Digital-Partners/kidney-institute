import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        // title=""
        // description=""
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-16 md:pt-32 pb-22 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <iframe
              src="https://kidney-institute-services-reviews-platform.flywheelsites.com/"
              title="Reviews Platform"
              width="100%"
              height="1200px"
              border="0"
            />
          </div>
        </div>
      </section>
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
