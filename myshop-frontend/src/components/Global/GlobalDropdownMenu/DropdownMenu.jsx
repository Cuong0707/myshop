import React, { useState } from 'react';
import './DropdownMenu.css'
const DropdownMenu = ({ title, items, onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <div className="menu-header" onClick={toggleMenu}>
                {title}
            </div>
            <hr />
            <div className={`menu-items ${isOpen ? 'show' : 'hide'}`}>
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        onClick={() => onItemClick(item)} 
                        className="menu-item"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
