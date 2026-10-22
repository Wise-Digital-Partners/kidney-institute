import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import defaultSocialImage from "../images/open-graph/facebook/Global.jpg";

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  openGraphImage,
  twitterOpenGraphImage,
  canonical,
  schema,
}) => {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `);

  const { pathname } = useLocation();
  const metaDescription = description || site.siteMetadata.description;
  const toAbsoluteUrl = (value) =>
    new URL(value, `${site.siteMetadata.siteUrl.replace(/\/$/, "")}/`).href;
  const socialDefault = toAbsoluteUrl(openGraphImage || defaultSocialImage);
  const socialTwitter = toAbsoluteUrl(
    twitterOpenGraphImage || openGraphImage || defaultSocialImage
  );
  const pageUrl = new URL(canonical || pathname, site.siteMetadata.siteUrl);
  pageUrl.search = "";
  pageUrl.hash = "";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: pageUrl.href,
        },
        {
          property: `og:site_name`,
          content: `Kidney Institute of the Desert`,
        },
        {
          property: `og:image`,
          content: socialDefault,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: socialTwitter,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s`}
    >
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
  twitterOpenGraphImage: PropTypes.string,
  openGraphImage: PropTypes.string,
  canonical: PropTypes.string,
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SEO;
