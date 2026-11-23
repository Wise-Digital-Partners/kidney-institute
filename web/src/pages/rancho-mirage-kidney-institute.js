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
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        documentTitle="Rancho Mirage Dialysis Clinic"
        title="Rancho Mirage Dialysis Clinic"
        description="Dialysis clinic on the Eisenhower Medical Center campus in Rancho Mirage. Your medical director is on-site. Call us at (760) 837-9696 to get started today."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute#webpage",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute",
              name: "Rancho Mirage Dialysis Clinic | Kidney Institute",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute#primaryimage",
              },
              about: {
                "@id":
                  "https://www.kidneyinstitutes.com/#location-rancho-mirage",
              },
              mainEntity: {
                "@id":
                  "https://www.kidneyinstitutes.com/#location-rancho-mirage",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-rancho-mirage",
              name: "Kidney Institute at Eisenhower Medical Center",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute",
              description:
                "Nephrology and dialysis clinic in Rancho Mirage, California, part of Kidney Institute of the Desert.",
              telephone: "+1-760-837-9696",
              address: {
                "@type": "PostalAddress",
                streetAddress: "39000 Bob Hope Dr., Suite 103",
                addressLocality: "Rancho Mirage",
                addressRegion: "CA",
                postalCode: "92270",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.762343,
                longitude: -116.406823,
              },
              hasMap:
                "https://www.google.com/maps/place/?q=place_id:ChIJHaGMMQD92oARKPeeWY6SMAg",
              image: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute#primaryimage",
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
                  name: "Rancho Mirage",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Cathedral City",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Palm Springs",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Thousand Palms",
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
                "https://www.google.com/maps/place/?q=place_id:ChIJHaGMMQD92oARKPeeWY6SMAg",
              ],
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntityOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute#webpage",
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
                "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/30818f81a307071ca811ef00af62b3ad/d84fc/emc-hero.jpg",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/30818f81a307071ca811ef00af62b3ad/d84fc/emc-hero.jpg",
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
              <h1>Kidney Institute at Eisenhower Medical Center in Rancho Mirage</h1>
              <p>
                A kidney diagnosis changes everything about how you plan your week, how
                you think about travel, and how you feel walking into a clinic three times
                a week. We know that. The team at the Kidney Institute at Eisenhower
                Medical Center is here not just to manage your treatment, but to make sure
                you feel supported, informed, and cared for every time you walk through
                our doors in Rancho Mirage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.mapPin.publicURL} alt="" className="mr-3" />
                  <a
                    href="https://goo.gl/maps/cxbFBFnDNrywBPc78"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    39000 Bob Hope Dr., Ste 103, Rancho Mirage, CA 92270
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.clock.publicURL} alt="" className="mr-3" />
                  <span>Monday through Saturday, 5:30 a.m. to 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.phone.publicURL} alt="" className="mr-3" />
                  <a href="tel:760-837-9696" className="hover:text-primary-900">
                    (760) 837-9696
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-6">
                <ButtonGhost href="/locations" text="Find a Location" />
                <ButtonSolid modal="modal-contact" text="Contact Us" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Kidney Institute at Eisenhower Medical Center dialysis clinic in Rancho Mirage"
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
                alt="Hemodialysis station at the Kidney Institute at Eisenhower Medical Center"
              />
            </div>
            <div>
              <h2>Dialysis on the Eisenhower Campus</h2>
              <p>
                Many dialysis patients manage two care relationships: a dialysis clinic
                and a hospital. At our Rancho Mirage clinic, the two are close together.
                We are on the Eisenhower Medical Center campus, and our medical director
                is an active member of the Eisenhower medical staff. We offer hemodialysis
                and peritoneal dialysis, with a care plan built around your whole health,
                not only your treatment days.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>Nephrology Led by Your On-Site Medical Director</h2>
              <p>
                Dr. Naren Chandrashekar is our on-site medical director here, so you see
                him in person, not on a screen. He is a board-certified nephrologist. He
                has cared for patients in the Coachella Valley since 2002. He is a former
                Chief of Nephrology at Eisenhower Medical Center and was President of its
                Medical Staff from 2022 through 2023. For office visits with a kidney
                doctor, our Coachella Valley Nephrology offices are in Indio and La
                Quinta.
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Nephrologist discussing kidney lab results with a patient at the Eisenhower Medical Center clinic"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps
        content={[
          { text: "Our on-site medical director, Dr. Naren Chandrashekar, is a former Chief of Nephrology at Eisenhower Medical Center." },
          { text: "Dialysis runs on a long-term schedule, three sessions a week for most patients. Our Rancho Mirage team gets to know patients well, and that familiarity shows up in how care is delivered." },
          { text: "We’re in the Probst Building on Bob Hope Drive. For patients already receiving care at Eisenhower, getting to us doesn’t mean a separate trip across town." },
        ]}
      />
      <Testimonials reviewer="Patrick Boatsman" />
      <Resources />
      <CallToAction locationHref="/locations" />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: {
        eq: "open-graph/facebook/Kidney Institute at Eisenhower Medical Center.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/Kidney Institute at Eisenhower Medical Center.jpg"
      }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/emc-hero.jpg" }) {
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
