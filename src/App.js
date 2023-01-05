import React from "react";
import Section from "./components/Banner";
import Card from "./components/Card";

const App = () => {
  return (
    <React.Fragment>
      <Section />
      <div className="cardSection">
        <Card />
      </div>
    </React.Fragment>
  );
};

export default App;
