import React from 'react';
import { Link } from 'react-router-dom';
import './AsideMenu.css';

const AsideMenu = () => {
    return (
        <aside className="aside-menu">
            <ul>
                <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/user-management">User Management</Link>
                </li>
                <li>
                    <Link to="/admin/revenue">Revenue</Link>
                </li>
                <li>
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin/products">Products</Link>
                </li>
                <li>
                    <Link to="/admin/settings">Settings</Link>
                </li>
            </ul>
        </aside>
    );
};

export default AsideMenu;