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
    const [isVisible, setIsVisible] = useState(false); // trạng thái hiển thị
    useEffect(() => {
        if (popup) {
          setIsVisible(true); // Bắt đầu hiển thị popup
          const timer = setTimeout(() => {
            setIsVisible(false); // Ẩn popup sau 3 giây
          }, 3000); // 3 giây sau sẽ ẩn
    
          // Dọn dẹp khi component unmount hoặc popup thay đổi
          return () => clearTimeout(timer);
        }
      }, [popup]);

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
      {isVisible && <GlobalPopup message={popup} />}
    </PopupContext.Provider>
  );
};

