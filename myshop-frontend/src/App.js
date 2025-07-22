import React, { Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import { PopupProvider } from "./context/PopupContext";
import { PageLoader } from "./loaders/PageLoader";
import "./App.css";

function App() {
  // useEffect(() => {
  //   const loading = document.getElementById("root-loading");
  //   if (loading) loading.style.display = "none";
  // }, []);
  return (
    <PopupProvider>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>

    </PopupProvider>
  );
}

export default App;
