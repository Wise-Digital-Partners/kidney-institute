import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
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

  //const [modalTabIndex, setModalTabIndex] = useState(0);

  const content = {
    nephrologyOffices: [
      {
        image: data.indioNephrology.childImageSharp.gatsbyImageData,
        heading: "Coachella Valley Nephrology Indio",
        link: "/indio-coachella-valley-nephrology",
      },
      {
        image: data.ranchoMirage.childImageSharp.gatsbyImageData,
        heading: "Coachella Valley Nephrology La Quinta",
        link: "/rancho-mirage-coachella-valley-nephrology",
      },
    ],
    team: [
      {
        image: data.narenChandrashekar.childImageSharp.gatsbyImageData,
        name: "Dr. Naren Chandrashekar",
        bio: (
          <>
            <p>
              Dr. Naren Chandrashekar has been providing care to patients in the
              Coachella Valley since 2002. He serves as medical director of the
              La Quinta Kidney Center and the Kidney Institute at Eisenhower
              Medical Center.{" "}
            </p>

            <p>
              He’s an active member of both Eisenhower Medical Center and John
              F. Kennedy Memorial Hospital. Dr. Chandrashekar has also served in
              multiple physician leadership roles on the Medical Executive
              Committee at Eisenhower Medical Center and as the center’s former
              Chief of Nephrology. He’s board-certified by the American Board of
              Internal Medicine in Nephrology.
            </p>

            <p>
              For his medical education, Dr. Chandrashekar first attended UCLA,
              where he earned his Bachelor of Science degree in Cybernetics.
              Then he moved to Boston, MA, where he attended medical school at
              Tufts University School of Medicine. Finally, he trained at the
              University of Texas, Southwestern Medical Center / Parkland
              Memorial Hospital, where he completed his residency and fellowship
              in Internal Medicine and Nephrology. He also served as the Chief
              Fellow in the hospital’s Nephrology Department.
            </p>

            <p>
              In 2002, Dr. Chandrashekar returned to the Coachella Valley, where
              he provides the highest quality care in his consultative practice
              at Coachella Valley Nephrology. His expertise in nephrology
              includes chronic kidney disease, kidney failure, kidney
              transplants, hypertension, and assisting patients with kidney
              stone prevention.
            </p>

            <p>
              Dr. Chandrashekar has been a member of the Medical Executive
              Committee at Eisenhower Health since 2010. Beginning in January
              2022, he will be serving as the president of the medical staff.
            </p>

            <p>
              Dr. Chandrashekar grew up around the world. He lived in India,
              Ireland, and Canada before settling in the Coachella Valley. He
              enjoys helping his wife raise their two children, exercising,
              training in Brazilian jiu-jitsu, and skiing.
            </p>
          </>
        ),
      },
      {
        image: data.jamburChandrashekar.childImageSharp.gatsbyImageData,
        name: "Dr. Jambur Chandrashekar",
        bio: (
          <>
            <p>
              Dr. Jambur Chandrashekar began his medical practice in the
              Coachella Valley in 1979. He is one of the founding members of the
              Kidney Institute of the Desert in Indio, Kidney Institute at
              Eisenhower Medical Center, La Quinta Kidney Center, and the
              Coachella Kidney Institute.{" "}
            </p>

            <p>
              He’s been on the medical staff of Eisenhower Medical Center and
              John F. Kennedy Memorial Hospital since he began his practice. In
              addition, he has held various medical staff leadership positions
              at John F. Kennedy Memorial Hospital, including Chief of Medical
              Staff and Chairman of the Governing Board.
            </p>

            <p>
              Dr. J. Chandrashekar received his medical degree in India and
              subsequently underwent further internal medicine and nephrology
              training in Ireland and Canada. He had the privilege of training
              under Dr. Henry Gault, a pioneer in nephrology at the Memorial
              University of Newfoundland Medical Center. He’s board-certified in
              internal medicine and nephrology from the Royal College of
              Physicians of Canada and the American Board of Internal Medicine.
              He’s also a Fellow of the Royal College of Physicians of Canada
              and a Fellow of the American College of Physicians.
            </p>

            <p>
              In 2002, Dr. J. Chandrashekar’s son, Dr. Naren Chandrashekar,
              partnered to form Coachella Valley Nephrology, where he provides
              consultative care for chronic kidney disease, kidney failure,
              kidney transplants, and hypertension management.
            </p>
          </>
        ),
      },
      {
        image: data.khurramMumtaz.childImageSharp.gatsbyImageData,
        name: "Dr. Khurram Mumtaz",
        bio: (
          <>
            <p>
              Dr. Mumtaz joined Coachella Valley Nephrology in July 2018. He
              started his clinical nephrology career as a consultant
              nephrologist in upstate New York and was a medical director for
              hemodialysis and peritoneal dialysis programs. Later, he practiced
              internal medicine and nephrology in Virginia, North Carolina,
              Idaho, Washington state, and Sioux Falls, South Dakota.
            </p>

            <p>
              Dr. Mumtaz grew up in Africa and the Middle East and attended
              Rawalpindi Medical College - the University of Punjab in Pakistan.
              He received internal medicine residency training at Mercy Catholic
              Medical Center – Drexel University College of Medicine in
              Philadelphia, Pennsylvania. He also served as a chief medical
              resident, followed by nephrology fellowship training at Albert
              Einstein Medical Center Philadelphia, Pennsylvania.
            </p>

            <p>
              Dr. Mumtaz's practice includes all aspects of clinical nephrology
              - acute kidney failure, chronic kidney disease, hypertension,
              glomerular diseases, and kidney transplants.
            </p>
          </>
        ),
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Nephrology | Kidney Institute of the Desert"
        description="Kidney Institute's nephrologists are committed to compassionate, supportive kidney care. Our goal is to make you comfortable and ensure you're stress-free."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-gray-100 pt-10 md:pt-18 pb-14 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <img
                src={data.cvLogo.publicURL}
                alt="Coachella Valley Nephrology logo"
                className="mb-4 md:mb-6"
              />
              <h1>Your Nephrology Experts</h1>
              <p>
                Coachella Valley Nephrology is committed to compassionate,
                supportive care. The kidney health of every patient we see is
                important to us, and we want the care we provide to be as
                comfortable and stress-free as possible. We’re experts in kidney
                health, the treatment of kidney diseases, blood pressure
                management, and electrolyte disorders. Also, we serve as the
                medical directors and take care of patients at the Kidney
                Institutes.
              </p>
              <ButtonSolid
                modal="modal-contact"
                icon="fas fa-map-marker-alt"
                text="Find a Location"
              />
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.nephrology.childImageSharp.gatsbyImageData}
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
                  title="Nephrologists"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-2"}
                  title="Kidney Function"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-3"}
                  title="When to Seek Help"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-3"}
                  title="Conditions We Treat"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-5"}
                  title="Procedures"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
            </ScrollNavigation>

            <ScrollContent className="lg:col-end-13 lg:col-span-8">
              <StyledContent>
                <div id="anchor-1" className="mb-14 lg:mb-12">
                  <h2>Nephrologist = Kidney Specialist</h2>
                  <p>
                    It’s a common question we get—what is nephrology? It’s an
                    internal medicine specialty focused on the functions of the
                    kidneys. Doctors who specialize in nephrology—like our team
                    here at Coachella Valley Nephrology—are experts in kidney
                    health, the treatment of kidney diseases, blood pressure
                    management, and electrolyte disorders. A nephrologist is
                    different from a urologist who specializes in the urinary
                    tract system including the bladder, prostate, and tumors of
                    the kidneys.
                  </p>
                </div>

                <div id="anchor-2" className="mb-14 lg:mb-12">
                  <h2>Why Your Kidneys Are Vital</h2>
                  <p>
                    Kidneys cleanse the blood of toxins. When they don't work
                    properly, those toxins, plus excess fluids, can build up in
                    the body. As a result, a person experiencing kidney failure
                    may have high blood pressure, headaches that don't seem to
                    go away, swelling in certain areas of their body, and feel
                    extremely tired. Kidneys perform vital functions. These
                    functions include:
                  </p>

                  <ul className="list-disc pl-6 mb-6">
                    <li>Removal of waste products and drugs from the body</li>
                    <li>
                      Regulating the body’s salt, potassium, and acid content
                    </li>
                    <li>Releasing hormones that regulate blood pressure</li>
                    <li>
                      Producing hormones that promote strong, healthy bones
                    </li>
                    <li>Controlling the production of red blood cells</li>
                  </ul>
                </div>

                <div id="anchor-3" className="mb-14 lg:mb-12">
                  <h2>When Should You See a Nephrologist?</h2>
                  <p>
                    Most people don't go to a nephrologist without a referral
                    from their primary care doctor. Typically, seeing a
                    nephrologist means that you have kidney-related symptoms
                    from an unknown cause or that you have health issues only a
                    renal specialist knows how to treat. When may your primary
                    care provider refer you to a nephrologist? If you have
                    symptoms that indicate a possible problem with your kidneys,
                    or for any of the following reasons:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>
                      A large amount of blood or protein is found in your urine.
                    </li>
                    <li>You have recurring kidney stones.</li>
                    <li>
                      You have high blood pressure that isn't improving even
                      though you're taking medication.
                    </li>
                    <li>
                      You have a medical condition that increases your risk of
                      kidney problems (such as diabetes or a heart condition).
                    </li>
                  </ul>
                </div>

                <div id="anchor-4" className="mb-14 lg:mb-12">
                  <h2>Conditions a Nephrologist Treats</h2>
                  <p>
                    Kidneys perform vital functions, and a nephrologist can
                    treat you for conditions such as:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Blood or Protein In Your Urine</li>
                    <li>Recurrent Kidney Stones</li>
                    <li>Chronic Kidney Disease</li>
                    <li>Kidney Failure</li>
                    <li>Electrolyte and Mineral Imbalances</li>
                    <li>Kidney Transplant Follow-Up Care</li>
                  </ul>
                </div>

                <div id="anchor-5">
                  <h2>What Procedures a Nephrologist Performs</h2>
                  <p>
                    Nephrologists help detect and diagnose kidney problems by
                    performing blood and urine tests, imaging testing (i.e.,
                    ultrasounds, CT scans, and X-rays), and biopsies. They're
                    also involved in patient care and treatment, including
                    hemodialysis, and are a vital member of a kidney transplant
                    team.
                  </p>
                </div>
              </StyledContent>
            </ScrollContent>
          </ScrollWrapper>
        </div>
      </section>

      <section className="md:mb-32 hidden md:block">
        <div className="container">
          <img src={data.gradientBorder.publicURL} alt="Gradient border" />
        </div>
      </section>

      <section className="mb-18 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Our Nephrology Offices</h2>
          </header>

          <div className="grid md:grid-cols-2 gap-y-5 gap-x-2.5 md:gap-x-6">
            {content.nephrologyOffices.map((content, i) => {
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
                    <div className="bg-[#F2A679] rounded border border-white text-center text-white text-xs font-semibold px-2 py-1 absolute top-4 right-4">
                      Nephrology
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

      <section className="mb-24 md:mb-40">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Our Treatment Team</h2>
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
                  <p className="font-heading text-xl font-semibold text-secondary-900 mb-0">
                    {content.name}
                  </p>
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
      relativePath: { eq: "open-graph/facebook/Nephrology.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Nephrology.jpg" }
    ) {
      publicURL
    }
    gradientBorder: file(relativePath: { eq: "global/gradient-border.svg" }) {
      publicURL
    }
    nephrology: file(relativePath: { eq: "nephrology/1.0-hero-desktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 625)
      }
    }
    cvLogo: file(
      relativePath: { eq: "nephrology/1.1 CV Nephrology Logo.svg" }
    ) {
      publicURL
    }
    indioNephrology: file(
      relativePath: {
        eq: "repeating/locations/Coachella Valley Nephrology Indio.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    ranchoMirage: file(
      relativePath: {
        eq: "repeating/locations/Coachella Valley Nephrology La Quinta.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 564)
      }
    }
    narenChandrashekar: file(
      relativePath: { eq: "nephrology/Dr. Naren Chandrashekar.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
    jamburChandrashekar: file(
      relativePath: { eq: "nephrology/Dr. Jambur Chandrashekar.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
    khurramMumtaz: file(
      relativePath: { eq: "nephrology/Dr. Khurram Mumtaz.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 738)
      }
    }
  }
`;
export default Page;
