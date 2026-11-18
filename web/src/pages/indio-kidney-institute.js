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
        documentTitle={"Indio Dialysis Clinic"}
        title={"Indio Dialysis Clinic"}
        description={"Medicare-certified Indio dialysis clinic since 1987. Hemodialysis and peritoneal dialysis next to JFK Memorial Hospital. Call (760) 347-8181 to begin care."}
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/indio-kidney-institute"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.kidneyinstitutes.com/indio-kidney-institute#webpage",
              url: "https://www.kidneyinstitutes.com/indio-kidney-institute",
              name: "Kidney Institute of the Desert - Indio | Nephrology & Dialysis Clinic",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/indio-kidney-institute#primaryimage",
              },
              about: {
                "@id": "https://www.kidneyinstitutes.com/#location-indio",
              },
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/#location-indio",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-indio",
              name: "Kidney Institute of the Desert - Indio",
              url: "https://www.kidneyinstitutes.com/indio-kidney-institute",
              description:
                "Nephrology and dialysis clinic in Indio, California, part of Kidney Institute of the Desert.",
              telephone: "+1-760-347-8181",
              address: {
                "@type": "PostalAddress",
                streetAddress: "81715 Doctor Carreon Blvd., Suite B2",
                addressLocality: "Indio",
                addressRegion: "CA",
                postalCode: "92201",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.7070808,
                longitude: -116.238594,
              },
              hasMap:
                "https://www.google.com/maps/place/?q=place_id:ChIJ_dCnUiT42oARztBNRh8_uAo",
              image: {
                "@id":
                  "https://www.kidneyinstitutes.com/indio-kidney-institute#primaryimage",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "05:30",
                  closes: "18:00",
                },
              ],
              medicalSpecialty: "https://schema.org/Nephrologic",
              areaServed: [
                {
                  "@type": "City",
                  name: "Indio",
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
                  name: "Indian Wells",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Thermal",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
              ],
              sameAs: [
                "https://www.google.com/maps/place/?q=place_id:ChIJ_dCnUiT42oARztBNRh8_uAo",
              ],
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntityOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/indio-kidney-institute#webpage",
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
                "https://www.kidneyinstitutes.com/indio-kidney-institute#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/2d30c8cfc39341ab7cdccd657a373478/d84fc/desert-indio-hero.jpg",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/2d30c8cfc39341ab7cdccd657a373478/d84fc/desert-indio-hero.jpg",
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
              <h1>{"Kidney Institute of the Desert in Indio"}</h1>
              <p>{"Our Indio clinic has been Medicare-certified since 1987. Kidney warriors across Indio and the eastern valley count on us for dialysis. We are a physician-owned, independent team, and we take time to get to know you. Find us on Doctor Carreon Boulevard, next to John F. Kennedy Memorial Hospital."}</p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.mapPin.publicURL} alt="" className="mr-3" />
                  <a
                    href="https://goo.gl/maps/MDaAWUDgMw2FsJwo6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    81715 Doctor Carreon Blvd., Suite B2, Indio, CA 92201
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.clock.publicURL} alt="" className="mr-3" />
                  <span>Monday through Saturday, 5:30 a.m. to 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.phone.publicURL} alt="" className="mr-3" />
                  <a href="tel:760-347-8181" className="hover:text-primary-900">
                    (760) 347-8181
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Kidney Institute of the Desert dialysis clinic on Doctor Carreon Boulevard in Indio"
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
                alt="Hemodialysis station at Kidney Institute of the Desert in Indio"
              />
            </div>
            <div>
              <h2>{"In-Center Hemodialysis and Peritoneal Dialysis in Indio"}</h2>
              <p>{"Our Indio clinic has 20 dialysis stations. We are open Monday through Saturday, 5:30 a.m. to 6:00 p.m. We offer in-center hemodialysis and peritoneal dialysis. Our nurses, dietitians, and social workers build one care plan with you, so you never manage kidney disease alone."}</p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>{"Kidney Doctors Close to Your Dialysis Clinic"}</h2>
              <p>{"Coachella Valley Nephrology is our physician practice, and its Indio office is just down the street. Dr. Jambur Chandrashekar, a founding member of Kidney Institute of the Desert, has been on staff at John F. Kennedy Memorial Hospital since 1979. Meet our kidney doctors at the Coachella Valley Nephrology office in Indio."}</p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Nephrologist reviewing kidney care options with a patient in Indio"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps locationsText="We're located in the heart of Indio, next door to the John F. Kennedy Memorial Hospital." />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: {
        eq: "open-graph/facebook/Kidney Institute of the Desert Indio.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/Kidney Institute of the Desert Indio.jpg"
      }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/desert-indio-hero.jpg" }) {
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
