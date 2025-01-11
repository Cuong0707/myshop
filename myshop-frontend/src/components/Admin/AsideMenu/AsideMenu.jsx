import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AsideMenu.css';

const AsideMenu = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);

    const handleClick = (path) => {
        setSelected(path);
    };

    return (
        <aside className="aside-menu">
            <ul>
                <li className={selected === '/admin/dashboard' ? 'active' : ''}>
                    <Link to="/admin/dashboard" onClick={() => handleClick('/admin/dashboard')}>Dashboard</Link>
                </li>
                <li className={selected === '/admin/usermanagement' ? 'active' : ''}>
                    <Link to="/admin/usermanagement" onClick={() => handleClick('/admin/usermanagement')}>User Management</Link>
                </li>
                <li className={selected === '/admin/revenue' ? 'active' : ''}>
                    <Link to="/admin/revenue" onClick={() => handleClick('/admin/revenue')}>Revenue</Link>
                </li>
                <li className={selected === '/admin/orders' ? 'active' : ''}>
                    <Link to="/admin/orders" onClick={() => handleClick('/admin/orders')}>Orders</Link>
                </li>
                <li className={selected === '/admin/products' ? 'active' : ''}>
                    <Link to="/admin/products" onClick={() => handleClick('/admin/products')}>Products</Link>
                </li>
                <li className={selected === '/admin/settings' ? 'active' : ''}>
                    <Link to="/admin/settings" onClick={() => handleClick('/admin/settings')}>Settings</Link>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;