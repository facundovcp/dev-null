import React from "react";
import Layout from "../components/Layout";
// import { graphql, Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import BlogCards from "../components/BlogCards";
import Seo from "../components/Seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function LatestBlogs() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
            subtitle
            author
            coverImage {
              childImageSharp {
                gatsbyImageData(
                  width: 100
                  blurredOptions: { width: 50 }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);

  const blogData = data.allMarkdownRemark;
  return (
    // <h1>Latest blogs</h1>
    <div className="p-4">
      <p className="latestArticles">Latest Articles:</p>
      <BlogCards blogs={blogData} />
    </div>
  );
}
