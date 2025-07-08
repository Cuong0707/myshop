import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import { PopupProvider } from "./context/PopupContext";
import "./App.css";

const PageLoader = () => (
  <div id="preloader-active" className="show">
    <div className="preloader">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle"></div>
        <div className="preloader-img pere-text">
          <img src="/assets/img/icons/loder.webp" alt="loader" />
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <PopupProvider>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </PopupProvider>
  );
}

export default App;
