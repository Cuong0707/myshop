import React from 'react';
import Item from '../Item/Item';
import './Products.css' 
import DropdownMenu from '../../Global/GlobalDropdownMenu/DropdownMenu';
function Products() {
    const item = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    return (
        <div className='main-product'>
            <div className='select'>
                <DropdownMenu categories={item} title="CATEGORIES"/>
            </div>
            <div className='items'>

            </div>
        </div>
    )
}

export default Products;
