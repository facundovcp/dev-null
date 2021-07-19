import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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

export default function BlogCard({ title, date, subtitle, slug, coverImage }) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-image">
        <figure className="image is-4by1">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
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
