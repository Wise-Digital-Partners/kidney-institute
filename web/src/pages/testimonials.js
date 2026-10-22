import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ReviewsGrid from "../components/Reviews/ReviewsGrid";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Testimonials | Kidney Institute of the Desert"
        description="Find out what our patients say about the care they've received at the Kidney Institute of the Desert. We always welcome your feedback."
        openGraphImage={data.openGraphImage.publicURL}
        twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
        canonical="https://www.kidneyinstitutes.com/testimonials"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.kidneyinstitutes.com/testimonials#webpage",
              url: "https://www.kidneyinstitutes.com/testimonials",
              name: "Testimonials | Kidney Institute of the Desert",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalBusiness",
              "@id": "https://www.kidneyinstitutes.com/#organization",
              name: "Kidney Institute of the Desert",
              url: "https://www.kidneyinstitutes.com/",
              logo: {
                "@id": "https://www.kidneyinstitutes.com/#logo",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.kidneyinstitutes.com/#website",
              url: "https://www.kidneyinstitutes.com/",
              name: "Kidney Institute of the Desert",
            },
            {
              "@type": "ImageObject",
              "@id": "https://www.kidneyinstitutes.com/#logo",
              url: "https://www.kidneyinstitutes.com/static/ea94a5b767f30e2decfc8f9e920d35db/Logo-grayscale%20stacked.png",
            },
          ],
        }}
      />

      <Background
        backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
        padding="py-20 md:py-24"
        className="mb-16 md:mb-24"
      >
        <div className="max-w-2xl">
          <h1 className="font-heading text-secondary-900  font-extrabold mb-4 md:mb-6">
            What Our Patients Say
          </h1>
          <p>
            Our patients and their kidney care journey mean everything to us.
            Here’s some feedback we’d like to share.
          </p>
          <ButtonSolid href="/review-us/" text="Review Us" />
        </div>
      </Background>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <ReviewsGrid gridLayout="masonry" />
        </div>
      </section>

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
    heroDesktop: file(
      relativePath: { eq: "reviews/reviews hero desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
export default Page;
