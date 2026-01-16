import { HandHeart, IndianRupee, Landmark, LayoutDashboard, Settings, Settings2, ShoppingCart, Truck, Users, Webhook } from "lucide-react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"
const LeftNavigation = () => {

    const NAVIGATION = [
        { id: "1", path: "/", icon: <LayoutDashboard /> },
        { id: "2", path: "/cart", icon: <ShoppingCart /> },
        { id: "3", path: "/page-3", icon: <Webhook /> },
        { id: "4", path: "/deliveries", icon: <Truck /> },
        { id: "5", path: "/payments", icon: <IndianRupee /> },
        { id: "6", path: "/users", icon: <Users /> },
        { id: "7", path: "/settings", icon: <Settings /> },
        { id: "8", path: "/page-8", icon: <HandHeart /> },
        { id: "9", path: "page-9", icon: <Settings2 /> },
        { id: "10", path: "/page-10", icon: <Landmark /> }
    ]

    const getClassName = (isActive: boolean) => {
        if (isActive) {
            return "p-3 relative flex items-center justify-center w-16 bg-[#5f71bc] before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-white before:rounded-r-lg"
        }
        return "p-3 flex items-center justify-center w-16"
    }


    return (
        <aside className="h-[100%] w-16">
            <nav className="bg-blue-800 w-full h-full rounded-tl-xl rounded-bl-xl">
                <div className="p-4 mb-4">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="flex flex-col gap-4 p-3 items-center h-full">
                    {NAVIGATION.map((item) => (

                        <NavLink key={item.id} to={item.path} className={(item) => getClassName(item.isActive)}>
                            <li className="text-white">{item.icon}</li>
                        </NavLink>
                    ))}
                </ul>
            </nav>
        </aside>

    )
}

export default LeftNavigation;