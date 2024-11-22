import React, { createContext, useState, useContext,useEffect } from "react";
import GlobalPopup from "../components/Global/GlobalPopup/GlobalPopup";
// Tạo context
const PopupContext = createContext();

export const usePopup = () => {
    return useContext(PopupContext);
  };
// Provider cho popup
export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null); // popup message
    const handleAnimationEnd = () => {
      setPopup(null); // Reset popup khi animation kết thúc
    };

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
      {popup && <GlobalPopup message={popup} onAnimationEnd={handleAnimationEnd}/>}
    </PopupContext.Provider>
  );
};

