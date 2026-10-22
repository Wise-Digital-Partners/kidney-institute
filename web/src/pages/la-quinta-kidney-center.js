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

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="La Quinta Kidney Center | Nephrology & Dialysis Clinic"
        description="At the La Quinta Kidney Center, we're a team of friendly kidney doctors and dialysis clinic nurses with years of experience caring for patients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/la-quinta-kidney-center"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.kidneyinstitutes.com/la-quinta-kidney-center#webpage",
              url: "https://www.kidneyinstitutes.com/la-quinta-kidney-center",
              name: "La Quinta Kidney Center | Nephrology & Dialysis Clinic",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/la-quinta-kidney-center#primaryimage",
              },
              about: {
                "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
              },
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
              name: "La Quinta Kidney Center",
              url: "https://www.kidneyinstitutes.com/la-quinta-kidney-center",
              description:
                "Nephrology and dialysis clinic in La Quinta, California, part of Kidney Institute of the Desert.",
              telephone: "+1-760-200-1000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "43576 Washington St., Suite 101",
                addressLocality: "La Quinta",
                addressRegion: "CA",
                postalCode: "92253",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.732025,
                longitude: -116.3029615,
              },
              hasMap:
                "https://www.google.com/maps/place/?q=place_id:ChIJSQT6O0L52oAR4t4w3Od55a4",
              image: {
                "@id":
                  "https://www.kidneyinstitutes.com/la-quinta-kidney-center#primaryimage",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday"],
                  opens: "05:30",
                  closes: "18:00",
                },
              ],
              medicalSpecialty: "https://schema.org/Nephrologic",
              areaServed: [
                {
                  "@type": "City",
                  name: "La Quinta",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Indian Wells",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Bermuda Dunes",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Palm Desert",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
              ],
              sameAs: [
                "https://www.google.com/maps/place/?q=place_id:ChIJSQT6O0L52oAR4t4w3Od55a4",
              ],
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntityOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/la-quinta-kidney-center#webpage",
              },
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Hemodialysis",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Peritoneal dialysis",
                },
              ],
            },
            {
              "@type": "ImageObject",
              "@id":
                "https://www.kidneyinstitutes.com/la-quinta-kidney-center#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/c6aa5f161ea8e9d2d78b4071a4215d83/d84fc/la-quinta-hero.jpg",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/c6aa5f161ea8e9d2d78b4071a4215d83/d84fc/la-quinta-hero.jpg",
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

      <section className="md:bg-gray-50 pt-6 md:py-24 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#A68098] rounded text-center text-white text-xs font-semibold px-2 py-1 inline-flex mb-6">
                Dialysis Clinic
              </div>
              <h1>La Quinta Kidney Center</h1>
              <p>
                At the Kidney Institute, we’re a team of friendly kidney doctors
                and dialysis clinic nurses with years of experience caring for
                patients. Our goal is to help educate our patients about their
                kidney care and support them with treatments that are as
                comfortable and stress-free as possible.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.mapPin.publicURL} alt="" className="mr-3" />
                  <a
                    href="https://goo.gl/maps/HG6V5oVz9VL26cYJ8"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    43576 Washington St. Suite 101, La Quinta, CA 92253
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.clock.publicURL} alt="" className="mr-3" />
                  <span>Monday and Wednesday 5:30 a.m. - 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.phone.publicURL} alt="" className="mr-3" />
                  <a href="tel:760-200-1000" className="hover:text-primary-900">
                    (760) 200-1000
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="La Quinta Kidney Center dialysis clinic on Washington Street in La Quinta"
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
                alt="Hemodialysis station at La Quinta Kidney Center"
              />
            </div>
            <div>
              <h2>Easy Access to Dialysis Services in La Quinta</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. We provide expert, supportive dialysis services for
                those who are living with kidney disease.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>Top Nephrology Experts By Your Side</h2>
              <p>
                At the La Quinta Kidney Center, our physicians have spent years
                building their expertise and knowledge in kidney care both here
                and around the world. Our nephrologists are specialists in both
                the{" "}
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
                .
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Nephrologist meeting with a kidney patient at La Quinta Kidney Center"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps locationsText="We're located on Washington Street, just off Fred Waring Drive and near Colonel Mitchell Paige Middle School." />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/La Quinta Kidney Center.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/La Quinta Kidney Center.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/la-quinta-hero.jpg" }) {
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
