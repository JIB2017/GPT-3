import React from "react";
import "./feature.css";

const Feature = ({ title, description }) => {
  return (
    <div className="gpt3__features-containers__feature">
      <div className="gpt3__features-containers__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-containers__feature-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
