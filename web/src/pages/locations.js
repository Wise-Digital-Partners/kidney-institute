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

        canonical="https://www.kidneyinstitutes.com/locations"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://www.kidneyinstitutes.com/locations#webpage",
              url: "https://www.kidneyinstitutes.com/locations",
              name: "Dialysis Clinic Locations | Kidney Institute of the Desert",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              inLanguage: "en-US",
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/locations#list",
              },
            },
            {
              "@type": "ItemList",
              "@id": "https://www.kidneyinstitutes.com/locations#list",
              name: "Kidney Institute of the Desert locations",
              numberOfItems: 6,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://www.kidneyinstitutes.com/#location-indio",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id":
                      "https://www.kidneyinstitutes.com/#location-coachella",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id":
                      "https://www.kidneyinstitutes.com/#location-la-quinta",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@id":
                      "https://www.kidneyinstitutes.com/#location-rancho-mirage",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: {
                    "@id":
                      "https://www.kidneyinstitutes.com/#location-nephrology-indio",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  item: {
                    "@id":
                      "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
                  },
                },
              ],
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-indio",
              name: "Kidney Institute of the Desert - Indio",
              url: "https://www.kidneyinstitutes.com/indio-kidney-institute",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-coachella",
              name: "Coachella Kidney Institute",
              url: "https://www.kidneyinstitutes.com/coachella-kidney-institute",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
              name: "La Quinta Kidney Center",
              url: "https://www.kidneyinstitutes.com/la-quinta-kidney-center",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-rancho-mirage",
              name: "Kidney Institute at Eisenhower Medical Center",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute",
            },
            {
              "@type": "MedicalClinic",
              "@id":
                "https://www.kidneyinstitutes.com/#location-nephrology-indio",
              name: "Coachella Valley Nephrology - Indio",
              url: "https://www.kidneyinstitutes.com/indio-coachella-valley-nephrology",
            },
            {
              "@type": "MedicalClinic",
              "@id":
                "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
              name: "Coachella Valley Nephrology - La Quinta",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology",
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
