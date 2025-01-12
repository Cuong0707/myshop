import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AsideMenu.css';

const AsideMenu = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    useEffect(() => {
        setSelected(location.pathname);
    }, [location.pathname]);
    const menuItems = useMemo(() => [
        { path: '/admin/dashboard', label: 'Dashboard' },
        { path: '/admin/usermanagement', label: 'User Management' },
        { path: '/admin/revenue', label: 'Revenue' },
        { path: '/admin/orders', label: 'Orders' },
        { path: '/admin/products', label: 'Products' },
        { path: '/admin/settings', label: 'Settings' },
    ], []);

    return (
        <aside className="aside-menu">
            <ul>
                {menuItems.map(item => (
                    <li key={item.path} className={selected === item.path ? 'active' : ''}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default React.memo(AsideMenu);