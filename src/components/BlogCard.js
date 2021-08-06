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
    <div
      className="card"
      onClick={() => {
        navigate(`/blogs/${slug}`);
      }}
    >
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-image">
        <GatsbyImage image={getImage(cardImage)} alt={slug} />
      </div>
      <div className="card-content">
        <div className="content">
          <p>{subtitle}</p>
          <br />
          <time dateTime="2016-1-1">{date}</time>
        </div>
      </div>
      {/* <p style={style.description}>{subtitle}</p>
      <Link className="button is-black is-small" to={`/blogs/${slug}`}>
        Continue reading
      </Link> */}
    </div>
  );
}
