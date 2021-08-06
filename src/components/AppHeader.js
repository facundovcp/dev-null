import React from "react";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";
import SearchContainer from "./SearchContainer";
import { StaticImage } from "gatsby-plugin-image";
const style = {
  title: {
    fontFamily: "'Press Start 2P', sans-serif",
    fontSize: "32px",
    paddingTop: "2px",
  },
};

const img = "../images/dev-null-logo-white.png";

export default function AppHeader({ seo }) {
  return (
    <nav className="navbar is-transparentp-4">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <StaticImage
            src={"../images/dev-null-logo-white.png"}
            width="40"
            height="40"
          />
          {/* <h1 className="title reveal-text" style={style.title}>
            {"<dev/null>"}
          </h1> */}
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

      <div
        id="navbarExampleTransparentExample"
        className="navbar-menu is-vcentered"
      >
        <div className="navbar-start">
          {/* <Link className="navbar-item" to="/blogs">
            Articles
          </Link> */}
          {/* <Link className="navbar-item" to="/about">
            About me
          </Link> */}
        </div>
        <div className="navbar-end ">
          <div className="navbar-item">
            <div className="field is-grouped">
              <SearchContainer className="is-flex is-align-self-center mr-5" />
            </div>
          </div>
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
