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
        title="Coachella Kidney Institute | Nephrology & Dialysis Clinic"
        description="At the Coachella Kidney Institute, we're a team of friendly kidney doctors and dialysis clinic nurses with years of experience caring for patients."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/coachella-kidney-institute"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id":
                "https://www.kidneyinstitutes.com/coachella-kidney-institute#webpage",
              url: "https://www.kidneyinstitutes.com/coachella-kidney-institute",
              name: "Coachella Kidney Institute | Nephrology & Dialysis Clinic",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/coachella-kidney-institute#primaryimage",
              },
              about: {
                "@id": "https://www.kidneyinstitutes.com/#location-coachella",
              },
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/#location-coachella",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-coachella",
              name: "Coachella Kidney Institute",
              url: "https://www.kidneyinstitutes.com/coachella-kidney-institute",
              description:
                "Nephrology and dialysis clinic in Coachella, California, part of Kidney Institute of the Desert.",
              telephone: "+1-760-391-5300",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1413 6th St.",
                addressLocality: "Coachella",
                addressRegion: "CA",
                postalCode: "92236",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.67843,
                longitude: -116.1775417,
              },
              hasMap:
                "https://www.google.com/maps/place/?q=place_id:ChIJY0ObM4lY2oARReOrfc4ZIYs",
              image: {
                "@id":
                  "https://www.kidneyinstitutes.com/coachella-kidney-institute#primaryimage",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Friday"],
                  opens: "05:30",
                  closes: "18:00",
                },
              ],
              medicalSpecialty: "https://schema.org/Nephrologic",
              areaServed: [
                {
                  "@type": "City",
                  name: "Coachella",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Mecca",
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
                "https://www.google.com/maps/place/?q=place_id:ChIJY0ObM4lY2oARReOrfc4ZIYs",
              ],
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntityOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/coachella-kidney-institute#webpage",
              },
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "In-center hemodialysis",
                },
              ],
            },
            {
              "@type": "ImageObject",
              "@id":
                "https://www.kidneyinstitutes.com/coachella-kidney-institute#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/7980abcec932121cc32bd685fd46f5e7/d84fc/coachella-hero.jpg",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/7980abcec932121cc32bd685fd46f5e7/d84fc/coachella-hero.jpg",
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
              <h1>Coachella Kidney Institute</h1>
              <p>
                Kidney disease doesn&apos;t wait, and neither should your care.
                The Coachella Kidney Institute brings specialist-level
                nephrology and in-center hemodialysis directly to the heart of
                Coachella so residents of the eastern Coachella Valley
                don&apos;t have to travel far for the treatment they need. Our
                bilingual team understands the community we serve and is
                committed to providing attentive, culturally aware care at every
                visit.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.mapPin.publicURL} alt="" className="mr-3" />
                  <a
                    href="https://goo.gl/maps/VGR6Ywq8BK1i3V2J7"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-900"
                  >
                    1413 6th St. Coachella, CA 92236
                  </a>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.clock.publicURL} alt="" className="mr-3" />
                  <span>Monday, Wednesday, Friday 5:30 a.m. - 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img src={data.phone.publicURL} alt="" className="mr-3" />
                  <a href="tel:760-391-5300" className="hover:text-primary-900">
                    (760) 391-5300
                  </a>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Coachella Kidney Institute clinic providing nephrology care and patient-centered dialysis services"
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
                alt="In-center hemodialysis station at Coachella Kidney Institute"
              />
            </div>
            <div>
              <h2>
                {" "}
                In-Center Hemodialysis Serving Coachella and the Eastern Valley
              </h2>
              <p>
                Patients living with end-stage renal disease (ESRD) or advanced
                chronic kidney disease (CKD) need reliable, consistent access to
                dialysis treatment. Our Coachella clinic offers in-center
                <a href="https://www.kidneyinstitutes.com/dialysis-services">
                  hemodialysis services
                </a>
                , with trained technicians and nursing staff present at every
                session. Because we&apos;re centrally located near Coachella
                City Hall on 6th Street, our patients spend less time commuting
                and more time recovering. The clinic is Medicare-certified and
                has maintained a quality rating, a reflection of the clinical
                standards our team upholds every single treatment day.
              </p>
              <ButtonGhost href="/dialysis-services" text="Learn More" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-14 items-center">
            <div className="order-2 md:order-1">
              <h2>
                Your Kidney Doctor in Coachella — Nephrology Care Close to Home
              </h2>
              <p>
                Finding a nephrologist who is both highly qualified and
                genuinely accessible is not always easy. Our clinic puts
                board-eligible kidney specialists within reach for residents of
                Coachella, Mecca, Thermal, and surrounding communities who would
                otherwise need to travel to Indio or Rancho Mirage for
                specialist care.
              </p>
              <p>
                Our nephrologists diagnose and manage the full spectrum of
                kidney conditions, from hypertension-related kidney damage to
                end-stage renal disease requiring dialysis, and work alongside
                you to slow progression and protect your remaining kidney
                function.
              </p>
              <ButtonGhost href="/nephrology" text="Learn More" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Nephrologist meeting with a kidney patient at Coachella Kidney Institute"
              />
            </div>
          </div>
        </div>
      </section>

      <ValueProps
        content={[
          {
            heading: "Expert Care",
            text: "Our Coachella nephrologists bring years of specialist experience — and take the time to explain your condition and your options clearly.",
          },
          {
            heading: "Friendly & Supportive Specialists",
            text: "Our Coachella team believes that how you're treated between appointments matters too, so we make every visit feel a little less like a clinic and a little more like home.",
          },
          {
            heading: "Convenient Locations",
            text: "Coachella residents shouldn't have to travel across the valley for specialist care. We're here in your community, steps from City Hall.",
          },
        ]}
      />
      <Testimonials />
      <Resources />
      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Coachella Kidney Institute.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Coachella Kidney Institute.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Locations/coachella-hero.jpg" }) {
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
