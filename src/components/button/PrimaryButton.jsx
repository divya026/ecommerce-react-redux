import React from "react";
import "./PrimayButton.css";

const PrimaryButton = ({ name, onClick }) => {
  return (
    <div>
      <button className="primary-button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
