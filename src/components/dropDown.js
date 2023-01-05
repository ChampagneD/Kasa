import React, { useState } from "react";

// Styles
import "../style/dropDown.css";
import arrowDown from "../assets/chevronDown.svg";

const useDropDownMenu = ({ title, content }) => {
  const [visible, setVisible] = useState(false);

  console.log("here");
  return (
    <div className="dropDown">
      <div className="dropDown_title" onClick={() => setVisible(!visible)}>
        <p>{title}</p>
        <img
          onClick={() => setVisible(!visible)}
          src={arrowDown}
          alt="arrowDown"
          className={`dropDown_arrowDown ${visible ? "visible" : ""}`}
        />
      </div>
      <div className={`dropDown_content ${visible ? "visible" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((equipement, index) => {
              return <li key={index}>{equipement}</li>;
            })}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default useDropDownMenu;
