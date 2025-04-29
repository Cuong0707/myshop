import React from 'react';
import './Category.css';

function Category({ image, title }) {
    return (
        <div className="category slide-up-main">
            <img src={image} alt={title} />
            <div>
                <p className='slide-up-secondary'>{title}</p>
            </div>
        </div>
    );
}

export default Category;
