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
        title="Coachella Valley Nephrology - Rancho Mirage"
        description="At Coachella Valley Nephrology in Rancho Mirage, we're a team of friendly kidney doctors and dialysis clinic nurses with years of experience."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology#webpage",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology",
              name: "Coachella Valley Nephrology - La Quinta",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology#primaryimage",
              },
              about: {
                "@id":
                  "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
              },
              mainEntity: {
                "@id":
                  "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalClinic",
              "@id":
                "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
              name: "Coachella Valley Nephrology - La Quinta",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology",
              description:
                "Nephrology office in La Quinta, California (Coachella Valley Nephrology), part of Kidney Institute of the Desert.",
              telephone: "+1-760-200-1000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "43576 Washington St., Suite 100",
                addressLocality: "La Quinta",
                addressRegion: "CA",
                postalCode: "92253",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.7320022,
                longitude: -116.3028951,
              },
              hasMap:
                "https://www.google.com/maps/place/?q=place_id:ChIJI3X-RlL52oARheeMU36xjX0",
              image: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology#primaryimage",
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
                  ],
                  opens: "08:00",
                  closes: "17:00",
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
                "https://www.google.com/maps/place/?q=place_id:ChIJI3X-RlL52oARheeMU36xjX0",
              ],
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntityOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology#webpage",
              },
            },
            {
              "@type": "ImageObject",
              "@id":
                "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology#primaryimage",
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
              <div className="bg-[#F2A679] rounded text-center text-white text-xs font-semibold px-2 py-1 inline-flex mb-6">
                Nephrology Clinic
              </div>
              <h1>Coachella Valley Nephrology - La Quinta</h1>
              <p>
                At Coachella Valley Nephrology in La Quinta, we’re a team of
                friendly kidney doctors with years of experience caring for
                patients. Our goal is to use the most up-to-date information to
                help diagnose and manage your kidney conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.mapPin.publicURL} alt="" className="mr-3" />
                  <a
                    href="https://goo.gl/maps/7MykTPcrecut5TKG6"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    43576 Washington St., #100 La Quinta, CA 92253
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.clock.publicURL} alt="" className="mr-3" />
                  <span>Monday - Friday 8:00 a.m. - 5:00 p.m.</span>
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
                alt="Coachella Valley Nephrology office on Washington Street in La Quinta"
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
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Coachella Valley Nephrology nephrologist with a kidney patient in La Quinta"
              />
            </div>
            <div>
              <h2>Top Nephrology Experts By Your Side</h2>
              <p>
                At Coachella Valley Nephrology in Indio, our physicians have
                spent years building their expertise and knowledge in kidney
                care both here and around the world. Our nephrologists are
                specialists in both the{" "}
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
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>Easy Access to Dialysis Services in Coachella Valley</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. We provide expert, supportive dialysis services for
                those who are living with kidney disease.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.dialysis.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Dialysis care coordinated by Coachella Valley Nephrology in La Quinta"
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
      relativePath: {
        eq: "open-graph/facebook/Coachella Valley Nephrology?La Quinta.jpg"
      }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: {
        eq: "open-graph/twitter/Coachella Valley Nephrology?La Quinta.jpg"
      }
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
