import React from "react";
import "./PrimayButton.css";

const PrimaryButton = ({ name }) => {
  return (
    <div>
      <button className="primary-button">{name}</button>
    </div>
  );
};

export default PrimaryButton;
