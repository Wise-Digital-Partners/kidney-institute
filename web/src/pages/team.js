import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
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
        image: data.yvonneHamilton.childImageSharp.gatsbyImageData,
        name: "Yvonne Hamilton",
      },
      {
        image: data.mariluFuentes.childImageSharp.gatsbyImageData,
        name: "Marilu Fuentes",
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Our Team | Nephrology | Kidney Institute of the Desert"
        description="Meet our team of expert nephrologists whose number one priority is your kidney health. When you visit us, you benefit from knowledgeable, caring specialists."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="mb-20 md:mb-24">
        <div className="container">
          <header className="pt-10 md:pt-14 mb-16 max-w-3xl">
            <h2>Let Us Introduce Ourselves</h2>
            <p>
              We’re a team of expert nephrologists whose number one priority is
              your kidney health. When you visit us, you benefit from
              knowledgeable, caring specialists.
            </p>
          </header>

          <header className="mb-8">
            <h2 className="text-3xl font-semibold">Meet Our Nephrologists</h2>
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
                      alt={content.heading}
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

          <header className="mb-8">
            <h2 className="text-3xl font-semibold">Meet Our Head Nurses</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10">
            {content.team.slice(2).map((content, i) => {
              return (
                <div key={i}>
                  <div className="mb-3">
                    <GatsbyImage image={content.image} alt={content.heading} />
                  </div>
                  <p className="font-heading text-xl font-semibold text-secondary-900 mb-1.5">
                    {content.name}
                  </p>
                  <p className="text-sm mb-0">{content.location}</p>
                </div>
              );
            })}
          </div>
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
