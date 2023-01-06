import React from "react";

import Section from "../components/Banner";

import banner from "../assets/aboutBanner.webp"

const About = () => {
  return (
    <React.Fragment>
      <Section src={banner} />
    </React.Fragment>
  );
};

export default About;
