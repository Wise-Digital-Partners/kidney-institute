import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";

const Page = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimization
        title="Leave Us a Review | Kidney Institute of the Desert"
        description="Your review helps other kidney warriors find compassionate dialysis and nephrology care in the Coachella Valley. Share your experience with our team today."
        canonical="https://www.kidneyinstitutes.com/review-us/"
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-16 md:pt-32 pb-22 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1>Share Your Experience as a Kidney Warrior</h1>
            <p>
              Your words matter to us. When you share your experience at Kidney
              Institute of the Desert, you help other kidney warriors across the
              Coachella Valley feel a little less alone at the start of their
              journey. Whether you receive{" "}
              <a
                href="https://www.kidneyinstitutes.com/dialysis-services"
                className="font-bold text-[#162d6d]"
              >
                treatment at one of our dialysis clinics
              </a>{" "}
              or{" "}
              <a
                href="https://www.kidneyinstitutes.com/nephrology"
                className="font-bold text-[#162d6d]"
              >
                see a nephrologist in one of our offices
              </a>
              , we would love to hear how our nurses, dietitians, social
              workers, and physicians have supported you.
            </p>

            <h2>Leaving a Review Takes About a Minute</h2>

            <iframe
              src="https://kidney-institute-services-reviews-platform.flywheelsites.com/"
              title="Leave a review for Kidney Institute of the Desert"
              width="100%"
              height="1200px"
              border="0"
            />

            <p>
              Not sure what to write? A sentence or two is plenty. You might
              mention the team members who cared for you, how comfortable you
              felt during treatment, or how easy it was to get started as a new
              patient. Every review helps a neighbor who is just beginning to
              look for kidney care in the desert.
            </p>

            <p>
              Curious what other patients have shared? Read our{" "}
              <a
                href="https://www.kidneyinstitutes.com/testimonials"
                className="font-bold text-[#162d6d]"
              >
                patient testimonials
              </a>
              .
            </p>
            <p>
              <a
                href="https://www.kidneyinstitutes.com/locations"
                className="font-bold text-[#162d6d]"
              >
                Find a location
              </a>{" "}
              near you.
            </p>
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
