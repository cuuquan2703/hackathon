import React from "react";
import "./style.css";
const Button = ({ content,click }) => {
  return (
    <button
      className="nav-link"
      id="pills-projects-tab"
      data-toggle="pill"
      role="tab"
      aria-controls="pills-projects"
      aria-selected="true"
      onClick = {click}
    >
      {content}
    </button>
  );
};

export default Button;
