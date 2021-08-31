import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import CallToAction from "../components/Repeating/CTA";
import ModalJobDescription from "../components/Modal/ModalJobDescription";
import ModalApply from "../components/Modal/ModalApply";
import ButtonSolid from "../components/Button/ButtonSolid";

const Page = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const content = {
    jobs: [
      {
        position: "Dialysis Technician",
        description: (
          <>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Position Summary
              </p>
              <p>
                Dialysis Technicians will work as the agent of the Physicians
                and will carry out Standing Dialysis Treatment Orders,
                prescribed by the Physician. Technicians will report and be
                responsible to the Physician, Head Nurse and/or Charge Nurse.
              </p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Responsible To:
              </p>
              <p>
                Physicians, Medical Director, Administrator, Head Nurse, Charge
                Nurse and Chief Dialysis Technician, if applicable.
              </p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Positions Supervised
              </p>
              <p>None.</p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Patient Care Duties
              </p>
              <p>
                The Dialysis Technician will gather data to aid the Health Care
                Provider (Physician or Nurse) in assessing the patient's health
                and well-being prior to, during and after the dialysis
                treatment. The Dialysis Technician will note the patient's
                appearance, state of mind, weight, blood pressure, temperature,
                pulse, presence of edema and lung sounds.
              </p>
              <p>
                The Dialysis Technician will report any abnormal findings to the
                Charge Nurse and/or Physician. These include but may not be
                limited to:
              </p>

              <ul className="list-disc pl-6 mb-8">
                <li>
                  Elevated temperature, over 100° F, prior, during or post
                  dialysis
                </li>
                <li>Weight gain of over 10 pounds</li>
                <li>Weight loss between dialysis treatments</li>
                <li>Systolic blood pressure over 200 mm/Hg</li>
                <li>Diastolic blood pressure over 100 mm/Hg</li>
                <li>Pulse over 100 beats per minute</li>
                <li>Pulse lower than 60 beats per minute </li>
                <li>Evidence of patient bleeding/blood loss </li>
                <li>Chest pain</li>
                <li>Redness, tenderness or swelling of access </li>
                <li>Nausea, vomiting and/or diarrhea</li>
                <li>Evidence of any infection</li>
                <li>Report of patient falling</li>
                <li>Headaches </li>
                <li>Dizziness</li>
                <li>Blurred Vision</li>
                <li>Altered mental status</li>
                <li>
                  Any other atypical sign or concern that patient or technician
                  may have
                </li>
                <li>Shortness of breath</li>
              </ul>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Additional duties:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>
                  Draws blood work that is ordered when necessary from arterial
                  and venous blood lines.
                </li>
                <li>
                  Initiates Dialysis Treatment giving the patient Normal Saline
                  prime, unless indicated otherwise by Charge Nurse.
                </li>
                <li>
                  Calculates safe patient weight loss and confers with the
                  Charge Nurse for weight loss over 10 pounds.
                </li>
                <li>
                  Monitors patient's condition prior to, during and after the
                  Dialysis Treatment. This includes monitoring and maintaining
                  patient's access and blood line connectors uncovered at all
                  times during the dialysis treatment. Monitors and records
                  blood pressures and other dialysis parameters every 30 minutes
                  or more often as the patient's condition warrants.
                </li>
                <li>
                  Administers Heparin via A-V fistula or graft, lidocaine
                  subcutaneously and 200 mL Normal Saline bolus if patient's
                  blood pressure drops or if patient becomes symptomatic.
                  Confers with Charge Nurse and/or Physician if patient has an
                  untoward event during dialysis.
                </li>
                <li>
                  Terminates patient's treatment per procedure, administering
                  Normal Saline on rinseback.
                </li>
                <li>
                  Removes patient needles and assures proper blotting of access.
                  Bandages access according to proper technique.
                </li>
                <li>
                  Helps prepare for the initiation and termination of the
                  Dialysis Treatment utilizing catheter access.
                </li>
                <li>
                  Monitors patient's demeanor and state of mind and informs the
                  Social Worker of any potential problems with patient, for
                  example, housing problems, depression, suicidal thoughts, etc.
                </li>
                <li>
                  Keeps Dialysis equipment under constant observation during
                  treatments and evaluates that equipment is operating properly
                  and optimally. Reports all equipment malfunctions to the
                  Charge Nurse and/or Chief Technician.
                </li>
                <li>
                  Acknowledges patient requests and feelings. Shows respect for
                  patients, family, visitors and co workers.
                </li>
                <li>
                  Adheres to and enforces all Kidney Institute of the Desert
                  Policy and Procedures.
                </li>
                <li>
                  Follows all Policy and Procedures regarding Infection Control
                  and Safety.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Unit Duties
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>
                  Develops a good working knowledge of all equipment used in the
                  Dialysis Unit. Can start RO system, gather and log all
                  necessary information, as necessary. Reports any malfunction
                  of equipment to Charge Nurse and/or Chief Technician.
                </li>
                <li>
                  Sets up equipment, machines and primes dialyzers in accordance
                  with Kidney Institute of the Desert Policy and Procedures.
                </li>
                <li>
                  Cleans and disinfects dialysis equipment when required in
                  accordance with Kidney Institute of the Desert Policy and
                  Procedures.
                </li>
                <li>
                  Keeps unit and dialysis areas clean and tidy, noise level at
                  an acceptable level.
                </li>
                <li>
                  Performs all other tasks as requested, within the scope of the
                  Technician's ability.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Professional Qualities
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>
                  Seeks assistance from the appropriate resource person when
                  necessary.
                </li>
                <li>
                  Attends and participates in staff meetings and inservices.
                  Takes advantage of outside educational opportunities.
                </li>
                <li>
                  Demonstrates flexibility and adapts to change caused by
                  procedural changes, emergencies, patient census and staffing
                  adjustments.
                </li>
                <li>
                  Communicates in writing and verbally in an effective manner
                  with Physicians, Nurses and co workers.
                </li>
                <li>Adheres to proper Kidney Institute dress code. </li>
                <li>
                  Reports for work promptly at scheduled time and maintains a
                  good attendance record.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Qualifications
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>
                  Demonstrates understanding of Hemodialysis theory, methods and
                  care of the Renal Failure Patient on Hemodialysis.
                </li>
                <li>
                  Is certified or in the process of being certified as a
                  Hemodialysis Technician (CHT) by the State of California and
                  National Certification Current CPR Certification.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Education and Training Experience
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Must possess a High School Diploma or equivalent. </li>
                <li>
                  Preferably has experience or educated in healthcare related
                  field.
                </li>
                <li>
                  Has received job training as a Dialysis Technician and is
                  State and Nationally certified or in the process of being
                  certified by the State of California.
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        position: "Registered Nurse",
        description: (
          <>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Position Summary
              </p>
              <p>
                The Dialysis Staff Nurse, under the supervision of the Head
                Nurse, Renal Consultant and/or Medical Director, is responsible
                for the care of patients dialyzing at all Kidney Institute
                facilities. The Registered Nurse shall access, plan, implement
                and evaluate the care of the patients with the assistance of all
                technical personnel, attending Nephrologist and the Medical
                Director.
              </p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Responsible To:
              </p>
              <p>
                Medical Director, CEO/Administrator, Attending Nephrologist,
                Head Nurse/Manager, Renal Consultant.
              </p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Positions Supervised
              </p>
              <p>Technical personnel </p>
            </div>
            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Principle Duties
              </p>

              <ul className="list-disc pl-6 mb-8">
                <li>
                  The Registered Nurse shall assess each patient on admission
                  and each treatment (pre and  post treatment), including
                  emotional and physical status.
                </li>
                <li>
                  Identifies patient problems and determines the proper
                  intervention. Recognizes subtle changes in a patient's
                  condition and initiates the appropriate action based on those
                  changes.
                </li>
                <li>
                  Communicates in writing and verbally to appropriate team
                  members and physicians all physiological and/or psychological
                  adverse reactions, problems and/or other pertinent
                  information. Documents accurately and completely in the
                  medical record.
                </li>
                <li>
                  Recognizes and is able to respond to emergency situations.
                </li>
                <li>
                  Keeps patients and dialysis equipment under constant
                  observation during treatment,  evaluating patients throughout.
                </li>
                <li>
                  Following assessment of the patient, formulates a nursing care
                  plan for the patient. Makes changes in the nursing care plan
                  in accordance with the patient’s changing needs.
                </li>
                <li>
                  Delivers safe and skillful nursing care according to Kidney
                  Institutes Policy and  Procedure
                </li>
                <li>
                  Initiates and terminates dialysis treatment via external
                  catheters per Kidney Institutes Policy  and Procedure. Cleans
                  and dresses exit sites each treatment per Policy and Procedur
                </li>
                <li>
                  Safely administer prescribed medications and treatments per
                  Kidney Institutes Policy and  Procedure and take appropriate
                  action based on the patient's response.
                </li>
                <li>
                  Draws blood for laboratory specimens as necessary and pre
                  order. Is responsible for ensuring that specimens are packed
                  appropriately and sent to the appropriate lab
                </li>
                <li>
                  Identifies and utilizes available resource personnel to
                  facilitate delivery of quality patient care, e.g., registered
                  dietician, social worker, etc.
                </li>
                <li>
                  Maintains a clean, comfortable, safe environment for the
                  patient and staff.
                </li>
                <li>
                  Develops realistic workflow patterns, delegating appropriate
                  tasks to ensure that the work  day is completed within a
                  reasonable amount of time.
                </li>
                <li>
                  Directs, guides, supervises and assists other team members in
                  coordinating daily patient care.
                </li>
                <li>
                  Evaluates the care provided to patients by technical and other
                  team members and has the ability to initiate the appropriate
                  intervention.
                </li>
                <li>
                  Aides in motivating team members to reach their potential and
                  the objectives of The Kidney Institutes.
                </li>
                <li>
                  Assists with the instruction and orientation of personnel.
                </li>
                <li>
                  Demonstrates leadership ability and good communication skills,
                  both verbal and nonverbal.  The RN will be able to communicate
                  pertinent information to the team members, supervisors,
                  physicians, and allied health professionals effectively and
                  accuratel
                </li>
                <li>
                  Demonstrates flexibility and adapts changes caused by
                  procedural changes, emergencies,  patient census and staffing
                  adjustments.
                </li>
                <li>
                  Recognizes the needs of patients and/or family and informally
                  and formally teaches the patient and/or family members.
                </li>
                <li>
                  Completely and accurately documents on the medical record
                  pertinent nursing  observations, patient/family teaching
                  administered, medications given and care delivered.
                </li>
                <li>
                  Assists or is directly responsible for orientation of new
                  patients, facilitates transfers and  helps in making
                  appointments.
                </li>
                <li>
                  Performs all other tasks as requested by the Medical Director,
                  within the scope of the RN’s practice
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <p className="font-heading text-secondary-900 font-semibold text-xl mb-3">
                Qualifications
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Current California Registered Nursing License. </li>
                <li>
                  Demonstrates commitment to continual professional growth.
                </li>
                <li>
                  Demonstrates ability and competence as a Registered Nurse.
                </li>
                <li>
                  Demonstrates understanding of Hemodialysis principles, methods
                  and care of the patient. 5. Current Basic Life Support (BBLS)
                  Certification.
                </li>
              </ul>
            </div>
          </>
        ),
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Careers | Kidney Institute of the Desert | Nephrology"
        description="Are you interested in joining the Kidney Institute team? Find out about our job openings and how you can reach out."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-4 md:pt-24 mb-10 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Love What You Do</h1>
              <p>
                Want to make a difference? Are you looking for a meaningful
                career? If you're a kidney care specialist who always puts
                patients first, we want to hear from you.
              </p>
              <ButtonSolid modal="modal-apply" text="Let’s Connect" />
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

      <section className="bg-[#A68098] bg-opacity-20 py-20 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <header className=" text-center mb-16">
              <h2>Open Positions</h2>
            </header>
            <div class="grid grid-cols-1 gap-y-6 mb-16">
              {content.jobs.map((content, i) => {
                return (
                  <button
                    aria-label="Modal trigger"
                    data-modal-open="modal-job-description"
                    onClick={() => setSlideIndex(i)}
                    className="bg-white shadow-3xl text-secondary-900 font-semibold pl-7 pr-4 py-3.5 rounded-5xl flex items-center justify-between space-x-4 text-center"
                    key={i}
                  >
                    <span className="font-heading text-xl font-semibold">
                      {content.position}
                    </span>
                    <img src={data.plusIcon.publicURL} alt="Download icon" />
                  </button>
                );
              })}
            </div>

            <p className="text-center">
              Don't see a position you're looking for?{" "}
              <button
                data-modal-open="modal-contact"
                className="text-primary-900 underline"
              >
                Get in touch.
              </button>{" "}
              We're always interested to hear from those seeking a career in
              kidney care.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />

      <ModalApply />
      <ModalJobDescription slideIndex={slideIndex} slides={content.jobs} />
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
    hero: file(relativePath: { eq: "careers/1.0-careers.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    plusIcon: file(relativePath: { eq: "careers/2.0-plus-icon.svg" }) {
      publicURL
    }
  }
`;
export default Page;
