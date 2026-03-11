import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from 'react-toastify';

export default function AdminLayout() {

    useAuth({middleware: 'admin'});

    return (
        <>
            <div className='flex h-screen'>
                <aside className='w-72'>
                    <AdminSidebar />
                </aside>
                
                <main className='flex-1 overflow-auto'>
                    <Outlet />
                </main>
            </div>

            <ToastContainer />
        </>
    )
}
