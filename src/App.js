import React from "react";
import Section from "./components/Banner";
import Card from "./components/Card";

import banner from "./assets/homeBanner.webp";

const App = () => {
  return (
    <React.Fragment>
      <Section src={banner} text={true} />
      <div className="cardSection">
        <Card />
      </div>
    </React.Fragment>
  );
};

export default App;
