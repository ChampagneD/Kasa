import React from "react";
import "../style/Tags.sass";

const Tags = ({ tags }) => {
  return tags.map((tag, index) => {
    return (
      <div className="tag" key={index}>
        <p className="tagText">{tag}</p>
      </div>
    );
  });
};
export default Tags;
