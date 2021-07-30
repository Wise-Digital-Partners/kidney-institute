import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreviewList from "../components/Blog/BlogPostList";
// import BlogPostFeaturedList from "../components/Blog/BlogPostFeaturedList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { mapEdgesToNodes } from "../lib/helpers";
import CallToAction from "../components/Repeating/CTA";

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
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout headerStyle="overlap">
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout headerStyle="overlap">
      <SearchEngineOptimization
        title=""
        description=""
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="pt-20 md:pt-40 mb-20 md:mb-32">
        <div className="container">
          <header className="mb-12 md:mb-18">
            <h1>Blog</h1>
          </header>

          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewList nodes={postNodes} />
          )}
        </div>
      </section>

      <CallToAction
        heading={[
          "Let’s Become ",
          <span className="text-primary-400">Partners</span>,
        ]}
        subtext="From short-term help to long-term staff members for your hotel, restaurant, or other establishments, we can get you the staffing you need. Contact us today!"
      />
    </Layout>
  );
};

export default ArchivePage;
