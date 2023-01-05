import React from "react";
import "../style/Tags.css";

const Tags = ({ tags }) => {
  return tags.map((tag) => {
    return (
      <div className="tag">
        <p className="tagText">{tag}</p>
      </div>
    );
  });
};
export default Tags;
