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
import FAQs from "../components/Repeating/FAQs";
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
    faqs: [
      {
        question: "Is a nephrologist the same as a urologist?",
        answer:
          "No. A nephrologist treats kidney disease, hypertension, and electrolyte disorders medically. A urologist handles the surgical and structural side of the urinary tract. If you were referred for declining kidney function or abnormal labs, you want a nephrologist.",
      },
      {
        question: "Why does it matter that the medical director is on-site?",
        answer:
          "An on-site medical director means the physician overseeing your clinic's care is physically present, not managing your case from another market. At Kidney Institute of the Desert, our nephrologists are those on-site directors, so questions and adjustments happen in person.",
      },
      {
        question: "What conditions bring patients to a nephrologist?",
        answer:
          "Most often, chronic kidney disease, hard-to-control hypertension, electrolyte imbalances, or lab results (like elevated creatinine or protein in the urine) that a primary care provider has flagged for specialist review.",
      },
      {
        question: "Do I need a referral to see a nephrologist here?",
        answer:
          "Most patients arrive through a referring physician, but our team can help you understand your options if you have concerns about your kidney health and are not yet connected with a nephrologist.",
      },
      {
        question:
          "What happens if my kidney disease progresses toward dialysis?",
        answer:
          "Your nephrologist plans with you. Because we also provide dialysis services directly, that transition happens within the same practice and the same care team you already know.",
      },
    ],
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
        alt: "Dr. Naren Chandrashekar, nephrologist at Coachella Valley Nephrology",
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
              Committee at Eisenhower Health from 2010 through 2025. He has
              served in various offices include the President of the Medical
              Staff from 2022 through 2023.
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
        alt: "Dr. Jambur Chandrashekar, founding nephrologist at Coachella Valley Nephrology",
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
      // {
      //   image: data.khurramMumtaz.childImageSharp.gatsbyImageData,
      //   name: "Dr. Khurram Mumtaz",
      //   bio: (
      //     <>
      //       <p>
      //         Dr. Mumtaz joined Coachella Valley Nephrology in July 2018. He
      //         started his clinical nephrology career as a consultant
      //         nephrologist in upstate New York and was a medical director for
      //         hemodialysis and peritoneal dialysis programs. Later, he practiced
      //         internal medicine and nephrology in Virginia, North Carolina,
      //         Idaho, Washington state, and Sioux Falls, South Dakota.
      //       </p>

      //       <p>
      //         Dr. Mumtaz grew up in Africa and the Middle East and attended
      //         Rawalpindi Medical College - the University of Punjab in Pakistan.
      //         He received internal medicine residency training at Mercy Catholic
      //         Medical Center – Drexel University College of Medicine in
      //         Philadelphia, Pennsylvania. He also served as a chief medical
      //         resident, followed by nephrology fellowship training at Albert
      //         Einstein Medical Center Philadelphia, Pennsylvania.
      //       </p>

      //       <p>
      //         Dr. Mumtaz's practice includes all aspects of clinical nephrology
      //         - acute kidney failure, chronic kidney disease, hypertension,
      //         glomerular diseases, and kidney transplants.
      //       </p>
      //     </>
      //   ),
      // },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Nephrologist in the Coachella Valley | Kidney Institute"
        description="Our nephrologists are on-site medical directors, not remote screens, diagnosing and treating kidney disease, hypertension, and electrolyte disorders daily."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/nephrology"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://www.kidneyinstitutes.com/nephrology#webpage",
              url: "https://www.kidneyinstitutes.com/nephrology",
              name: "Nephrologist in the Coachella Valley | Kidney Institute",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              inLanguage: "en-US",
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/nephrology#primaryimage",
              },
              mainEntity: {
                "@id": "https://www.kidneyinstitutes.com/nephrology#service",
              },
            },
            {
              "@type": "ImageObject",
              "@id": "https://www.kidneyinstitutes.com/nephrology#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/a86407a7f0ac0eba39dae8174344a3c8/11ebd/1.0-hero-desktop.png",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/a86407a7f0ac0eba39dae8174344a3c8/11ebd/1.0-hero-desktop.png",
            },
            {
              "@type": "Service",
              "@id": "https://www.kidneyinstitutes.com/nephrology#service",
              name: "Nephrology Care",
              description:
                "Diagnosis and treatment of kidney disease, blood pressure and electrolyte disorders by Coachella Valley Nephrology physicians.",
              serviceType: "Nephrology",
              url: "https://www.kidneyinstitutes.com/nephrology",
              provider: {
                "@id": "https://www.kidneyinstitutes.com/#organization",
              },
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
                  name: "La Quinta",
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
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.kidneyinstitutes.com/nephrology#faq",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
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
                Kidney disease rarely announces itself. Fatigue, swelling, and
                creeping high blood pressure often build for years before a
                diagnosis, and by the time patients reach us, many are
                frightened and unsure who to trust. At Kidney Institute of the
                Desert, our nephrologists diagnose and manage kidney disease,
                hypertension, and electrolyte disorders as on-site medical
                directors, in the building with you rather than reviewing your
                labs from a screen somewhere else. This is nephrology built on
                worldwide expertise by your side, backed by a team that has
                served the Coachella Valley since 1987.
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
                alt="Coachella Valley Nephrology physician reviewing kidney care with a patient"
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
                  title="What Is Nephrology"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-2"}
                  title="Conditions We Treat"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-3"}
                  title="Independent Difference"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-4"}
                  title="Your First Visit"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
              <li>
                <AnchorLink
                  to={url + "#anchor-5"}
                  title="Support Beyond the Exam"
                  stripHash
                  className="relative font-heading text-secondary-900/50 font-semibold before:absolute before:-bottom-3 before:left-0 lg:before:w-0 lg:before:bg-primary-900 lg:before:h-2 lg:before:transition-all lg:before:duration-500 lg:before:ease-linear no-underline"
                />
              </li>
            </ScrollNavigation>

            <ScrollContent className="lg:col-end-13 lg:col-span-8">
              <StyledContent>
                <div id="anchor-1" className="mb-14 lg:mb-12">
                  <h2>What Is Nephrology, and Why the Distinction Matters</h2>
                  <p>
                    Nephrology is the branch of medicine focused on the kidneys:
                    how they filter waste, regulate blood pressure, and balance
                    the electrolytes your body depends on. A nephrologist is the
                    physician trained to diagnose and manage kidney disease and
                    the conditions that damage kidney function over time, most
                    often hypertension and diabetes.
                  </p>
                  <p>
                    Patients frequently confuse a nephrologist with a urologist,
                    but the two specialties treat different problems. A
                    urologist manages the structural and surgical side of the
                    urinary tract, including the bladder and kidney stones
                    requiring surgery. A nephrologist manages kidney function
                    itself: chronic kidney disease, electrolyte imbalances, and
                    the medical (non-surgical) treatment of hypertension's
                    effect on the kidneys. If your primary care provider has
                    referred you to us for declining kidney function, high
                    creatinine, or protein in your urine, a nephrologist, not a
                    urologist, is the specialist you need.
                  </p>
                </div>

                <div id="anchor-2" className="mb-14 lg:mb-12">
                  <h2>Conditions We Diagnose and Treat</h2>
                  <p>
                    Our nephrologists at{" "}
                    <a
                      href="https://www.kidneyinstitutes.com/"
                      className="font-bold text-[#162d6d]"
                    >
                      Kidney Institute of the Desert
                    </a>
                    , alongside our physician arm, Coachella Valley Nephrology,
                    diagnose and manage:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>
                      <strong>Chronic kidney disease (CKD)</strong>, at every
                      stage, from early detection through advanced-stage
                      management
                    </li>
                    <li>
                      <strong>Hypertension</strong>, including blood pressure
                      that is difficult to control and is affecting kidney
                      function
                    </li>
                    <li>
                      <strong>Electrolyte disorders</strong>, such as imbalances
                      in potassium, sodium, and phosphorus that place stress on
                      the kidneys
                    </li>
                    <li>
                      <strong>Glomerulonephritis and nephrotic syndrome</strong>
                      , inflammatory conditions affecting the kidney's filtering
                      units
                    </li>
                    <li>
                      <strong>Diabetic kidney disease</strong>, the kidney
                      complications that can follow long-term diabetes
                    </li>
                    <li>
                      <strong>Progression toward dialysis</strong>, including
                      the planning and education patients need well before
                      treatment begins
                    </li>
                  </ul>
                  <p>
                    When kidney disease reaches a point where dialysis becomes
                    necessary, our nephrologists coordinate directly with our
                    own dialysis services, so your care team does not change and
                    your medical history does not need to be re-explained to
                    someone new.
                  </p>
                </div>

                <div id="anchor-3" className="mb-14 lg:mb-12">
                  <h2>The Independent Difference: Medical Directors On-Site</h2>
                  <p>
                    National dialysis and nephrology chains often manage
                    patients remotely, with a medical director overseeing
                    multiple facilities and rarely present in person. Kidney
                    Institute of the Desert works differently. Our nephrologists
                    serve as on-site medical directors at our clinics, so the
                    physician responsible for your care is in the building, not
                    managing your case remotely across markets.
                  </p>
                  <p>
                    This is what we mean by worldwide expertise by your side:
                    our physicians bring training and experience recognized well
                    beyond the desert, but they deliver it in person, at one of
                    our six{" "}
                    <a
                      href="https://www.kidneyinstitutes.com/locations"
                      className="font-bold text-[#162d6d]"
                    >
                      dialysis clinics
                    </a>{" "}
                    across the Coachella Valley, as partners in an independent,
                    physician-owned practice. We have served the Greater
                    Coachella Valley since 1987, and that independence is why
                    our nephrologists can build a relationship with you over
                    years, not a single visit.
                  </p>
                </div>

                <div id="anchor-4" className="mb-14 lg:mb-12">
                  <h2>What to Expect at Your First Nephrology Visit</h2>
                  <p>
                    Starting care with a new specialist can feel overwhelming,
                    especially on top of a new diagnosis. Here is what your
                    first visit looks like:
                  </p>
                  <ol className="list-decimal pl-6 mb-6">
                    <li>
                      <strong>We review your referral and history.</strong> Your
                      nephrologist reads through the labs and notes your primary
                      care provider or referring physician has already sent, so
                      you are not starting from zero.
                    </li>
                    <li>
                      <strong>We run the tests we need.</strong> This usually
                      means blood work to check kidney function (like GFR and
                      creatinine) and sometimes imaging or urine tests,
                      depending on your situation.
                    </li>
                    <li>
                      <strong>
                        We explain what we find, in plain language.
                      </strong>{" "}
                      Your nephrologist walks you through your results and what
                      they mean for your kidneys, your blood pressure, and your
                      day-to-day life.
                    </li>
                    <li>
                      <strong>We build a plan together.</strong> Whether that
                      means medication changes, dietary adjustments, or ongoing
                      monitoring, you leave with a clear next step, not just a
                      diagnosis.
                    </li>
                    <li>
                      <strong>We connect you with our full team.</strong> If you
                      need dietary guidance or dialysis planning, our nurses,
                      dietitians, and social workers are already part of your
                      care, not a separate referral.
                    </li>
                  </ol>
                </div>

                <div id="anchor-5">
                  <h2>Support Beyond the Exam Room</h2>
                  <p>
                    Kidney disease affects more than lab numbers. It can change
                    what you eat, how you plan travel, and how confident you
                    feel about the future. That is why nephrology care here
                    comes with a full support system: nurses, registered
                    dietitians, and social workers who work alongside your
                    nephrologist, not on a separate track.
                  </p>
                  <p>
                    If you are new to the process, our{" "}
                    <a
                      href="https://www.kidneyinstitutes.com/resources"
                      className="font-bold text-[#162d6d]"
                    >
                      patient resources
                    </a>{" "}
                    page has the forms and insurance information you need before
                    your first visit, so you can spend that appointment talking
                    with your nephrologist instead of filling out paperwork in
                    the waiting room. We accept 18 or more insurance providers,
                    including Aetna, Blue Cross, Blue Shield, Cigna, Kaiser,
                    IEHP Direct, Tricare, and Veterans plans, and our team can
                    help verify your coverage as part of{" "}
                    <a
                      href="https://www.kidneyinstitutes.com/resources"
                      className="font-bold text-[#162d6d]"
                    >
                      new-patient onboarding
                    </a>
                    .
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
                      alt={content.alt}
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

      <FAQs
        heading="Frequently Asked Questions"
        questionsAnswers={content.faqs}
      />

      <section className="mb-24 md:mb-32">
        <div className="container">
          <h2>Care That Stays With You</h2>
          <p>
            Kidney disease is easier to face with a physician who knows your
            history and is present to guide you through it. That is the model we
            have built at Kidney Institute of the Desert: nephrologists who
            serve as on-site medical directors, a multidisciplinary team that
            supports you beyond the exam room, and 40 years of experience
            serving kidney warriors across the Coachella Valley. You do not have
            to navigate a kidney diagnosis alone, or from a distance.
          </p>
          <p className="mb-0">
            Find a{" "}
            <a
              href="https://www.kidneyinstitutes.com/locations"
              className="font-bold text-[#162d6d]"
            >
              dialysis clinic near you
            </a>{" "}
            and meet the physician who will be in the room with you, every step
            of the way.
          </p>
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
