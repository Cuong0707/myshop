import React, { useState } from 'react';
import AsideMenu from '../../../components/Admin/AsideMenu/AsideMenu';
import { Outlet } from 'react-router-dom';
import './HomePageAdmin.css'; // Make sure to import your CSS file

const HomePageAdmin = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`homepage-admin ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            <header>
                <h1>Admin Dashboard</h1>
            </header>
            <div className="content">
                <AsideMenu />
                <main>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
                    </button>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default HomePageAdmin;