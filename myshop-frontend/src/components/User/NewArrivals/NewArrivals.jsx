import React, {useState, useEffect} from 'react';
import './NewArrivals.css'; // Nhập CSS cho NewArrivals nếu cần
import Item from '../Item/Item';
import { usePopup } from '../../../context/PopupContext';
import {fetchProducts} from '../../../services/productService'
function NewArrivals() {
    const [products, setProducts] = useState([]);
    const { setPopup } = usePopup();

    useEffect(()=>{
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(0, 4); // Offset 0, limit 6
                setProducts(data);
            } catch (error) {
                setPopup(error.message);
            }
        }
        loadProducts();
    },[setPopup])
    
    
    return (
        <section className="new-arrivals slide-in-right">
            <div className="title-arrivals">
                <hr /><h2>New Arrivals</h2><hr />
            </div>
            <div className="products">
                {products.map((product) => (
                    <Item key={product.productId} product={product} />
                ))}
            </div>
            <button className="show-more">Show More</button>
        </section>
    );
}

export default NewArrivals;
