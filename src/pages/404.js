import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // overflowY: "hidden",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <div className="space"></div>
      <div className="container-404">
        <div className="wrapper-404">
          <div className="blackhole">
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
            <div className="debris"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
