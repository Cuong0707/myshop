import React from "react";
import "./GlobalPopup.css";

const GlobalPopup = ({message}) => {

  return (
    
      <div className="global-popup">
        <div className="popup-content">{message}</div>
      </div>
  );
};

export default GlobalPopup;
