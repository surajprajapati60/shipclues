import { Outlet } from "react-router"
import Header from "../Header"
import LeftNavigation from "../LeftNavigation"

const MainLayout = () => {
    return (
        <div className="h-screen w-screen p-4 md:p-6 bg-gray-50 overflow-hidden flex flex-col">
            <div className="flex flex-1 rounded-xl bg-[#f4f6f9] shadow-md overflow-hidden">
                <LeftNavigation />
                <div className="flex-1 flex flex-col min-w-0">
                    <Header />
                    <div className="flex-1 p-4 md:p-6 overflow-hidden flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainLayout;
