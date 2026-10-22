import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Background from "../components/Background/Background";
import Testimonials from "../components/Repeating/Testimonials";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import Resources from "../components/Repeating/Resources";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonGhost from "../components/Button/ButtonGhost";

const Page = ({ data }) => {
  //const [modalTabIndex, setModalTabIndex] = useState(0);

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Kidney Institute of the Desert | Nephrology | Dialysis"
        description="Looking for a top Indian Wells dialysis clinic & nephrologists? At the Kidney Institutes, we specialize in the diagnosis and treatment of kidney disease."
        canonical="https://www.kidneyinstitutes.com/"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.kidneyinstitutes.com/#webpage",
              url: "https://www.kidneyinstitutes.com/",
              name: "Kidney Institute of the Desert | Nephrology & Dialysis in the Coachella Valley",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              about: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
              inLanguage: "en-US",
            },
            {
              "@type": "MedicalBusiness",
              "@id": "https://www.kidneyinstitutes.com/#organization",
              name: "Kidney Institute of the Desert",
              alternateName: ["Kidney Institutes", "Kidney Institute"],
              url: "https://www.kidneyinstitutes.com/",
              description:
                "Expert kidney care serving the Coachella Valley since 1987: nephrology, hemodialysis, peritoneal dialysis, kidney nutrition planning and travel dialysis support.",
              foundingDate: "1987",
              logo: {
                "@id": "https://www.kidneyinstitutes.com/#logo",
              },
              image: {
                "@id": "https://www.kidneyinstitutes.com/#logo",
              },
              telephone: "+1-760-360-4433",
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
              medicalSpecialty: "https://schema.org/Nephrologic",
              areaServed: [
                {
                  "@type": "City",
                  name: "Indio",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Bermuda Dunes",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Indian Wells",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Thermal",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Coachella",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Mecca",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "La Quinta",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Palm Desert",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Rancho Mirage",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Cathedral City",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Palm Springs",
                  containedInPlace: { "@type": "State", name: "California" },
                },
                {
                  "@type": "City",
                  name: "Thousand Palms",
                  containedInPlace: { "@type": "State", name: "California" },
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-760-360-4433",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/Kidney-Institute-of-the-Desert-134446316605496/",
                "https://www.linkedin.com/company/kidney/",
                "https://twitter.com/KidneyInsDesert",
                "https://www.google.com/maps/place/?q=place_id:ChIJ_dCnUiT42oARztBNRh8_uAo",
              ],
              subOrganization: [
                {
                  "@id": "https://www.kidneyinstitutes.com/#location-indio",
                },
                {
                  "@id": "https://www.kidneyinstitutes.com/#location-coachella",
                },
                {
                  "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
                },
                {
                  "@id":
                    "https://www.kidneyinstitutes.com/#location-rancho-mirage",
                },
                {
                  "@id":
                    "https://www.kidneyinstitutes.com/#location-nephrology-indio",
                },
                {
                  "@id":
                    "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
                },
              ],
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-indio",
              name: "Kidney Institute of the Desert - Indio",
              url: "https://www.kidneyinstitutes.com/indio-kidney-institute",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-coachella",
              name: "Coachella Kidney Institute",
              url: "https://www.kidneyinstitutes.com/coachella-kidney-institute",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-la-quinta",
              name: "La Quinta Kidney Center",
              url: "https://www.kidneyinstitutes.com/la-quinta-kidney-center",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "MedicalClinic",
              "@id": "https://www.kidneyinstitutes.com/#location-rancho-mirage",
              name: "Kidney Institute at Eisenhower Medical Center",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "MedicalClinic",
              "@id":
                "https://www.kidneyinstitutes.com/#location-nephrology-indio",
              name: "Coachella Valley Nephrology - Indio",
              url: "https://www.kidneyinstitutes.com/indio-coachella-valley-nephrology",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "MedicalClinic",
              "@id":
                "https://www.kidneyinstitutes.com/#location-nephrology-la-quinta",
              name: "Coachella Valley Nephrology - La Quinta",
              url: "https://www.kidneyinstitutes.com/rancho-mirage-coachella-valley-nephrology",
              parentOrganization: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://www.kidneyinstitutes.com/#website",
              url: "https://www.kidneyinstitutes.com/",
              name: "Kidney Institute of the Desert",
              publisher: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
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
        mobileRemoveBackground={true}
        padding="pt-4 md:pt-36 md:pb-56"
        className="mb-8 md:mb-14"
        altText="Serene desert scenery with water, palm trees, and mountains reflecting patient-centered kidney care"
      >
        <div className="max-w-2xl">
          <p className="font-heading text-secondary-900 md:text-white text-mobile-7xl md:text-7xl font-extrabold mb-4 md:mb-6">
            Expert Desert Dialysis & Kidney Care. Serving the Desert Cities
            Since 1987.
          </p>
          <p className="text-xl md:text-white font-semibold mb-7">
            Top physicians and specialists providing{" "}
            <a
              href="https://www.kidneyinstitutes.com/dialysis-services"
              className="underline"
            >
              desert dialysis
            </a>{" "}
            and nephrology care across the{" "}
            <a
              href="https://www.kidneyinstitutes.com/locations"
              className="underline"
            >
              desert cities
            </a>{" "}
            of Indio, Rancho Mirage, Coachella and La Quinta, with four dialysis
            clinics and two nephrology locations.
          </p>

          <ButtonSolid
            modal="modal-contact"
            icon="fas fa-map-marker-alt"
            text="Find a Location"
          />
        </div>
      </Background>

      <div className="relative md:hidden mb-14">
        <GatsbyImage image={data.heroMobile.childImageSharp.gatsbyImageData} />
        <div className="absolute bottom-0 right-0 w-3/4">
          <GatsbyImage image={data.doctor.childImageSharp.gatsbyImageData} />
        </div>
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="md:text-center md:max-w-[800px] md:mx-auto mb-20 md:mb-32">
            <div className="hidden md:block">
              <img
                src={data.introVector.publicURL}
                alt="Heart icon"
                width="80"
                className="mb-6 mx-auto"
              />
            </div>
            <h1>
              Top Desert Dialysis Clinics & Nephrologists in the Coachella
              Valley Desert Cities
            </h1>
            <p>
              At Kidney Institute of the Desert, we’re a team of friendly kidney
              doctors and dialysis clinic nurses with years of experience
              providing{" "}
              <a
                href="https://www.kidneyinstitutes.com/dialysis-services"
                className="font-bold text-[#162d6d]"
              >
                desert dialysis
              </a>{" "}
              and{" "}
              <a
                href="https://www.kidneyinstitutes.com/nephrology"
                className="font-bold text-[#162d6d]"
              >
                nephrology care
              </a>{" "}
              to patients in the desert cities of{" "}
              <a
                href="https://www.kidneyinstitutes.com/indio-kidney-institute"
                className="font-bold text-[#162d6d]"
              >
                Indio
              </a>
              ,{" "}
              <a
                href="https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute"
                className="font-bold text-[#162d6d]"
              >
                Rancho Mirage
              </a>
              ,{" "}
              <a
                href="https://www.kidneyinstitutes.com/coachella-kidney-institute"
                className="font-bold text-[#162d6d]"
              >
                Coachella
              </a>{" "}
              and{" "}
              <a
                href="https://www.kidneyinstitutes.com/la-quinta-kidney-center"
                className="font-bold text-[#162d6d]"
              >
                La Quinta
              </a>
              . Our goal is to help educate our patients about their kidney care
              and support them with treatments that are as comfortable and
              stress-free as possible.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 items-center mb-20 md:mb-32">
            <div className="order-2 md:order-1">
              <h2>Easy Access to Dialysis Services</h2>
              <p>
                Our number one priority is a patient’s health and comfort,
                whether their treatment involves hemodialysis or peritoneal
                dialysis. Our kidney specialists provide expert, supportive
                services for those who are living with kidney disease. And
                you’ll find our{" "}
                <a
                  href="https://www.kidneyinstitutes.com/locations"
                  className="font-bold text-[#162d6d]"
                >
                  desert city dialysis clinics
                </a>{" "}
                at four convenient locations, so you can get treatment close to
                home.
              </p>
              <ButtonGhost
                href="/dialysis-services"
                text="Explore Our Dialysis Services"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.dialysisServices.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Patient receiving supportive dialysis care from nephrology team at local kidney clinic"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-y-6 md:gap-x-10 lg:gap-x-20 items-center">
            <div>
              <GatsbyImage
                image={data.nephrologyExperts.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Medical demonstration of kidney anatomy by nephrology expert at Kidney Institutes"
              />
            </div>
            <div>
              <h2>Top Nephrology Experts By Your Side</h2>
              <p>
                At Kidney Institute of the Desert, our physicians have spent
                years building their expertise and knowledge in kidney care both
                here and around the world. Our nephrologists specialize in
                chronic kidney disease, kidney failure, kidney transplants,
                kidney stone prevention, and more.
              </p>
              <ButtonGhost
                href="/nephrology"
                text="Learn More About Our Nephrology Care"
              />
            </div>
          </div>
        </div>
      </section>

      <AreasWeServe />
      <ValueProps
        content={[
          {},
          {},
          {
            text: (
              <>
                We have{" "}
                <a
                  href="https://www.kidneyinstitutes.com/locations"
                  className="font-bold text-[#162d6d]"
                >
                  six kidney and dialysis clinics
                </a>{" "}
                serving the desert cities of Indio, Rancho Mirage, Coachella,
                and La Quinta.
              </>
            ),
          },
        ]}
      />
      <Resources />
      <Testimonials />
      <About />
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
    heroDesktop: file(relativePath: { eq: "home/1.0-hero-whole.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0-hero-curve-mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    doctor: file(relativePath: { eq: "home/hero-doctor.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
      }
    }
    introVector: file(relativePath: { eq: "home/intro.svg" }) {
      publicURL
    }
    nephrologyExperts: file(
      relativePath: { eq: "home/nephrology-experts.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    dialysisServices: file(relativePath: { eq: "home/dialysis-services.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
