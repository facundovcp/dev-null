import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import BlogListing from "../components/BlogListing";
import Seo from "../components/Seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function IndexPage({ data, pageContext }) {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <Seo
        title="Home"
        description="dev/null is aiming to be my personal blog to disclose my knowledge"
      />
      <div className="p-4">
        <p className="latestArticles">Latest Articles:</p>
        <BlogListing
          blogs={nodes}
          // search={() => (
          //   <SearchContainer searchIndex={pageContext.searchIndex} />
          // )}
        />
        <Link className="button is-black is-small" to="/blogs">
          Read more blogs...
        </Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
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
        }
      }
    }
  }
`;
