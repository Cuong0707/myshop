import {
    createBrowserRouter,
    Navigate,
} from "react-router-dom";
import React, { lazy } from "react";
import UserLayout from "../layouts/UserLayout/UserLayout";
import HomePage from "../pages/User/HomePage/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import HomePageAdmin from "../pages/Admin/HomePageAdmin/HomePageAdmin";
import DashBoardContent from "../pages/Admin/DashBoardContent/DashBoardContent";
import UsersManagerContent from "../pages/Admin/UsersManagerContent/UsersManagerContent";
import { productsLoader } from "../loaders/productsLoader";
import withSupense from "../utils/withSuspense.jsx";

const SignUpPage = lazy(() => import("../pages/User/SignUp&SignInPage/SignUp"));
const ProductPage = lazy(() => import("../components/User/Products/Products"));
const ShoppingCart = lazy(() => import("../pages/User/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("../pages/User/CheckoutPage/CheckoutPage"));
const CollectionPage = lazy(() => import("../pages/User/CollectionPage/CollectionPage"));
const BlogPage = lazy(() => import("../pages/User/BlogPage/BlogPage"));
const ThankyouPage = lazy(() => import("../pages/User/ThankyouPage/ThankyouPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element:
                    withSupense(HomePage),

            },
            {
                path: "signup",
                element: withSupense(SignUpPage),
            },
            {
                path: "signin",
                element: withSupense(SignUpPage),
            },
            {
                path: "shop",
                element:
                    withSupense(ProductPage),
                loader: productsLoader,
                errorElement: <NotFoundPage />,
            },
            {
                path: "cart",
                element: withSupense(ShoppingCart),
            },
            {
                path: "cart/checkout",
                element: withSupense(CheckoutPage),
            },
            {
                path: "collections",
                element: withSupense(CollectionPage),
            },
            {
                path: "blog",
                element:
                    withSupense(BlogPage),
            },
            {
                path: "thankyou",
                element: withSupense(ThankyouPage),
            },
            {
                path: "*",
                element: withSupense(NotFoundPage),
            },
        ],
    },
    {
        path: "/admin",
        element: <HomePageAdmin />,
        children: [
            {
                index: true,
                element: <Navigate to="/admin/dashboard" />,
            },
            {
                path: "dashboard",
                element: <DashBoardContent />,
            },
            {
                path: "usermanagement",
                element: <UsersManagerContent />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
],
    {
        future: {
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_skipActionErrorRevalidation: true,
            v7_partialHydration: true,
        },
    }

);
