import { Outlet } from "react-router-dom"

export default function Authlayout() {
    return (
        <main className="lg:h-screen flex items-center justify-center my-10 lg:my-0">
            <div className="w-full md:max-w-2/4 lg:max-w-5xl flex flex-col lg:flex-row gap-5 md:gap-10">
                
                <div className="lg:w-1/2 flex items-center justify-center">
                    <img className="w-64 md:w-80 lg:w-4/5" src="/img/logo.svg" alt="Logo" />
                </div>

                <div className="lg:w-1/2 rounded p-10 md:p-0">
                    <Outlet />
                </div>

            </div>
        </main>
    )
}
