import { Route, Routes } from "react-router"
import MainLayout from "../components/layouts/MainLayout";
import Orders from "../screens/Orders";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Orders />} />
                <Route path="/settings" element={<h1 className="text-2xl font-bold">Settings Page</h1>} />
                <Route path="/cart" element={<h1 className="text-2xl font-bold">Cart Page</h1>} />
                <Route path="/deliveries" element={<h1 className="text-2xl font-bold">Deliveries Page</h1>} />
                <Route path="/payments" element={<h1 className="text-2xl font-bold">Payments Page</h1>} />
                <Route path="/users" element={<h1 className="text-2xl font-bold">Users Page</h1>} />
                <Route path="/page-3" element={<h1 className="text-2xl font-bold">Page 3</h1>} />
                <Route path="/page-8" element={<h1 className="text-2xl font-bold">Page 8</h1>} />
                <Route path="/page-9" element={<h1 className="text-2xl font-bold">Page 9</h1>} />
                <Route path="/page-10" element={<h1 className="text-2xl font-bold">Page 10</h1>} />
            </Route>
        </Routes>
    )
}
export default AppRoutes;