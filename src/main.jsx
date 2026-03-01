import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { KioskProvider } from './contexts/kioskProvider';
import router from './router';
import './app.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <KioskProvider>
            <RouterProvider router={ router } />
        </KioskProvider>
    </StrictMode>,
)
