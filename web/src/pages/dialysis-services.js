import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
// import tw from "twin.macro";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import ModalTeamMembers from "../components/Modal/ModalTeamMembers";

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

  //const [modalTabIndex, setModalTabIndex] = useState(0);

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
      },
      {
        image: data.mariluFuentes.childImageSharp.gatsbyImageData,
        name: "Marilu Fuentes",
        location: "Kidney Institute of the Desert Indio",
      },
      // {
      //   image: data.donnaDeLaO.childImageSharp.gatsbyImageData,
      //   name: "Donna De La O",
      //   location: "Kidney Institute at EMC & Coachella Kidney Institute",
      // },
    ],
    faqs: [
      {
        question: "Does dialysis hurt?",
        answer:
          "Placing the needles for hemodialysis feels like a quick pinch, and numbing cream can be used if that helps. The treatment itself is not painful. Some people feel tired or lightheaded afterward, and your team can adjust things to reduce that.",
      },
      {
        question: "How long does a dialysis session take?",
        answer:
          "In-center hemodialysis takes three to four hours, three times a week. Peritoneal dialysis exchanges take about 30 minutes each and are done roughly four times a day, or overnight with a cycler.",
      },
      {
        question: "Can I still work while on dialysis?",
        answer:
          "Many people do. Peritoneal dialysis is often easier to work around because you control the timing, and some hemodialysis patients choose early morning or evening chairs. Talk with your social worker about scheduling.",
      },
      {
        question: "What can I eat on dialysis?",
        answer:
          "Your diet will focus on managing potassium, phosphorus, sodium, and fluid, with fluid usually limited to about 32 ounces a day. Your dietitian builds a plan around foods you actually like rather than handing you a list of rules.",
      },
      {
        question: "Can I travel while on dialysis?",
        answer:
          "Yes. We help patients arrange treatment at their destination, and we welcome visiting patients who need dialysis while they are in the Coachella Valley.",
      },
      {
        question: "Do I have to stay on the same type of dialysis forever?",
        answer:
          "No. Switching between hemodialysis and peritoneal dialysis is possible, and your nephrologist will help you make the switch if your health or life circumstances change.",
      },
    ],
  };

  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Dialysis Services in the Coachella Valley | Kidney Institute"
        description="Hemodialysis and peritoneal dialysis at four clinics in the Coachella Valley, with our own nephrologists on-site. Independent and physician-led since 1987."
        canonical="https://www.kidneyinstitutes.com/dialysis-services"
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="bg-gray-100 pt-10 md:pt-18 pb-14 mb-20 md:mb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-10 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Dialysis Services</h1>
              <p>
                Dialysis is a treatment that removes waste, extra salt, and
                extra fluid from your blood when your kidneys can no longer do
                that job on their own. At Kidney Institute of the Desert, we
                have provided both hemodialysis and peritoneal dialysis to
                desert families since 1987. Our nurses, dietitians, social
                workers, and nephrologists work as one team, and our own
                physicians serve as the medical directors inside each clinic.
              </p>
              <ButtonSolid
                modal="modal-contact"
                icon="fas fa-map-marker-alt"
                text="Find a Location"
              />
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
                <div id="anchor-1" className="mb-16 lg:mb-24">
                  <h2 className="mb-8 md:mb-10">Dialysis Basics</h2>

                  <p>
                    Hearing that you need dialysis is a lot to take in. Most
                    people leave that appointment with more questions than
                    answers. This page walks through what dialysis does, how
                    each type works, and what your care looks like once you are
                    with us, so you can walk into your first visit knowing what
                    to expect.
                  </p>

                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      Why It’s Needed
                    </h3>
                    <p>
                      Healthy kidneys filter your blood around the clock. They
                      pull out waste, balance the minerals your body needs,
                      control your blood pressure, and get rid of fluid you do
                      not need. When kidney function drops far enough, that
                      waste and fluid start to build up. You may feel tired,
                      swollen, short of breath, or sick to your stomach.
                    </p>
                    <p>
                      Dialysis takes over much of that filtering work. It keeps
                      your body in balance, helps hold your blood pressure at a
                      safer level, and keeps minerals like potassium and
                      phosphorus from climbing too high. Your{" "}
                      <a
                        href="https://www.kidneyinstitutes.com/nephrology"
                        className="font-bold text-[#162d6d]"
                      >
                        nephrologist
                      </a>{" "}
                      will look at your lab results, your symptoms, and how you
                      are feeling day to day before recommending that you start.
                    </p>
                    <p>
                      Making dialysis feel comfortable and stress-free is one of
                      our main goals. Treatment becomes part of your week, not
                      the thing your whole week revolves around.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      How Dialysis Works
                    </h3>
                    <p>
                      There are two types of dialysis, and both are available
                      through the Kidney Institute.
                    </p>
                    <p>
                      <strong>Hemodialysis</strong> uses a machine to filter
                      your blood. Blood travels out of your body through soft
                      tubing, passes through a filter called a dialyzer that
                      works like an artificial kidney, and returns to you
                      cleaned. Most people receive hemodialysis at one of our
                      clinics.
                    </p>
                    <p>
                      <strong>Peritoneal dialysis</strong> uses the lining of
                      your own abdomen, called the peritoneum, as the filter. A
                      soft plastic tube called a catheter is placed in your
                      abdomen. A clean fluid flows in, pulls waste and extra
                      fluid out of the blood vessels in that lining, and then
                      drains out. Most people do peritoneal dialysis at home.
                    </p>
                    <p>
                      Neither one is automatically better. The right choice
                      depends on your health, your schedule, your comfort level,
                      and what kind of support you have at home.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      The Benefits of Dialysis
                    </h3>
                    <p>
                      Dialysis eases the symptoms that come with kidney failure,
                      including fatigue, weakness, swelling, and nausea. Its
                      most important benefit is that it does the filtering work
                      your body still needs done, which is what allows people to
                      keep living full lives after kidney failure.
                    </p>
                    <p>
                      That is why this work matters so much to us. Your
                      physicians and nurses build a complete care plan around
                      you, and then adjust it as your needs change.
                    </p>
                  </div>
                </div>

                <div id="anchor-2" className="mb-16 lg:mb-24">
                  <h2 className="mb-8 md:mb-10">
                    Hemodialysis: Filtering by Machine
                  </h2>

                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      Why It’s Needed
                    </h3>
                    <p>
                      Hemodialysis is the right fit for many people, especially
                      those who would rather have trained professionals handle
                      treatment and who like having a set schedule to plan
                      around.
                    </p>
                    <p>
                      Starting treatment is an emotional adjustment, and you
                      will not go through it alone. Something our patients tell
                      us often: the waiting room helps. You get to know the
                      nurses and technicians who care for you every week, and
                      you meet other kidney warriors who understand exactly what
                      this is like. That community is a real part of the
                      treatment.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      How Hemodialysis Works
                    </h3>
                    <p>
                      Hemodialysis is usually done at a dialysis center like one
                      of our four valley clinics. Treatments are scheduled three
                      times a week, and each session lasts three to four hours.
                    </p>
                    <p>
                      Before you start, you will need dialysis access, which is
                      the spot where blood leaves and returns to your body. This
                      is usually a fistula or graft in your arm, created during
                      a short procedure and given time to heal beforehand. Your
                      kidney doctor will explain which option suits you and when
                      to have it placed.
                    </p>
                    <p>
                      During treatment, you sit in a reclining chair. You can
                      read, nap, watch something, or talk with the staff and the
                      people around you. Your nurses check your blood pressure
                      and how you are feeling throughout the session.
                    </p>
                    <p>
                      If you are heading out of town, our team can help you{" "}
                      <a
                        href="https://www.kidneyinstitutes.com/traveling-on-dialysis"
                        className="font-bold text-[#162d6d]"
                      >
                        arrange treatment at your destination
                      </a>{" "}
                      so your schedule stays intact.
                    </p>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      The Benefits of Hemodialysis
                    </h3>
                    <p>
                      Many people prefer coming to a center. Trained
                      hemodialysis nurses and nephrologists handle the
                      treatment, so there is nothing for you to manage at home
                      and no supplies to store.
                    </p>
                    <p>
                      There is also a rhythm to it that people come to
                      appreciate. Three sessions a week means four days without
                      treatment. You have staff watching over you closely during
                      every visit, and a familiar group of faces each time you
                      come in.
                    </p>
                  </div>
                </div>

                <div id="anchor-3">
                  <h2 className="mb-8 md:mb-10">
                    Peritoneal Dialysis: Filtering Through Your Abdomen
                  </h2>

                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      Why It’s Needed
                    </h3>
                    <p>
                      Peritoneal dialysis is the most common form of home
                      dialysis. It suits people who want more control over their
                      own schedule and who feel comfortable being hands-on with
                      their care.
                    </p>
                    <p>
                      The adjustment can feel daunting at first. That is normal,
                      and it is exactly what our training is for. We teach you
                      step by step, at your pace, and our team stays reachable
                      once you are doing exchanges on your own.
                    </p>
                  </div>

                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      How Peritoneal Dialysis Works
                    </h3>
                    <p>There are two types.</p>
                    <p>
                      <strong>
                        Continuous ambulatory peritoneal dialysis (CAPD)
                      </strong>{" "}
                      is done about four times a day in short exchanges of
                      roughly 30 minutes each. You do them by hand, and they can
                      be done almost anywhere clean and private, including at
                      work.
                    </p>
                    <p>
                      <strong>Automated peritoneal dialysis (APD)</strong> uses
                      a small machine called a cycler that runs the exchanges
                      overnight while you sleep, which leaves your days open.
                    </p>
                    <p>
                      Both need a catheter placed in your abdomen first, along
                      with training on keeping the site clean to lower your risk
                      of infection. When you meet with a kidney doctor at the
                      Kidney Institute, we will talk through your daily routine
                      and decide together which method fits your life.
                    </p>
                  </div>

                  <div className="mb-8 md:mb-12">
                    <h3 className="text-mobile-3xl md:text-3xl font-semibold">
                      The Benefits of Peritoneal Dialysis
                    </h3>
                    <p>
                      Peritoneal dialysis often comes with fewer dietary
                      restrictions than hemodialysis, and it filters more gently
                      and steadily, which some people find easier on their body.
                      Our dietitians will still help you build a{" "}
                      <a
                        href="https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet"
                        className="font-bold text-[#162d6d]"
                      >
                        kidney-friendly eating plan
                      </a>{" "}
                      that fits the method you choose.
                    </p>
                    <p>
                      It also travels well. Supplies can ship directly to your
                      home or to where you are staying, which matters a great
                      deal to our seasonal patients.
                    </p>
                    <p>
                      People who choose peritoneal dialysis tend to be more
                      involved in their own care, and we provide the training
                      and ongoing support to make that work.
                    </p>
                  </div>
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

      <section className="mb-20 md:mb-32">
        <div className="container max-w-3xl">
          <header className="mb-8 md:mb-10">
            <h2>Comparing Your Two Options</h2>
            <p>
              Here is a side-by-side look at the two treatments. Your
              nephrologist will help you weigh these against your own health and
              routine.
            </p>
          </header>

          <div className="overflow-x-auto mb-8 md:mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left font-heading text-secondary-900 font-semibold p-4 border border-gray-200"></th>
                  <th className="text-left font-heading text-secondary-900 font-semibold p-4 border border-gray-200">
                    Hemodialysis
                  </th>
                  <th className="text-left font-heading text-secondary-900 font-semibold p-4 border border-gray-200">
                    Peritoneal Dialysis
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Where",
                    "At one of our clinics",
                    "At home, work, or while traveling",
                  ],
                  ["How often", "3 times a week", "Daily"],
                  [
                    "How long",
                    "3 to 4 hours per session",
                    "30-minute exchanges, or overnight",
                  ],
                  [
                    "Who performs it",
                    "Our nurses and technicians",
                    "You, after full training",
                  ],
                  [
                    "Access needed",
                    "Fistula or graft in the arm",
                    "Catheter in the abdomen",
                  ],
                  [
                    "Diet and fluids",
                    "Tighter limits between sessions",
                    "Often fewer restrictions",
                  ],
                  [
                    "Best suited to",
                    "People who prefer a set schedule and hands-on staff",
                    "People who want flexibility and control",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="font-semibold text-secondary-900 p-4 border border-gray-200">
                      {row[0]}
                    </td>
                    <td className="p-4 border border-gray-200">{row[1]}</td>
                    <td className="p-4 border border-gray-200">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Your choice is not permanent. Some people switch as their health or
            their circumstances change, and we will help you make that
            transition whenever it makes sense.
          </p>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container max-w-3xl">
          <header className="mb-8 md:mb-10">
            <h2>The Team Beside You</h2>
          </header>
          <p>
            Dialysis is never just a machine and a chair. Your care comes from a
            group of people who know your name.
          </p>
          <p>
            Your nephrologist oversees your treatment plan and adjusts it as
            your labs and symptoms change. Your dialysis nurses and technicians
            run your treatments, watch your numbers, and are usually the first
            to notice when something feels off. Your renal dietitian helps you
            manage potassium, phosphorus, sodium, and fluid without giving up
            food you enjoy. Your social worker helps with insurance questions,
            transportation, work and family concerns, and the emotional side of
            living with kidney failure.
          </p>
          <p>
            Here is the difference that matters most: our nephrologists are the
            medical directors of our clinics, and they are physically in the
            building. We are independent and physician-owned, not part of a
            national chain, so the doctor responsible for the standard of care
            at your clinic is the same doctor you see in person. You can{" "}
            <a
              href="https://www.kidneyinstitutes.com/team"
              className="font-bold text-[#162d6d]"
            >
              meet the team
            </a>{" "}
            before your first visit.
          </p>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container max-w-3xl">
          <header className="mb-8 md:mb-10">
            <h2>Dialysis While You Travel</h2>
          </header>
          <p>
            Needing dialysis does not mean you stop going places. Many of our
            patients spend part of the year in the desert, and part of it
            somewhere else, and plenty of others simply want to visit family or
            take a trip.
          </p>
          <p>
            If you are visiting the Coachella Valley and need treatment while
            you are here, we welcome visiting patients at our clinics and can
            coordinate with your home center to keep your care consistent. If
            you are one of our patients heading out of town, we will help you
            find a center at your destination and send your records ahead. Home
            peritoneal dialysis makes travel easier still, since supplies can be
            delivered where you are staying.
          </p>
          <p>
            Our{" "}
            <a
              href="https://www.kidneyinstitutes.com/traveling-on-dialysis"
              className="font-bold text-[#162d6d]"
            >
              travel resources for dialysis patients
            </a>{" "}
            cover what to plan for and how far ahead to start.
          </p>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container max-w-3xl">
          <header className="mb-8 md:mb-10">
            <h2>Starting Care With Us</h2>
            <p>
              Getting started is more straightforward than most people expect.
            </p>
          </header>

          <ol className="space-y-6 md:space-y-8">
            <li>
              <p className="mb-0">
                <strong className="text-secondary-900">
                  1. Talk with a kidney doctor.
                </strong>{" "}
                Your primary care physician or another specialist can refer you,
                or you can reach out to us directly. We will review your kidney
                function and go over your options.
              </p>
            </li>
            <li>
              <p className="mb-0">
                <strong className="text-secondary-900">
                  2. Choose your treatment and location.
                </strong>{" "}
                Together we will decide between hemodialysis and peritoneal
                dialysis, and pick the clinic that works best for you.
              </p>
            </li>
            <li>
              <p className="mb-0">
                <strong className="text-secondary-900">
                  3. Complete your paperwork ahead of time.
                </strong>{" "}
                Our{" "}
                <a
                  href="https://www.kidneyinstitutes.com/resources"
                  className="font-bold text-[#162d6d]"
                >
                  new patient forms
                </a>{" "}
                can be filled out before your first appointment. That way we are
                ready to begin your care the moment you walk in, instead of
                starting with a clipboard.
              </p>
            </li>
            <li>
              <p className="mb-0">
                <strong className="text-secondary-900">
                  4. Check your coverage.
                </strong>{" "}
                We accept more than 18 insurance plans, including Aetna, Blue
                Cross, Blue Shield, Cigna, Kaiser, IEHP Direct, Tricare, and
                Veterans coverage. If you are unsure about your plan, call us,
                and we will look into it with you.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mb-18 md:mb-32">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Our Dialysis Clinics</h2>
            <p className="max-w-3xl">
              We have four dialysis clinics across the valley, in Indio, Rancho
              Mirage, Coachella, and La Quinta, plus two nephrology offices for
              patients who are not on dialysis. Choose the one closest to home.
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

      <FAQs
        heading="Common Questions About Dialysis"
        subtext="Get answers to the questions we get the most. You can also reach out to speak with someone on our team."
        questionsAnswers={content.faqs}
      />

      <section className="mb-24 md:mb-40">
        <div className="container">
          <header className="mb-10 md:mb-12">
            <h2>Meet Our Head Nurses</h2>
          </header>

          <div className="grid md:grid-cols-3 gap-y-10 md:gap-x-5 lg:gap-x-10">
            {content.team.map((content, i) => {
              return (
                <div key={i}>
                  <div className="rounded-xl overflow-hidden mb-3">
                    <GatsbyImage
                      image={content.image}
                      alt={content.heading}
                      className="mx-auto w-full"
                    />
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

      <Testimonials />
      <Resources />
      <CallToAction subtext="Whether you are just starting dialysis or looking for a clinic closer to home, we would be glad to talk with you. Our goal is to build a real relationship with every patient and shape a treatment plan around your life. Let's get in touch today." />

      {/* <ModalTeamMembers slideIndex={slideIndex} slides={content.team} /> */}
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Dialysis.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Dialysis.jpg" }
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
