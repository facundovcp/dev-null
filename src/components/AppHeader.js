import React from "react";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";

const style = {
  title: {
    fontFamily: "'Roboto Condensed', sans-serif",
  },
};

export default function AppHeader({ seo }) {
  return (
    <nav className="navbar is-transparent mb-5 p-5">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1 className="title" style={style.title}>
            {"<dev/null>"}
          </h1>
        </Link>
        <div
          className="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/blogs">
            Articles
          </Link>
          <Link className="navbar-item" to="/about">
            About me
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <ThemeToggle className="is-flex is-align-self-center mr-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
