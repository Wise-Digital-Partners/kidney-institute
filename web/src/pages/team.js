import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import Reviews from "../components/Reviews/ReviewsGrid";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    team: [
      {
        image: data.narenChandrashekar.childImageSharp.gatsbyImageData,
        alt: "Dr. Naren Chandrashekar, nephrologist in Indio and La Quinta, CA",
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
              Internal Medicine in Internal Medicine and Nephrology.
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
              Committee at Eisenhower Medical Center from 2010 through 2025. He
              has served in various offices, including President of the Medical
              Staff from 2022 through 2023.
            </p>

            <p>
              Dr. Chandrashekar grew up around the world. He lived in India,
              Ireland, and Canada before settling in the Coachella Valley. He
              enjoys helping his wife raise their two children, exercising,
              training in Brazilian jiu-jitsu, and skiing.
            </p>

            <p>
              Many patients simply call him Dr. Chandrashekar. His full name is
              Narendra S. Chandrashekar, MD.
            </p>

            <p>
              He serves as on-site medical director of{" "}
              <a
                href="https://www.kidneyinstitutes.com/la-quinta-kidney-center"
                className="font-bold text-[#162d6d]"
              >
                La Quinta Kidney Center
              </a>
              , where patients see him in person, not on a screen.
            </p>

            <p>
              He holds the same on-site role at the{" "}
              <a
                href="https://www.kidneyinstitutes.com/rancho-mirage-kidney-institute"
                className="font-bold text-[#162d6d]"
              >
                Kidney Institute at Eisenhower Medical Center
              </a>{" "}
              in Rancho Mirage, carrying forward the physician-led model his
              father built in the Valley.
            </p>
          </>
        ),
      },
      {
        image: data.jamburChandrashekar.childImageSharp.gatsbyImageData,
        alt: "Dr. Jambur Chandrashekar, founding nephrologist of Kidney Institute of the Desert in Indio, CA",
        name: "Dr. Jambur Chandrashekar",
        bio: (
          <>
            <p>
              Dr. Jambur Chandrashekar began his medical practice in the
              Coachella Valley in 1979. He is one of the founding members of the
              Kidney Institute of the Desert in Indio, the Kidney Institute at
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

            <p>
              Patients and referring providers also know him as Dr. J.
              Chandrashekar. When Kidney Institute of the Desert first opened
              its doors in Indio in 1987, he had already been caring for Valley
              patients for eight years.
            </p>

            <p>
              That first clinic,{" "}
              <a
                href="https://www.kidneyinstitutes.com/indio-kidney-institute"
                className="font-bold text-[#162d6d]"
              >
                Kidney Institute of the Desert in Indio
              </a>
              , became the foundation for the physician-owned, in-person care
              that kidney warriors across the Valley still count on today.
            </p>
          </>
        ),
      },
      {
        image: data.yvonneHamilton.childImageSharp.gatsbyImageData,
        alt: "Yvonne Hamilton, head nurse at La Quinta Kidney Center",
        name: "Yvonne Hamilton",
        location: "Head Nurse, La Quinta Kidney Center",
      },
      {
        image: data.mariluFuentes.childImageSharp.gatsbyImageData,
        alt: "Marilu Fuentes, head nurse at Kidney Institute of the Desert in Indio",
        name: "Marilu Fuentes",
        location: "Head Nurse, Kidney Institute of the Desert, Indio",
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Our Team: Dr. Chandrashekar | Kidney Institute of the Desert"
        description="Meet Dr. Naren and Dr. Jambur Chandrashekar, board-certified nephrologists, plus the on-site care team serving Coachella Valley kidney warriors since 1987."
        canonical="https://www.kidneyinstitutes.com/team"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-24">
        <div className="container">
          <header className="pt-10 md:pt-14 mb-10 md:mb-14 max-w-3xl">
            <h1>
              Meet the Physicians and Care Team at Kidney Institute of the
              Desert
            </h1>
          </header>

          <header className="mb-16 max-w-3xl">
            <h2>Let Us Introduce Ourselves</h2>
            <p>
              We’re a team of expert nephrologists whose number one priority is
              your kidney health. When you visit us, you benefit from
              knowledgeable, caring specialists.
            </p>
            <p>
              Dr. Narendra S. Chandrashekar, MD, known to patients as Dr. Naren
              Chandrashekar, is a board-certified nephrologist and the on-site
              medical director of La Quinta Kidney Center and the Kidney
              Institute at Eisenhower Medical Center. He is a partner physician
              at Coachella Valley Nephrology, the physician practice of Kidney
              Institute of the Desert, with{" "}
              <a
                href="https://www.kidneyinstitutes.com/indio-coachella-valley-nephrology"
                className="font-bold text-[#162d6d]"
              >
                nephrology offices in Indio
              </a>{" "}
              and La Quinta.
            </p>
            <p>
              He practices alongside his father, Dr. Jambur Chandrashekar, a
              founding physician of Kidney Institute of the Desert who began
              caring for Coachella Valley patients in 1979. Together, they lead
              an independent, physician-owned practice where your doctor is in
              the building, not on a screen.
            </p>
            <p>
              A new kidney diagnosis can feel scary. You don’t have to face it
              alone. Our nephrologists, nurses, dietitians, and social workers
              support every kidney warrior, one visit at a time.
            </p>
          </header>

          <header className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold">Meet Our Nephrologists</h2>
            <p>
              A nephrologist is a kidney doctor. A urologist treats the urinary
              tract and often does surgery. A nephrologist focuses on how well
              your kidneys work and helps you{" "}
              <a
                href="https://www.kidneyinstitutes.com/nephrology"
                className="font-bold text-[#162d6d]"
              >
                manage kidney disease
              </a>
              , high blood pressure, and dialysis.
            </p>
            <p>
              Our nephrologists, Dr. Naren Chandrashekar and Dr. Jambur
              Chandrashekar, see patients at Coachella Valley Nephrology in
              Indio and La Quinta.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10 mb-20 md:mb-24">
            {content.team.slice(0, 2).map((content, i) => {
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
                      className="mx-auto rounded-xl transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                    />
                  </div>
                  <p className="font-heading text-xl font-semibold text-secondary-900 mb-0">
                    {content.name}
                  </p>
                </button>
              );
            })}
          </div>

          <header className="mb-16 max-w-3xl">
            <h2>On-Site, Not Just On Staff</h2>
            <p>
              Some kidney care is managed from a distance, by a doctor you may
              never meet. We believe you deserve better. At Kidney Institute of
              the Desert, our medical directors are on-site at our clinics.
            </p>
            <p>
              Dr. Naren Chandrashekar is the on-site medical director of our La
              Quinta and Eisenhower Medical Center clinics. That means the
              doctor guiding your{" "}
              <a
                href="https://www.kidneyinstitutes.com/dialysis-services"
                className="font-bold text-[#162d6d]"
              >
                dialysis treatment
              </a>{" "}
              is someone you can see, talk to, and ask questions.
            </p>
            <p>
              This is worldwide expertise by your side. Between them, our two
              nephrologists trained in India, Ireland, Canada, Los Angeles,
              Boston, and Dallas. Both chose to stay independent,
              physician-owned, and present, the same promise{" "}
              <a
                href="https://www.kidneyinstitutes.com/about-us"
                className="font-bold text-[#162d6d]"
              >
                we’ve kept since 1987
              </a>
              .
            </p>
            <p>
              Spending the winter in the desert? Our team also helps visiting
              patients plan for{" "}
              <a
                href="https://www.kidneyinstitutes.com/traveling-on-dialysis"
                className="font-bold text-[#162d6d]"
              >
                dialysis while traveling
              </a>
              , so your care stays in expert hands away from home.
            </p>
          </header>

          <header className="mb-8">
            <h2 className="text-3xl font-semibold">Meet Our Head Nurses</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10 mb-16 md:mb-20">
            {content.team.slice(2).map((content, i) => {
              return (
                <div key={i}>
                  <div className="mb-3">
                    <GatsbyImage image={content.image} alt={content.alt} />
                  </div>
                  <p className="font-heading text-xl font-semibold text-secondary-900 mb-1.5">
                    {content.name}
                  </p>
                  <p className="text-sm mb-0">{content.location}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl">
            <p>
              Yvonne Hamilton leads our nursing team at La Quinta Kidney Center.
              Marilu Fuentes leads our nursing team at Kidney Institute of the
              Desert in Indio. They’re often the familiar faces who welcome you,
              check on your comfort, and answer your questions during your
              visits.
            </p>
            <p>
              Nurses are one part of your care team. Our dietitians help you
              build a{" "}
              <a
                href="https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet"
                className="font-bold text-[#162d6d]"
              >
                kidney-friendly eating plan
              </a>
              , and our social workers help you handle the practical and
              emotional side of kidney care.
            </p>
            <p>
              New to our clinics? Fill out your{" "}
              <a
                href="https://www.kidneyinstitutes.com/resources"
                className="font-bold text-[#162d6d]"
              >
                new patient forms
              </a>{" "}
              before your first visit, so you spend less time on paperwork and
              more time with your team.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-28">
        <div className="container">
          <div className="mb-10 md:mb-12">
            <Reviews />
          </div>
          <p className="text-center mb-0">
            Want to hear from more kidney warriors? Read{" "}
            <a
              href="https://www.kidneyinstitutes.com/testimonials"
              className="font-bold text-[#162d6d]"
            >
              what our patients say
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mb-20 md:mb-28">
        <div className="container">
          <div className="bg-[#A68098] bg-opacity-20 px-6 py-20 rounded-3xl">
            <header className="max-w-2xl mx-auto text-center">
              <h2>Want to Join Our Team?</h2>
              <p>
                If you’re a compassionate kidney care specialist who always puts
                patients first, we’d love to hear from you! Contact us today.
              </p>
              <ButtonSolid href="/careers" text="Join the Team" />
            </header>
          </div>
        </div>
      </section>

      <CallToAction />

      <ModalTeamMembers slideIndex={slideIndex} slides={content.team} />
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
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
    mariluFuentes: file(relativePath: { eq: "dialysis/Marilu Fuentes.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
    donnaDeLaO: file(relativePath: { eq: "dialysis/Donna De La O.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
    narenChandrashekar: file(
      relativePath: { eq: "nephrology/Dr. Naren Chandrashekar.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
    jamburChandrashekar: file(
      relativePath: { eq: "nephrology/Dr. Jambur Chandrashekar.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
    khurramMumtaz: file(
      relativePath: { eq: "nephrology/Dr. Khurram Mumtaz.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 369)
      }
    }
  }
`;
export default Page;
