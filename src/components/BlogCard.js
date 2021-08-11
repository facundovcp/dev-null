import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const style = {
  time: {
    fontSize: "14px",
    fontFamily: "'DM Mono', monospace",
    marginLeft: "5px",
  },
  description: {
    marginLeft: "5px",
  },
};

export default function BlogCard({
  title,
  date,
  subtitle,
  slug,
  coverImage,
  cardImage,
}) {
  return (
    <>
      {/* <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header> */}
      <div
        onClick={() => {
          navigate(`/blogs/${slug}`);
        }}
        style={{
          height: "175px",
          width: "100%",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <GatsbyImage
          style={{
            maxHeight: 175,
            minHeight: 175,
            minWidth: "100%",
            display: "block",
          }}
          image={getImage(cardImage)}
          alt={slug}
        />
      </div>
      <div
        style={{
          height: "125px",
          width: "100%",
          display: "flex",
          cursor: "pointer",
          backgroundColor: "black",
        }}
      ></div>
    </>
  );
}
