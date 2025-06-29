import React, { createContext, useState, useContext } from "react";
import GlobalPopup from "../components/Global/GlobalPopup/GlobalPopup";

const PopupContext = createContext();

export const usePopup = () => {
    return useContext(PopupContext);
  };

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(null); 
    const [animationKey, setAnimationKey] = useState(0);
    const handleAnimationEnd = () => {
      setPopup(null); // Reset popup khi animation kết thúc
    };
    const showPopup = (message) => {
      setPopup(null); // Ngắt popup hiện tại ngay lập tức
      setTimeout(() => {
        // Đảm bảo popup cũ bị hủy trước khi hiển thị popup mới
        setAnimationKey((prev) => prev + 1); // Cập nhật key để làm mới animation
        setPopup(message); // Hiển thị popup mới
      }, 0);
    };
  return (
    <PopupContext.Provider value={{ popup, setPopup: showPopup }}>
      {children}
      {popup && (
        <GlobalPopup
          key={animationKey} // Làm mới animation mỗi khi popup thay đổi
          message={popup}
          onAnimationEnd={handleAnimationEnd}
        />
      )}
    </PopupContext.Provider>
  );
};

