import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Summary from '../components/Summary';

export default function layout() {
    return (
        <div className='flex h-screen'>
            <aside className='w-72'>
                <Sidebar />
            </aside>
            
            <main className='flex-1 overflow-auto'>
                <Outlet />
            </main>

            <aside className='w-72 overflow-auto'>
                <Summary />
            </aside>
            
        </div>
    )
}
