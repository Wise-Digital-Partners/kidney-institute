import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import AreasWeServe from "../components/Repeating/AreasWeServe";
import CallToAction from "../components/Repeating/CTA";

const Page = ({ data }) => {
  return (
    <Layout headerHasBorder={true}>
      <SearchEngineOptimization
        title="Kidney Nutrition & Dialysis Diet | Kidney Institutes"
        description="If you're having kidney trouble or are on dialysis, a kidney nutrition plan, or dialysis diet, will be key to your healthcare. Get essential tips here."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />

      <section className="pt-4 md:pt-24 mb-20 md:mb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-y-8 md:gap-x-8 lg:gap-x-20 items-center">
            <div className="order-2 md:order-1">
              <h1>Kidney Nutrition & Dialysis Diet</h1>
              <p className="mb-0">
                Eating the right foods during your kidney care, especially if
                you’re on dialysis, is an important way to help keep your body
                well. Our kidney nutritionists will develop a nutrition plan
                tailored to your health and diet needs.
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

      <section className="mb-20 md:mb-32">
        <div className="container">
          <header className="max-w-3xl mb-10 md:mb-16">
            <h3>A Quick Guide to Kidney-Friendly Food</h3>
            <p>
              A diet that’s good for your kidneys isn’t quite as limiting as you
              might imagine. Here are some of the kidney-friendly foods that our
              nutritionists may incorporate into your diet plan.
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

          <header className="max-w-3xl mb-10 md:mb-14">
            <h3>Limit Your Intake of These Main Nutrients</h3>
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

          <header>
            <h3>More Nutritional Resources</h3>
            <p>
              For more dietary guidelines and recipes, visit these resources:
            </p>
          </header>

          <ul class="space-y-2.5">
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
                National Kidney Foundation's Dialysis Diet Guidelines
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

      <div className="md:bg-gray-50 md:py-32 mb-20 md:mb-32">
        <AreasWeServe
          heading="Get Your Nutritionist-Approved Diet Plan"
          subtext="Our nutritionists can help you develop the right diet plan for your kidney health. Here’s where you’ll find our team:"
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
