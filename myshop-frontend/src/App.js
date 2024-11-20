import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/User/HomePage/Home";
import SignUpPage from "./pages/User/SignUp&SignInPage/SignUp";
import GlobalPopup from "./components/Global/GlobalPopup/GlobalPopup";
import { PopupProvider } from "./context/PopupContext";
function App(){
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