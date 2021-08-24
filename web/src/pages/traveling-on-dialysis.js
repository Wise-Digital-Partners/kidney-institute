import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const content = {
    dialysisClinics: [
      {
        image: data.indio.childImageSharp.gatsbyImageData,
        heading: "Kidney Institute of the Desert Indio",
        link: "/indio-kidney-institute",
      },
      {
        image: data.laQuinta.childImageSharp.gatsbyImageData,
        heading: "La Quinta Kidney Center",
        link: "/la-quinta-kidney-center",
      },
      {
        image: data.eisenhower.childImageSharp.gatsbyImageData,
        heading: "Kidney Institute at Eisenhower Medical Center",
        link: "/rancho-mirage-kidney-institute",
      },
      {
        image: data.coachella.childImageSharp.gatsbyImageData,
        heading: "Coachella Kidney Institute",
        link: "/coachella-kidney-institute",
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Traveling on Dialysis | Kidney Institute of the Desert"
        description="Kidney failure doesn’t mean your travel days are over. Traveling on dialysis can be done safely, and we can help you plan your treatments."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-4 md:pt-24 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Traveling on Dialysis? Yes, You Can Go</h1>
              <p className="mb-0">
                Kidney failure doesn’t mean your travel days are over. There are
                options that make it possible for you to travel safely while
                continuing your treatments.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-32">
        <div className="container">
          <div className="bg-[#A68098] bg-opacity-20 px-6 py-20 rounded-xl md:rounded-3xl">
            <header className="max-w-3xl mx-auto text-center">
              <h2>Travel Options for Our Patients</h2>
              <p>
                Whether you do your dialysis at a center or in your home, we can
                help you find clinics at your travel destination. Even if you’re
                a home dialysis patient, it’s important to know where clinics
                are located on the off chance you forget something or need help
                monitoring your results.
              </p>
              <ButtonSolid modal="modal-contact" text="We’ll Help You Plan" />
            </header>
          </div>
        </div>
      </section>

      <section className="mb-18 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
            <h2 className="font-body text-mobile-4xl md:text-4xl">
              Just Visiting? Stop By One of Our Clinics
            </h2>
            <p>
              If you plan on traveling to Palm Springs or the surrounding
              Coachella Valley, we can arrange dialysis at one of our clinics
              while you’re in town:
            </p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-2.5 md:gap-x-6">
            {content.dialysisClinics.map((content, i) => {
              return (
                <AniLink
                  fade
                  to={content.link}
                  key={i}
                  className="group relative"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                    <div className="bg-[#A68098] rounded border border-white text-center text-white text-xs font-semibold px-2 py-1 absolute top-4 right-4">
                      Dialysis
                    </div>
                  </div>
                  <p className="text-sm md:text-base font-heading font-semibold text-secondary-900 mb-0">
                    {content.heading}
                  </p>
                </AniLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header>
            <h2 className="font-body text-mobile-4xl md:text-4xl mb-10 md:mb-16">
              Additional Resources
            </h2>
          </header>
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <AniLink fade to="/resources" className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <GatsbyImage
                  image={data.resources.childImageSharp.gatsbyImageData}
                  width="560"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>
              <h3 className="text-3xl font-semibold">
                Easy Access to Dialysis Services
              </h3>
              <p className="mb-0">
                Our kidney specialists provide expert, supportive dialysis
                services. You’ll find our clinics at four convenient locations.
              </p>
            </AniLink>
            <AniLink
              fade
              to="/kidney-nutrition-dialysis-diet"
              className="group"
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <GatsbyImage
                  image={data.diet.childImageSharp.gatsbyImageData}
                  width="560"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>

              <h3 className="text-3xl font-semibold">
                Your Guide to a Kidney-Friendly Diet
              </h3>
              <p className="mb-0">
                What foods are good for your kidneys? What do you need to avoid?
                Visit our nutritionist guide.
              </p>
            </AniLink>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    hero: file(relativePath: { eq: "Resources/Travel/1.0-travel-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    resources: file(
      relativePath: { eq: "Resources/Patient Forms/1.0-forms-hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    diet: file(
      relativePath: { eq: "Resources/Nutrition/1.0-hero-nutrition.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    indio: file(
      relativePath: {
        eq: "repeating/locations/Kidney Institute of the Desert Indio.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    laQuinta: file(
      relativePath: { eq: "repeating/locations/La Quinta Kidney Center.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    eisenhower: file(
      relativePath: {
        eq: "repeating/locations/Kidney Institute at Eisenhower Medical Center.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    coachella: file(
      relativePath: { eq: "repeating/locations/Coachella Kidney Institute.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
  }
`;
export default Page;
