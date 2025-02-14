import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu({ title, items, onItemClick }) {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        if (selectedItem === item ) {
            setSelectedItem(null); // Bỏ chọn nếu nhấp lại vào mục đã chọn
            onItemClick(title,null); // Gọi hàm onItemClick với giá trị null
        } else {
            setSelectedItem(item); // Chọn mục mới
            onItemClick(title,item); // Gọi hàm onItemClick với mục mới
        }
        
    };

    return (
        <div className="menu-container">
            <div className="menu-header" onClick={toggleMenu}>
                {title}
            </div>
            <div className={`menu-items ${isOpen ? 'show' : 'hide'}`}>
                {items.map((item) => (
                    <div 
                        key={item} 
                        onClick={() => handleItemClick(item)}
                        className={`menu-item ${selectedItem === item ? 'selected' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropdownMenu;