import React from "react";
import { Link } from "gatsby";

const style = {
  time: {
    fontSize: "14px",
    fontFamily: "'DM Mono', monospace",
  },
};

export default function Blog({ title, date, subtitle, slug }) {
  return (
    <>
      <div className="content is-normal">
        <div className="head-wrapper mb-2">
          <h2 className="post-title">{title}</h2>
          <time style={style.time} dateTime={style.time}>
            {date}
          </time>
        </div>
        <p>{subtitle}</p>
        <Link className="button is-black is-small" to={`/blogs/${slug}`}>
          Continue reading
        </Link>
      </div>
    </>
  );
}
