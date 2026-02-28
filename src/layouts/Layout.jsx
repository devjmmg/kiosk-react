import { Outlet } from 'react-router-dom';

export default function layout() {
    return (
        <main>
            Layout
            <Outlet />
        </main>
    )
}
