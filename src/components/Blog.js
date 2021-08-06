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

export default function Blog({ title, date, subtitle, slug, coverImage }) {
  return (
    <>
      <div className="content is-normal blog-list">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-align-content-center is-centered is-1">
            <GatsbyImage image={getImage(coverImage)} alt={slug} />
          </div>
          <div className="column is-11">
            <div className="head-wrapper mb-2">
              <h3 className="post-title" to={`/blogs/${slug}`}>
                {title}
              </h3>
              <time style={style.time} dateTime={style.time}>
                {date}
              </time>
            </div>
            <p style={style.description}>{subtitle}</p>
            {/* <Link className="button is-black is-small" to={`/blogs/${slug}`}>
              Continue reading
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
