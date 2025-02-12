import React, { useState, useEffect } from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const images = [
    'assets/images/banner.jpg',
    'assets/img/banner/banner1.jpg',
    'assets/img/banner/banner2.jpg',
    'assets/img/banner/banner3.jpg',
    'assets/img/banner/banner4.jpg',
    'assets/img/banner/banner5.jpg',
  ];

  // Thêm ảnh clone của ảnh đầu tiên vào cuối mảng
  const slides = [...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Xử lý khi chuyển đến ảnh clone
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      // Khi đến ảnh clone cuối, chuyển ngay về ảnh thật đầu tiên mà không có hiệu ứng
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Thời gian chờ bằng thời gian chuyển động (1s)
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length]);

  return (
    <div>
      <div className="slider-wrapper">
        <button className="slider-btn left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="slider-container">
          {slides.map((img, index) => (
            <img
              loading="lazy"
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning ? 'transform 1s' : 'none',
              }}
              key={index}
            />
          ))}
        </div>
        <button className="slider-btn right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="blog-container"></div>
    </div>
  );
};

export default BlogPage;