import React from "react";
import banner from "../assets/homeBanner.png";
import "../style/Banner.css";

const Section = () => {
  return (
    <section className="bannerHome">
      <div className="bannerDiv">
        <img src={banner} alt="Banner home" />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
};
export default Section;
