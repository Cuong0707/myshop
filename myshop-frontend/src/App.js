import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage/Home";
import SignUpPage from "./pages/User/SignUp&SignInPage/SignUp";
import GlobalPopup from "./components/Global/GlobalPopup/GlobalPopup";
import { PopupProvider } from "./context/PopupContext";
import './App.css'
function App(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Dừng quan sát sau khi đã thấy
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.slide-in-right, .fade-left-right-text, .fade-right-left-text, .fade-left-right-image, .fade-right-left-image')
            .forEach(element => {
                observer.observe(element);
            });
    }, []);
    return(
        <PopupProvider>
            <GlobalPopup/>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/signin" element={<SignUpPage/>} />
                </Routes>
            </Router>
        </PopupProvider>
    )
};

export default App;