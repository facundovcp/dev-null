import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogListing from "./BlogListing";
import SearchContainer from "./SearchContainer";

export default function BlogByMonth() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        skip: 0
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
                  width: 75
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

  //ADD CARD IMAGE
  console.log(data.allMarkdownRemark);
  console.log(data);
  debugger;
  return (
    <>
      <div className="columns is-gapless">
        <div className="column is-2"></div>
        <div className="column is-8">
          <SearchContainer></SearchContainer>
          <BlogListing blogs={data.allMarkdownRemark} />
        </div>
        <div className="column is-2"></div>
      </div>
      {/* <p className="latestArticles">More Entries:</p> */}
    </>
  );
}
