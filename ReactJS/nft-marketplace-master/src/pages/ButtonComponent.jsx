import React from "react";
import { yourFunction } from "./functions";

const ButtonComponent = () => {
  return (
    <button
      onClick={() => {
        yourFunction();
      }}
      className="stylish-button"
    >
      Add NFT
    </button>
  );
};

export default ButtonComponent;
