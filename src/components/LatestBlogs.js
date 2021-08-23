import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogCards from "../components/BlogCards";
import BlogCarousel from "../components/BlogCarousel";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const height = window.innerHeight;

export default function LatestBlogs() {
  getWindowDimensions();
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
                  width: 75
                  blurredOptions: { width: 50 }
                  placeholder: BLURRED
                )
              }
            }
            cardImage {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 50 }
                  height: 400
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
    <div
      id="main"
      style={{
        height: "100%",
      }}
    >
      {/* <p className="latestArticles">Latest Articles:</p> */}
      <div className="latestLabel">
        <p>Latest on dev/null</p>
      </div>
      {/* <BlogCards blogs={blogData} /> */}
      <div className="columns">
        <div className="column is-2"></div>
        <div className="column is-8">
          <BlogCarousel blogs={blogData}></BlogCarousel>
        </div>
        {/* <div className="column is-5"></div> */}
        <div className="column is-2"></div>
      </div>
    </div>
  );
}
