import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import FAQs from "../components/Repeating/FAQs";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Kidney Diet & Dialysis Nutrition Guide | Coachella Valley"
        description="What can you eat with kidney disease? Our dietitians break down phosphorus and potassium guidance, so your meals feel manageable again. See the full guide."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}

        canonical="https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["WebPage", "MedicalWebPage"],
              "@id":
                "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet#webpage",
              url: "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet",
              name: "Kidney Nutrition & Dialysis Diet | Kidney Institutes",
              isPartOf: {
                "@id": "https://www.kidneyinstitutes.com/#website",
              },
              inLanguage: "en-US",
              primaryImageOfPage: {
                "@id":
                  "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet#primaryimage",
              },
              about: {
                "@id":
                  "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet#topic",
              },
            },
            {
              "@type": "ImageObject",
              "@id":
                "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet#primaryimage",
              url: "https://www.kidneyinstitutes.com/static/7cfddcd5622ddc4631ff4917def579e5/d84fc/1.0-hero-nutrition.jpg",
              contentUrl:
                "https://www.kidneyinstitutes.com/static/7cfddcd5622ddc4631ff4917def579e5/d84fc/1.0-hero-nutrition.jpg",
            },
            {
              "@type": "Thing",
              "@id":
                "https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet#topic",
              name: "Kidney-friendly nutrition for people on dialysis",
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

      <section className="pt-4 md:pt-24 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Kidney Nutrition & Dialysis Diet</h1>
              <p>
                Eating the right foods is one of the most powerful ways to feel
                better during kidney care. The foods and drinks you choose can
                lower the stress on your kidneys, help you feel stronger, and
                support your treatment. Our kidney nutritionists build a
                nutrition plan around your health, your lab results, and the
                foods you already enjoy. You don’t have to change everything at
                once, and you don’t have to do it alone.
              </p>
              <p className="mb-0">
                <strong>What is a kidney (renal) diet?</strong> A kidney diet,
                also called a renal diet, is an eating plan that limits certain
                minerals, mainly sodium, potassium, and phosphorus, and often
                limits fluid. The goal is to keep these minerals at safe levels
                so your kidneys and body aren’t overworked. Your dietitian sets
                your personal limits based on your blood tests and whether
                you’re on dialysis.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <GatsbyImage
                image={data.hero.childImageSharp.gatsbyImageData}
                width="560"
                className="rounded-xl md:rounded-4xl"
                alt="Kidney-friendly blueberries recommended as a healthy fruit choice for renal diet and kidney nutrition plans"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-32">
        <div className="container">
          <div className="bg-[#A68098] bg-opacity-20 px-6 py-20 rounded-xl md:rounded-3xl">
            <header className="max-w-3xl mx-auto text-center">
              <h2>Dietary Tips From Our Nutritionists</h2>
              <p className="mb-0">
                If you’re having kidney trouble or are on{" "}
                <a
                  href="https://www.kidneyinstitutes.com/kidney-nutrition-dialysis-diet"
                  className="font-bold text-[#162d6d]"
                >
                  dialysis
                </a>
                , a nutrition plan will be key to your healthcare. At Kidney
                Institutes, our nutritionists will help you develop a plan
                tailored specifically for your needs.
              </p>
            </header>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p>
              Our{" "}
              <a
                href="https://www.kidneyinstitutes.com/nephrology"
                className="font-bold text-[#162d6d]"
              >
                kidney care specialists
              </a>
              , nurses, dietitians, and social workers work together as one
              team, so support is always close by.
            </p>
            <p>
              A kidney-friendly diet isn’t about a long list of “no” foods. It’s
              about smart swaps and the right amounts. Small changes add up, and
              your dietitian will help you make them feel simple.
            </p>
            <p className="mb-0">
              <strong>Dietitian’s tip:</strong> Your diet plan is personal. Your
              dietitian uses your blood test results to set your own targets for
              sodium, potassium, phosphorus, and fluid, so no two plans look
              exactly alike.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mb-10 md:mb-16">
            <h3>A Quick Guide to Kidney-Friendly Food</h3>
            <p>
              A diet that’s good for your kidneys isn’t quite as limiting as you
              might imagine. Here are some of the kidney-friendly foods that our
              nutritionists may incorporate into your diet plan. Most of these
              picks are lower in potassium and phosphorus, which makes them
              easier on your kidneys. Portion size still matters, so enjoy them
              as part of the plan we build with you.
            </p>
          </header>
          <div className="grid md:grid-cols-4 gap-y-10 md:gap-x-8 lg:gap-x-10 mb-24 md:mb-28">
            <div>
              <GatsbyImage
                image={data.fruits.childImageSharp.gatsbyImageData}
                width="270"
                className="rounded-xl mb-6"
              />
              <p className="font-heading text-xl text-secondary-900 font-semibold mb-4">
                Fruits
              </p>
              <ul className="list-disc pl-6">
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Pineapple</li>
                <li>Red Grapes</li>
                <li>Strawberries</li>
              </ul>
            </div>
            <div>
              <GatsbyImage
                image={data.vegetables.childImageSharp.gatsbyImageData}
                width="270"
                className="rounded-xl mb-6"
                alt="Renal diet vegetable choice featuring fresh cauliflower for kidney care patients"
              />
              <p className="font-heading text-xl text-secondary-900 font-semibold mb-4">
                Vegetables
              </p>
              <ul className="list-disc pl-6">
                <li>Bell Peppers</li>
                <li>Cabbage</li>
                <li>Cauliflower</li>
                <li>Kale</li>
                <li>Spinach</li>
              </ul>
            </div>
            <div>
              <GatsbyImage
                image={data.meat.childImageSharp.gatsbyImageData}
                width="270"
                className="rounded-xl mb-6"
              />
              <p className="font-heading text-xl text-secondary-900 font-semibold mb-4">
                Meat
              </p>
              <ul className="list-disc pl-6">
                <li>Pork Chop</li>
                <li>Salmon</li>
                <li>Sirloin Steak</li>
                <li>Skinless Chicken Breasts</li>
                <li>Skinless Turkey Breast</li>
              </ul>
            </div>
            <div>
              <GatsbyImage
                image={data.bread.childImageSharp.gatsbyImageData}
                width="270"
                className="rounded-xl mb-6"
              />
              <p className="font-heading text-xl text-secondary-900 font-semibold mb-4">
                Bread
              </p>
              <ul className="list-disc pl-6">
                <li>Bagels</li>
                <li>Baguettes</li>
                <li>Ciabatta Bread</li>
                <li>Pita Bread</li>
                <li>White Bread</li>
              </ul>
            </div>
          </div>

          <p className="max-w-3xl">
            <strong>Remember:</strong> When two foods are alike, pick the one
            that’s lower in potassium and phosphorus. For example, an apple is a
            lower-potassium choice than a banana.
          </p>

          <header className="max-w-3xl mb-10 md:mb-14">
            <h3>
              Foods to Enjoy Less Often (Watch the Potassium and Phosphorus)
            </h3>
            <p>
              Some everyday foods are high in potassium or phosphorus, so they
              can add up fast. You don’t always have to skip them. Often, a
              simple swap or a smaller portion does the job. Talk with us before
              you cut anything out, because your labs guide what’s right for
              you.
            </p>
          </header>

          <div className="overflow-x-auto mb-24 md:mb-28">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left font-heading text-secondary-900 font-semibold p-4 border border-gray-200">
                    Instead of (higher in potassium or phosphorus)
                  </th>
                  <th className="text-left font-heading text-secondary-900 font-semibold p-4 border border-gray-200">
                    Try (usually lower)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Banana or orange", "Apple, berries, or red grapes"],
                  ["Potato", "White rice or pasta"],
                  [
                    "Whole-grain or whole-wheat bread",
                    "White bread, bagels, or pita",
                  ],
                  [
                    "Dark cola (added phosphates)",
                    "A clear soda or water, within your fluid limit",
                  ],
                  [
                    "Nuts, dried beans, and lentils",
                    "Chicken, turkey, or fish, based on your protein plan",
                  ],
                  [
                    "Large servings of milk and cheese",
                    "Smaller portions or the swaps your dietitian suggests",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 border border-gray-200">{row[0]}</td>
                    <td className="p-4 border border-gray-200 font-semibold">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <header className="max-w-3xl mb-10 md:mb-14">
            <h3>Limit Your Intake of These Main Nutrients</h3>
            <p className="mb-0">
              Four things need the most attention on a kidney diet: sodium,
              fluids, phosphorus, and potassium. Here’s why each one matters and
              how to manage it.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-14 md:gap-x-8 lg:gap-x-14 mb-24 md:mb-28">
            <div className="grid md:grid-cols-12 items-center gap-y-6 md:gap-x-3 lg:gap-x-4">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.sodium.childImageSharp.gatsbyImageData}
                  width="288"
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-end-13 md:col-span-9">
                <p className="font-heading text-xl text-secondary-900 font-semibold mb-2.5">
                  Sodium
                </p>
                <p className="mb-0">
                  Limiting your sodium intake will help control your blood
                  pressure and keep your body from retaining too much fluid. Use
                  herbs and spices instead to add flavor to your food.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-y-6 md:gap-x-3 lg:gap-x-4">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.fluids.childImageSharp.gatsbyImageData}
                  width="288"
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-end-13 md:col-span-9">
                <p className="font-heading text-xl text-secondary-900 font-semibold mb-2.5">
                  Fluids
                </p>
                <p className="mb-0">
                  Kidneys that are not functioning well may have trouble getting
                  rid of the excess water. For most dialysis patients, 32 ounces
                  per day is the limit.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-y-6 md:gap-x-3 lg:gap-x-4">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.phosphorus.childImageSharp.gatsbyImageData}
                  width="288"
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-end-13 md:col-span-9">
                <p className="font-heading text-xl text-secondary-900 font-semibold mb-2.5">
                  Phosphorus
                </p>
                <p className="mb-0">
                  Kidneys that are not functioning well cannot remove phosphorus
                  from the blood, and the high levels in your body can cause
                  additional health problems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-12 items-center gap-y-6 md:gap-x-3 lg:gap-x-4">
              <div className="md:col-start-1 md:col-span-3">
                <GatsbyImage
                  image={data.potassium.childImageSharp.gatsbyImageData}
                  width="288"
                  className="rounded-xl"
                />
              </div>
              <div className="md:col-end-13 md:col-span-9">
                <p className="font-heading text-xl text-secondary-900 font-semibold mb-2.5">
                  Potassium
                </p>
                <p className="mb-0">
                  Improperly functioning kidneys have trouble removing potassium
                  from your blood. Some fruits, vegetables, and whole-grain
                  bread have high potassium levels.
                </p>
              </div>
            </div>
          </div>

          <header className="max-w-3xl mb-10 md:mb-14">
            <h2>How to Build a Kidney-Friendly Plate</h2>
            <p>
              Building a kidney-friendly plate is easier than it sounds once you
              know the pattern. Start with a lean protein like skinless chicken,
              turkey, or fish. Add a lower-potassium vegetable and a serving of
              white rice, pasta, or bread. Season with herbs and spices instead
              of salt, and match your drink to your fluid limit.
            </p>
            <p>
              Your protein needs can change over time. Before dialysis, we may
              ask you to watch how much protein you eat. Once you start
              dialysis, you often need more protein, not less, because treatment
              removes some from your body. Our team, along with our{" "}
              <a
                href="https://www.kidneyinstitutes.com/dialysis-services"
                className="font-bold text-[#162d6d]"
              >
                dialysis services
              </a>
              , will guide the right amount for your stage.
            </p>
            <p className="mb-0">
              If you travel, your plan can travel with you. Snowbird patients
              and anyone heading out of town can keep eating well on the road,
              and our{" "}
              <a
                href="https://www.kidneyinstitutes.com/traveling-on-dialysis"
                className="font-bold text-[#162d6d]"
              >
                guide to traveling on dialysis
              </a>{" "}
              shows how to plan meals and treatment away from home.
            </p>
          </header>

          <header>
            <h3>More Nutritional Resources</h3>
            <p>
              For more dietary guidelines and recipes, visit these trusted
              resources:
            </p>
          </header>

          <ul className="space-y-2.5">
            <li>
              <a
                href="https://www.kidney.org/nutrition"
                target="_blank"
                rel="noreferrer"
                className="text-primary-900 font-bold underline"
              >
                National Kidney Foundation’s Nutrition Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.kidney.org/nutrition/Dialysis"
                target="_blank"
                rel="noreferrer"
                className="text-primary-900 font-bold underline"
              >
                National Kidney Foundation’s Dialysis Diet Guidelines
              </a>
            </li>
            <li>
              <a
                href="https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis/eating-nutrition"
                target="_blank"
                rel="noreferrer"
                className="text-primary-900 font-bold underline"
              >
                Dialysis Diet Info from the National Institute of Diabetes and
                Digestive and Kidney Diseases
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FAQs
        heading="Kidney Nutrition Questions, Answered"
        questionsAnswers={[
          {
            question: "What foods are best for a kidney-friendly diet?",
            answer:
              "The best foods for a kidney-friendly diet are usually lower in potassium and phosphorus. Good picks include apples, blueberries, red grapes, cauliflower, cabbage, bell peppers, skinless chicken or turkey, fish, and white breads like bagels and pita. Your dietitian will fine-tune the list based on your lab results and your stage of kidney care.",
          },
          {
            question: "How much fluid can I drink on dialysis?",
            answer:
              "For most dialysis patients, the daily fluid limit is about 32 ounces, which is 4 cups. This includes water, coffee, soup, ice, and juicy foods, not just drinks. Because everyone is different, your care team sets your exact limit. Staying within it helps prevent swelling and eases the work your heart and lungs have to do.",
          },
          {
            question: "Why do I need to watch potassium and phosphorus?",
            answer:
              "Healthy kidneys remove extra potassium and phosphorus from your blood, but kidneys that aren’t working well can’t. Potassium that’s too high can affect your heartbeat. Phosphorus that stays too high can weaken your bones and harm your heart over time. Managing both keeps you safer and feeling better, which is why they’re a main focus of any renal diet.",
          },
          {
            question: "Can I still eat fruit on a renal diet?",
            answer:
              "Yes, you can still enjoy fruit on a renal diet. The key is choosing lower-potassium options and watching your portions. Apples, berries, pineapple, red grapes, and strawberries are kidney-friendly choices. Higher-potassium fruits like bananas and oranges are best saved for special occasions or smaller amounts, and your dietitian can help you decide.",
          },
          {
            question: "Is the diet the same before and during dialysis?",
            answer:
              "No, the diet often changes when you start dialysis. Before dialysis, your dietitian may ask you to limit protein and certain minerals to protect your kidneys. Once you begin dialysis, you usually need more protein because treatment removes some from your body. This is why a personalized plan matters, and why we review it as your care changes.",
          },
          {
            question: "How much sodium should I eat with kidney disease?",
            answer:
              "Most people with kidney disease should aim for less than 2,300 mg of sodium a day, based on National Kidney Foundation guidance, and many need less. Too much sodium raises blood pressure and makes your body hold extra fluid. Cooking at home, using herbs and spices, and checking labels on packaged foods are simple ways to lower your salt.",
          },
        ]}
      />

      <div className="md:bg-gray-50 md:py-32 mb-20 md:mb-32">
        <AreasWeServe
          heading="Get Your Nutritionist-Approved Diet Plan"
          subtext={
            <p>
              Our nutritionists can help you develop the right diet plan for
              your kidney health. You can even get started before you visit with
              our{" "}
              <a
                href="https://www.kidneyinstitutes.com/resources"
                className="font-bold text-[#162d6d]"
              >
                new-patient forms
              </a>
              , which are protected under HIPAA and used only to care for you.
              Check our locations below, where you can find our nutritionists
              and care team.
            </p>
          }
          className="m-0"
        />
      </div>

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header>
            <h2 className="font-body text-mobile-4xl md:text-4xl mb-10 md:mb-16">
              Additional Resources
            </h2>
          </header>
          <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 lg:gap-x-20 items-center">
            <AniLink fade to="/traveling-on-dialysis" className="group">
              <div className="overflow-hidden rounded-xl mb-6">
                <GatsbyImage
                  image={data.travel.childImageSharp.gatsbyImageData}
                  width="560"
                  className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                />
              </div>

              <h3 className="text-3xl font-semibold">
                People On Dialysis Can Travel Too
              </h3>
              <p className="mb-0">
                Are you heading out of town? There are options that allow you to
                travel safely and continue your treatment.
              </p>
            </AniLink>
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
      relativePath: { eq: "open-graph/facebook/Nutrition.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Nutrition.jpg" }
    ) {
      publicURL
    }
    hero: file(
      relativePath: { eq: "Resources/Nutrition/1.0-hero-nutrition.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    fruits: file(relativePath: { eq: "Resources/Nutrition/2.0-fruits.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 540)
      }
    }
    vegetables: file(
      relativePath: { eq: "Resources/Nutrition/2.1-vegetables.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 540)
      }
    }
    meat: file(relativePath: { eq: "Resources/Nutrition/2.2-meat.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 540)
      }
    }
    bread: file(relativePath: { eq: "Resources/Nutrition/2.3-bread.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 540)
      }
    }
    sodium: file(relativePath: { eq: "Resources/Nutrition/3.0-sodium.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 288)
      }
    }
    fluids: file(relativePath: { eq: "Resources/Nutrition/3.1-fluids.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 288)
      }
    }
    phosphorus: file(
      relativePath: { eq: "Resources/Nutrition/3.2-phosphorus.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 288)
      }
    }
    potassium: file(
      relativePath: { eq: "Resources/Nutrition/3.3-potassium.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 288)
      }
    }
    resources: file(
      relativePath: { eq: "Resources/Patient Forms/1.0-forms-hero.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    travel: file(relativePath: { eq: "Resources/Travel/1.0-travel-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
  }
`;
export default Page;
