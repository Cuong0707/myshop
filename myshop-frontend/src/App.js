import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/User/HomePage/Home";
import SignUpPage from "./pages/User/SignUp&SignInPage/SignUp";
import ProductPage from "./pages/User/ProductPage/ProductPage";
import { PopupProvider } from "./context/PopupContext";
import './App.css'
import ShoppingCart from "./pages/User/CartPage/CartPage";
import HomePageAdmin from "./pages/Admin/HomePageAdmin/HomePageAdmin";
import UserLayout from "./layouts/UserLayout/UserLayout";
import UsersManagerContent from "./pages/Admin/UsersManagerContent/UsersManagerContent";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DashBoardContent from "./pages/Admin/DashBoardContent/DashBoardContent";
import CheckoutPage from "./pages/User/CheckoutPage/CheckoutPage";
import CollectionPage from "./pages/User/CollectionPage/CollectionPage";
import BlogPage from "./pages/User/BlogPage/BlogPage";
import ThankyouPage from "./pages/User/ThankyouPage/ThankyouPage";

function App() {
    
    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries, observer) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('visible');
    //                 observer.unobserve(entry.target); // Dừng quan sát sau khi đã thấy
    //             }
    //         });
    //     }, { threshold: 0.5 });

    //     document.querySelectorAll('.slide-in-right, .fade-left-right-text, .fade-right-left-text, .fade-left-right-image, .fade-right-left-image')
    //         .forEach(element => {
    //             observer.observe(element);
    //         });
    // }, []);
    return (
        <PopupProvider >
            <Router >
                <Routes>
                    <Route element={<UserLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/signin" element={<SignUpPage />} />
                        <Route path="/shop" element={<ProductPage />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/cart/checkout" element={<CheckoutPage />} />
                        <Route path="/collections" element={<CollectionPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/thankyou" element={<ThankyouPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                    <Route path="/admin" element={<HomePageAdmin />} >
                        <Route index element={<Navigate to="/admin/dashboard" />} />
                        <Route path="dashboard" element={<DashBoardContent />} />
                        <Route path="usermanagement" element={<UsersManagerContent/>} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
        </PopupProvider>
    )
};

export default App;