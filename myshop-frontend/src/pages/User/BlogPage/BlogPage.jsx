

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Sử dụng bộ free-solid

import "./BlogPage.css";

const BlogPage = () => {
  // Nút Previous
  const PrevArrow = ({ onClick }) => (
    <button className="custom-arrow prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  // Nút Next
  const NextArrow = ({ onClick }) => (
    <button className="custom-arrow next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
  const images = [
    "/assets/img/banner/banner1.jpg",
    "/assets/img/banner/banner2.jpg",
    "/assets/img/banner/banner3.jpg",
    "/assets/img/banner/banner5.jpg",
  ];
  const blogs = [
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Get-Ready-for-KALKI-Fashions-Unbeatable-Ethnic-Sale-Deals-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/South-Indian-Wedding-Attire-The-Significance-of-Colors-2-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Kriti_Sanons_Indo_Western_Style_9_Looks_We_Cant_Stop_Obsessing-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Colour-Psychology-How-to-Choose-the-Perfect-Bridal-Outfit-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Gautam_Adanis_Son_Jeet_Adani_Weds_Diva_Shah_All_You_Need_To_Know-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/What-to-Expect-from-KALKI-Fashion-at-Bridal-Asia-2025-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Shop-Smarter-with-Video-Call-Shopping-Virtual-Styling-300x270.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/Jewellery-Accessories-that-Completes-Rajasthani-Bridal-Look-300x300.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/Look_No_Less_Than_A_Stunning_Diva_In_These_Bandhani_Salwar_Kameez-300x300.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2023/01/Happy-Bday-Deepika-Outfits-That-Cements-Her-Personality-300x300.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/South-Indian-Wedding-Attire-The-Significance-of-Colors-2-360x250.jpg",
    "https://www.kalkifashion.com/blogs/wp-content/uploads/2025/02/Colour-Psychology-How-to-Choose-the-Perfect-Bridal-Outfit-360x250.jpg",
  ];
  const settingsBanner = {
    infinite: true,        // Cuộn vô hạn
    speed: 500,            // Tốc độ chuyển slide
    slidesToShow: 1,       // Hiển thị 3 ảnh
    slidesToScroll: 1,     // Cuộn từng ảnh một
    centerMode: true,      // Bật chế độ trung tâm
    centerPadding: "15%", // Padding để ảnh phụ hiển thị 1 phần nhỏ
    autoplay: true,        // Tự động chạy
    autoplaySpeed: 3000,   // Chạy mỗi 3 giây
    arrows: true,          // Hiển thị nút điều hướng
    dots: true,           // Tắt chấm tròn
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const settingsBlogs = {
    infinite: true,       // Vòng lặp vô hạn
    speed: 1000,          // Tốc độ chuyển slide
    slidesToShow: 5,      // Số lượng div hiển thị cùng lúc
    slidesToScroll: 1,    // Cuộn từng div một
    autoplay: true,       // Tự động chạy
    autoplaySpeed: 3000,  // Chạy mỗi 2 giây
    arrows: false,        // Tắt nút điều hướng
    dots: true,          // Tắt chấm tròn
    pauseOnHover: true,
  };
  return (
    <div>
      <div className="slider-wrapper">
        <Slider {...settingsBanner}>
          {images.map((img, index) => (
            <div key={index} className="slider-item">
              <img src={img} alt={`Slide ${index}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="blog-container">
        <div className="blog-title">
          <h3>EVERYDAY FASHION</h3>
        </div>
        <div className="everyday-fashion-slider">
          <Slider {...settingsBlogs}>
            {blogs.map((blog, index) => (
              <div key={index}
                className="fashion-item">
                <img src={blog} alt={index} />
                {index + 1}
              </div>
            ))}
          </Slider>
        </div>
        <div className="blog-title">
          <h3>Celebrity Style</h3>
        </div>
        <div className="everyday-fashion-slider">
          <Slider {...settingsBlogs}>
            {[...Array(10)].map((_, index) => (
              <div key={index}
                className="fashion-item">
                {index + 1}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;





