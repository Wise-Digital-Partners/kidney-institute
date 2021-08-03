import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
// import tw from "twin.macro";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Testimonials from "../components/Repeating/Testimonials";
import Resources from "../components/Repeating/Resources";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ScrollWrapper from "../components/Scroll/ScrollWrapper";
import ScrollNavigation from "../components/Scroll/ScrollNavigation";
import ScrollContent from "../components/Scroll/ScrollContent";

const StyledContent = styled.div``;

const Page = ({ data }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  const [slideIndex, setSlideIndex] = useState(0);

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
    team: [
      {
        image: data.yvonneHamilton.childImageSharp.gatsbyImageData,
        name: "Yvonne Hamilton",
        location: "La Quinta Kidney Center",
        title: "Title Goes Here",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fermentum et sollicitudin ac orci.
            </p>
            <p>
              Eu mi bibendum neque egestas congue quisque egestas. Suspendisse
              faucibus interdum posuere lorem. Dolor sit amet consectetur
              adipiscing.
            </p>
            <p>
              Nibh sit amet commodo nulla facilisi. Eget magna fermentum iaculis
              eu. Fermentum odio eu feugiat pretium nibh ipsum consequat. Elit
              at imperdiet dui accumsan sit amet nulla facilisi.
            </p>
            <p>
              Integer malesuada nunc vel risus commodo viverra maecenas
              accumsan. In ante metus dictum at. Id eu nisl nunc mi ipsum
              faucibus vitae. Ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at augue eget.
            </p>
            <p>
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Mauris vitae ultricies leo integer malesuada nunc vel. Diam
              phasellus vestibulum lorem sed risus ultricies tristique nulla
              aliquet. Sit amet aliquam id diam.
            </p>
          </>
        ),
      },
      {
        image: data.mariluFuentes.childImageSharp.gatsbyImageData,
        name: "Marilu Fuentes",
        location: "Kidney Institute of the Desert Indio",
        title: "Title Goes Here",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fermentum et sollicitudin ac orci.
            </p>
            <p>
              Eu mi bibendum neque egestas congue quisque egestas. Suspendisse
              faucibus interdum posuere lorem. Dolor sit amet consectetur
              adipiscing.
            </p>
            <p>
              Nibh sit amet commodo nulla facilisi. Eget magna fermentum iaculis
              eu. Fermentum odio eu feugiat pretium nibh ipsum consequat. Elit
              at imperdiet dui accumsan sit amet nulla facilisi.
            </p>
            <p>
              Integer malesuada nunc vel risus commodo viverra maecenas
              accumsan. In ante metus dictum at. Id eu nisl nunc mi ipsum
              faucibus vitae. Ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at augue eget.
            </p>
            <p>
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Mauris vitae ultricies leo integer malesuada nunc vel. Diam
              phasellus vestibulum lorem sed risus ultricies tristique nulla
              aliquet. Sit amet aliquam id diam.
            </p>
          </>
        ),
      },
      {
        image: data.donnaDeLaO.childImageSharp.gatsbyImageData,
        name: "Donna De La O",
        location: "Kidney Institute at EMC & Coachella Kidney Institute",
        title: "Title Goes Here",
        bio: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Fermentum et sollicitudin ac orci.
            </p>
            <p>
              Eu mi bibendum neque egestas congue quisque egestas. Suspendisse
              faucibus interdum posuere lorem. Dolor sit amet consectetur
              adipiscing.
            </p>
            <p>
              Nibh sit amet commodo nulla facilisi. Eget magna fermentum iaculis
              eu. Fermentum odio eu feugiat pretium nibh ipsum consequat. Elit
              at imperdiet dui accumsan sit amet nulla facilisi.
            </p>
            <p>
              Integer malesuada nunc vel risus commodo viverra maecenas
              accumsan. In ante metus dictum at. Id eu nisl nunc mi ipsum
              faucibus vitae. Ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at augue eget.
            </p>
            <p>
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Mauris vitae ultricies leo integer malesuada nunc vel. Diam
              phasellus vestibulum lorem sed risus ultricies tristique nulla
              aliquet. Sit amet aliquam id diam.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Dialysis Services | Kidney Institute of the Desert"
        description="Our nurses, dietitians, social workers, and nephrologists work together to provide you with the best dialysis services at the Kidney Institutes."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-gray-100 pt-10 md:pt-18 pb-20 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Dialysis Services</h1>
              <p>
                We offer a complete range of services for your dialysis needs.
                At the Kidney Institutes, our dialysis nurses, dietitians,
                social workers, and nephrologists work together to provide the
                best treatment possible.
              </p>
              <ButtonSolid modal="modal-contact" text="Find a Location" />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.dialysis.childImageSharp.gatsbyImageData}
                width="625"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mb-16 md:mb-24">
        <div className="absolute top-0 w-full"></div>
        <div className="relative container">
          <ScrollWrapper className="grid lg:grid-cols-12 gap-y-16 lg:gap-x-20">
            <ScrollNavigation className="lg:col-start-1 lg:col-span-4 hidden md:block">
              <li>
                <AnchorLink
                  to={url + "#anchor-1"}
                  title="Dialysis Overview"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-2"}
                  title="Hemodialysis"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-3"}
                  title="Peritoneal Dialysis"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
            </ScrollNavigation>

            <ScrollContent className="lg:col-end-13 lg:col-span-8">
              <StyledContent>
                <div id="anchor-1" className="mb-14 lg:mb-12">
                  <h2 className="mb-12">Dialysis Basics</h2>

                  <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                    Why It’s Needed
                  </h3>
                  <p>
                    Dialysis helps remove excess fluid and waste from the
                    bloodstream, keeping a body in balance when the kidneys can
                    no longer function. It also helps the body regulate safe
                    blood pressure and ensures the appropriate levels of
                    chemicals are present in the body's bloodstream.
                  </p>
                  <p>
                    Aiding patients who require dialysis services—and making it
                    a comfortable and stress-free treatment—is one of the Kidney
                    Institute's primary goals.
                  </p>
                </div>

                <div id="anchor-2" className="mb-14 lg:mb-12">
                  <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                    How Dialysis Works
                  </h3>
                  <p>
                    There are two types of dialysis treatments, both of which
                    are available at the Kidney Institute.
                  </p>
                  <p>
                    Hemodialysis involves a dialysis machine pumping blood out
                    of the body through an artificial kidney membrane.
                  </p>
                  <p>
                    With peritoneal dialysis, a plastic tube is placed in a
                    patient's abdomen. Then a sterile cleansing fluid, along
                    with the internal lining in the body called the peritoneum,
                    works together to clean the blood.
                  </p>
                </div>

                <div id="anchor-3">
                  <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                    The Benefits of Dialysis
                  </h3>
                  <p>
                    Although dialysis helps alleviate the symptoms of fatigue
                    and weakness due to kidney failure, the primary benefit of
                    the treatment is extending a person's life.
                  </p>
                  <p>
                    That's what makes the work we do at the Kidney Institute so
                    important to us. Our physicians and nurses want to make sure
                    you get the best healthcare possible with a comprehensive,
                    therapeutic care plan.
                  </p>
                </div>
              </StyledContent>
            </ScrollContent>
          </ScrollWrapper>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <img src={data.gradientBorder.publicURL} alt="Gradient border" />
        </div>
      </section>

      <section className="mb-18 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Our Dialysis Clinics</h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-6">
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
                  <p className="font-heading font-semibold text-secondary-900 mb-0">
                    {content.heading}
                  </p>
                </AniLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mb-24 md:mb-40">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Meet Our Head Nurses</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10">
            {content.team.map((content, i) => {
              return (
                <button
                  aria-label="Modal trigger"
                  data-modal-open="modal-team-members"
                  onClick={() => setSlideIndex(i)}
                  key={i}
                  className="group relative text-left"
                >
                  <div className="rounded-xl overflow-hidden mb-3">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      className="mx-auto w-full transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <p className="font-heading text-xl font-semibold text-secondary-900 mb-1.5">
                    {content.name}
                  </p>
                  <p className="text-sm mb-0">{content.location}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <Resources />
      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} slides={content.team} />
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
    gradientBorder: file(relativePath: { eq: "global/gradient-border.svg" }) {
      publicURL
    }
    dialysis: file(
      relativePath: { eq: "dialysis/Dialysis Services hero desktop.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 625)
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
    yvonneHamilton: file(relativePath: { eq: "dialysis/Yvonne Hamilton.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
    mariluFuentes: file(relativePath: { eq: "dialysis/Marilu Fuentes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
    donnaDeLaO: file(relativePath: { eq: "dialysis/Donna De La O.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
  }
`;
export default Page;
