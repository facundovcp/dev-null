import React from "react";
import BlogCard from "./BlogCard";

const style = {
  bloglistContainer: {
    marginBottom: "2%",
    marginTop: "2%",
    borderBottom: "1px solid grey",
  },
};

export default function BlogCards({ blogs, search: Search }) {
  const blogsData = blogs.nodes;
  return (
    <>
      <div className="columns is-multiline">
        {blogsData.map(({ id, frontmatter }) => (
          <div key={id} className="column is-4" style={style.bloglistContainer}>
            <BlogCard
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
