import React from "react";

const style = {
  footerStyle: {
    textDecoration: "underline",
    fontWeight: "600",
  },
};

function Copyright() {
  return (
    <footer>
      <p style={style.footerStyle}>
        Facundo Lopez - {new Date().getFullYear()}
        {"."}
      </p>
    </footer>
  );
}

export default function Footer(props) {
  return (
    <footer>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
          </div>
        </nav>
      </div>
    </footer>
  );
}
