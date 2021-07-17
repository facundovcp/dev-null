import React from "react";
import Blog from "./Blog";

const style = {
  bloglistContainer: {
    marginBottom: "2%",
    marginTop: "2%",
    borderBottom: "1px solid grey",
  },
};

export default function BlogListing({ blogs, search: Search }) {
  const blogsData = blogs.nodes;
  return (
    <>
      {Search && (
        <div className="mb-4">
          <Search />
        </div>
      )}
      <div className="columns is-multiline">
        {blogsData.map(({ id, frontmatter }) => (
          <div
            key={id}
            className="column is-12"
            style={style.bloglistContainer}
          >
            <Blog
              title={frontmatter.title}
              subtitle={frontmatter.subtitle}
              slug={frontmatter.slug}
              date={frontmatter.date}
              coverImage={frontmatter.coverImage}
            />
          </div>
        ))}
      </div>
    </>
  );
}
