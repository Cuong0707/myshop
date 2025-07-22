import React from 'react';
import './PageLoader.css'; 
export const PageLoader = () => (
  <div id="preloader-active" className="show">
    <div className="preloader">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle"></div>
        <div className="preloader-img pere-text">
          <img src="/assets/img/icons/loder.webp" alt="loader" />
        </div>
      </div>
    </div>
  </div>
);