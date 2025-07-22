import React, { useState } from 'react';
import './CheckoutPage.css'
import { useCart } from '../../../context/CartContext';
import { usePopup } from '../../../context/PopupContext';
import Breadcrumb from '../../../components/Global/Breadcrumb/Breadcrumb';
import { checkoutOrder } from '../../../services/orderService.jsx';
import { useNavigate } from 'react-router-dom';
const CheckoutPage = () => {
    const navigate = useNavigate();
    const { setPopup } = usePopup();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        paymentMethod: '2'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleCheckOut = async (e) => {
        e.preventDefault();
        const checkoutData = {
            ...formData,
            products: cart.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item.price
            }))
        };
        try {
            const res = await checkoutOrder(checkoutData, clearCart);
            if (res.success) {
                console.log("Checkout successful:", res);
                setPopup("✅ Thanh toán thành công: " + res.message);
                navigate(`/thankyou?orderId=${res.data.orderId}`);
            } else {
                setPopup("⚠️ Có lỗi khi xử lý đơn hàng: " + res.message);
            }
        } catch (err) {
            const errMsg = err?.response?.data?.message || "Đã xảy ra lỗi không xác định.";
            setPopup("❌ Lỗi khi thanh toán: " + errMsg);
        }
    };

    return (
        <>
            <div className="dropdown-products">
                <button onClick={toggleMenu} className='btn-checkout-products'>
                    ☰
                    <span>Hide/Show Order Summary</span>
                </button>
                <div className={`checkout-products ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.productId}>
                                <div className='group-product-checkout'>
                                    <div className='img-product-checkout'>
                                        <img src={item.imageUrl} alt={item.name} />
                                        <div className="quantity-product-checkout">
                                            <p>{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="name-product-checkout">
                                        <p>{item.name}</p>
                                        <p>{item.description}</p>
                                        <span>Size: ...</span>
                                    </div>
                                    <div className='price-product-checkout'>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="checkout-container">
                <form
                    action="/checkout"
                    className="checkout-form checkout-colunm"
                    onSubmit={handleCheckOut}
                >
                    {/* Điền thông tin */}
                    <div className="left-colunm">
                        <div className="checkout-info">
                            <div className="header-checkout-info">
                                <img src="/assets/images/ella.jpg" alt="Ella Fashion Store Logo" className="logo-img" />
                                <Breadcrumb />
                            </div>
                            <div className="content-checkout-info">
                                <div className="contact-info">
                                    <label >Contact Infomation</label>
                                    <input
                                        type="email"
                                        placeholder='Your email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className='checkout-checkbox'>
                                        <input
                                            type="checkbox"
                                        />
                                        <p>Keep me up to date on news and exclusive offers</p>
                                    </div>
                                </div>
                                <div className="shipping-address">
                                    <label >Shipping Address</label>
                                    <div className="fullname">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder='First name'
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder='Last name'
                                            required
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder='Full address'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder='Your phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type='submit'>Continue to shipping</button>
                            </div>
                        </div>
                    </div>
                    {/* phần hiển thị sản phẩm trong giỏ hàng */}
                    <div className="right-colunm">
                        <div className='checkout-products'>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.productId}>
                                        <div className='group-product-checkout'>
                                            <div className='img-product-checkout'>
                                                <img src={item.imageUrl} alt={item.name} />
                                                <div className="quantity-product-checkout">
                                                    <p>{item.quantity}</p>
                                                </div>
                                            </div>
                                            <div className="name-product-checkout">
                                                <p>{item.name}</p>
                                                <p>{item.description}</p>
                                                <span>Size: ...</span>
                                            </div>
                                            <div className='price-product-checkout'>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default CheckoutPage;