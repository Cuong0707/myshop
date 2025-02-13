// import React, { useState } from 'react';
// import './BlogPage.css';

// const BlogPage = () => {
//   const images = [
//     'assets/img/banner/banner1.jpg',
//     'assets/img/banner/banner2.jpg',
//     'assets/img/banner/banner3.jpg',
//     'assets/img/banner/banner4.jpg',
//     'assets/img/banner/banner5.jpg',
//   ];


//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };



//   return (
//     <div>
//       <div className="slider-wrapper">
//         <button className="slider-btn left" onClick={prevSlide}>
//           &lt;
//         </button>
//         <div className="slider-container" role="listbox">
//           {images.map((img, index) => (
//             <div className="slider-image" key={index} role = "option">
//               <img
//                 loading="lazy"
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                   transition: 'transform 1s',
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//         <button className="slider-btn right" onClick={nextSlide}>
//           &gt;
//         </button>
//       </div>
//       <div className="blog-container"></div>
//     </div>
//   );
// };

// export default BlogPage;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogPage.css";

const BlogPage = () => {
  // Nút Previous
  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
      ◀
    </button>
  );

  // Nút Next
  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
      ▶
    </button>
  );
  const images = [
    "/assets/img/banner/banner1.jpg",
    "/assets/img/banner/banner2.jpg",
    "/assets/img/banner/banner3.jpg",
    "/assets/img/banner/banner4.jpg",
    "/assets/img/banner/banner5.jpg",
  ];

  const settings = {
    infinite: true,        // Cuộn vô hạn
    speed: 500,            // Tốc độ chuyển slide
    slidesToShow: 1,       // Hiển thị 3 ảnh
    slidesToScroll: 1,     // Cuộn từng ảnh một
    centerMode: true,      // Bật chế độ trung tâm
    centerPadding: "100px", // Padding để ảnh phụ hiển thị 1 phần nhỏ
    autoplay: true,        // Tự động chạy
    autoplaySpeed: 3000,   // Chạy mỗi 3 giây
    arrows: true,          // Hiển thị nút điều hướng
    dots: true,           // Tắt chấm tròn
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slider-item">
            <img src={img} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogPage;





