import React from "react";
import Blog from "./Blog";

const style = {
  bloglistContainer: {
    marginBottom: "25px",
    marginTop: "25px",
    borderBottom: "2px solid #f1f4f8",
  },
};

export default function BlogListing({ blogs, search: Search }) {
  return (
    <>
      {Search && (
        <div className="mb-4">
          <Search />
        </div>
      )}
      <div className="columns is-multiline">
        {blogs.map(({ id, frontmatter }) => (
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
            />
          </div>
        ))}
      </div>
    </>
  );
}
