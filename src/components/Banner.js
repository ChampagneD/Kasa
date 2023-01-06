import React from "react";
import "../style/Banner.css";

const Section = ({src, text}) => {
  return (
    <section className="bannerHome">
      <div className="bannerDiv">
        <img src={src} alt="Banner home" />
      </div>
      { text &&
        <h1>Chez vous, partout et ailleurs</h1>
      } 
    </section>
  );
};
export default Section;