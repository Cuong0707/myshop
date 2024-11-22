import React, {useEffect} from "react";
import "./GlobalPopup.css";

const GlobalPopup = ({message,onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(onAnimationEnd, 4000); // Đợi cho đến khi animation kết thúc
    return () => clearTimeout(timer);
  }, [message, onAnimationEnd]);
  if (!message) {
    return null;
  }
  return (
    
      <div className="global-popup">
        <div className="popup-content">{message}</div>
      </div>
  );
};

export default GlobalPopup;
