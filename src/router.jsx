import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Authlayout from "./layouts/Authlayout";
import Index from "./views/Index";
import Login from "./views/Login";
import Register from "./views/Register";

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
        path: '/auth',
        element: <Authlayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
]);

export default router;
