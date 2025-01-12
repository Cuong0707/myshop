import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage/Home";
import SignUpPage from "./pages/User/SignUp&SignInPage/SignUp";
import ProductPage from "./pages/User/ProductPage/ProductPage";
import { PopupProvider } from "./context/PopupContext";
import './App.css'
import ShoppingCart from "./pages/User/CartPage/CartPage";
import HomePageAdmin from "./pages/Admin/HomePageAdmin/HomePageAdmin";
import Charts from "./components/Admin/LineCharts/LineCharts";
import UserLayout from "./layouts/UserLayout/UserLayout";
import UsersManagerContent from "./pages/Admin/UsersManagerContent/UsersManagerContent";
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
                    </Route>
                    <Route path="/admin" element={<HomePageAdmin />} >
                        <Route path="dashboard" element={<Charts height={400} />} />
                        <Route path="usermanagement" element={<UsersManagerContent/>} />
                    </Route>
                </Routes>
            </Router>
        </PopupProvider>
    )
};

export default App;