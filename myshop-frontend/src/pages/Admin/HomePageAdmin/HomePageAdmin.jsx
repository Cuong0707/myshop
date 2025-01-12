import React, { useState, useRef, useEffect } from 'react';
import AsideMenu from '../../../components/Admin/AsideMenu/AsideMenu';
import { Outlet } from 'react-router-dom';
import './HomePageAdmin.css';

const HomePageAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768 ? true : false);
    const asideRef = useRef(null);

    // Hàm toggle để mở/đóng menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); // Sử dụng giá trị trước đó để tránh vấn đề bất đồng bộ
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
    }, []);

    return (
        <div className="homepage-admin">
            <div className="content">
                <div ref={asideRef} className={`aside ${isMenuOpen ? "active" : ""}`}>
                    <div className='logo-admin-page'>
                        <a href="/">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/ella.jpg`} alt="Ella Fashion Store Logo" className="logo-img" />
                        </a>
                        <button className='close-button' onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                role="img"
                                aria-label="Menu">
                                <line x1="3" y1="3" x2="21" y2="21" stroke="black" strokeWidth="2" />
                                <line x1="3" y1="21" x2="21" y2="3" stroke="black" strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    <AsideMenu />
                </div>
                <main className={`main ${isMenuOpen ? "shifted" : ""}`}>
                    <div className="header-admin-page">
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
                    </div>
                    <div className="content-admin-page">
                        <Outlet /> 
                    </div>
                </main>
            </div>
        </div>
    );
};

export default React.memo(HomePageAdmin);
