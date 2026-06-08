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
                  <img
                    src={data.mapPin.publicURL}
                    alt="Map pin icon"
                    className="mr-3"
                  />
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
                  <img
                    src={data.clock.publicURL}
                    alt="Clock icon"
                    className="mr-3"
                  />
                  <span>Monday, Wednesday, Friday 5:30 a.m. - 6:00 p.m.</span>
                </li>
                <li className="flex items-center text-secondary-900 font-semibold text-sm">
                  <img
                    src={data.phone.publicURL}
                    alt="Phone icon"
                    className="mr-3"
                  />
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
