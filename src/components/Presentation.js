import React from "react";
import * as styles from "./Presentation.module.scss";

export default function Presentation({ seo }) {
  return (
    <>
      <div className={`${styles.galaxycontainer} is-desktop`}>
        <div className={`${styles.galaxy}`}></div>
        <div className={`${styles.transparent1}`}>
          <div className="container p-6">
            {/* <h1 className="devnullintro">Welcome to</h1> */}
            <h1 className="devnulltitle reveal-text">{"<dev/null>"}</h1>
            <p className="devnullintrotext">
              Hi, my name is Facundo and I want to tell you welcome to dev/null.
              <br></br> This is my personal site where you can find all my
              content in a much better organized way.<br></br>
              The main idea of this project is to share my knowledge about
              programming<br></br>
              based on my opinion and experience.<br></br>I hope that you will
              find useful information in the different articles, and I encourage
              <br></br> to the reader to leave comments with any questions.{" "}
              <br></br>
              <br></br>
              If you want to know more <a>about me.</a>
              <br></br>
              Also you can check the shortcuts of the page by{" "}
              <a>clicking here.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
