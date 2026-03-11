import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";
import AdminLayout from "./layouts/AdminLayout";
import Order from "./views/Order";
import Product from "./views/Product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            }
        ]
    },
    {
        // path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="login" />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="order" />
            },
            { 
                path: 'order', 
                element: <Order /> 
            },
            { 
                path: 'product', 
                element: <Product /> 
            }
        ]
    }
]);

export default router;
