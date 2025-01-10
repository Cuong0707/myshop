import React, { useState, useRef, useEffect } from 'react';
import AsideMenu from '../../../components/Admin/AsideMenu/AsideMenu';
import { Outlet } from 'react-router-dom';
import './HomePageAdmin.css'; // Đảm bảo bạn đã nhập file CSS của bạn

const HomePageAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768 ? true : false); // Bắt đầu với menu mở
    const asideRef = useRef(null);

    // Hàm toggle để mở/đóng menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); // Sử dụng giá trị trước đó để tránh vấn đề bất đồng bộ
        console.log("Menu is open:", !isMenuOpen); // Ghi log giá trị menu
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Kiểm tra xem nhấp chuột có ở ngoài menu không
            if (asideRef.current && !asideRef.current.contains(event.target)) {
                if (window.innerWidth <= 768) {
                    setIsMenuOpen(false); // Đóng menu chỉ khi màn hình lớn hơn hoặc bằng 768px
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Dọn dẹp sự kiện khi component unmount
        };
    }, []); // Chỉ cần chạy lần đầu tiên

    return (
        <div className="homepage-admin">
            {/* Phần tiêu đề đã bị comment */}
            <div className="content">
                <div ref={asideRef} className={`aside ${isMenuOpen ? "active" : ""}`}>
                    <div className='logo'>
                        <h3>MyShop</h3>
                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                                width="20"
                                height="20"
                                role="img"
                                aria-label="Menu">
                                <rect width="80" height="10" fill="black" rx="5" transform="translate(0 35) rotate(45 40 40)" />
                                <rect width="80" height="10" fill="black" rx="5" transform="translate(0 35) rotate(-45 40 40)" />
                            </svg>
                        </button>
                    </div>
                    <AsideMenu />
                </div>
                <main className={`main ${isMenuOpen ? "shifted" : ""}`}>
                    <div className="user-info">
                        <h2>User</h2>
                    </div>
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 80"
                            width="20"
                            height="20"
                            role="img"
                            aria-label="Menu">
                            <rect width="100" height="10" fill="black" rx="5"></rect>
                            <rect y="30" width="100" height="10" fill="black" rx="5"></rect>
                            <rect y="60" width="100" height="10" fill="black" rx="5"></rect>
                        </svg>
                    </button>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default HomePageAdmin;
