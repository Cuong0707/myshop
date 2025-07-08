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
                element: <HomePage />,

            },
            {
                path: "signup",
                element: <SignUpPage />,
            },
            {
                path: "signin",
                element: <SignUpPage />,
            },
            {
                path: "shop",
                element: <ProductPage />,
                loader: productsLoader,
                errorElement: <NotFoundPage />,
            },
            {
                path: "cart",
                element: <ShoppingCart />,
            },
            {
                path: "cart/checkout",
                element: <CheckoutPage />,
            },
            {
                path: "collections",
                element: <CollectionPage />,
            },
            {
                path: "blog",
                element: <BlogPage />,
            },
            {
                path: "thankyou",
                element: <ThankyouPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
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
