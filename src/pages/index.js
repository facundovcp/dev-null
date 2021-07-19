import React from "react";
import Layout from "../components/Layout";
// import { graphql, Link } from "gatsby";
import LatestBlogs from "../components/LatestBlogs";
import BlogByMonth from "../components/BlogByMonth";
import Seo from "../components/Seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function IndexPage() {
  return (
    <Layout>
      <Seo
        title="Home"
        description="dev/null is aiming to be my personal blog to disclose my knowledge"
      />
      <LatestBlogs></LatestBlogs>
      <BlogByMonth></BlogByMonth>
    </Layout>
  );
}
