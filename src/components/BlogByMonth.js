import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogListing from "./BlogListing";

export default function BlogByMonth() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        skip: 3
      ) {
        nodes {
          id
          frontmatter {
            subtitle
            title
            slug
            date(formatString: "DD MMMM, YYYY")
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
  console.log(data.allMarkdownRemark);
  console.log(data);
  debugger;
  return (
    <>
      <BlogListing blogs={data.allMarkdownRemark} />
    </>
  );
}
