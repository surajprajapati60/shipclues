import OrdersTable from "../components/OrdersTable";
import { ORDERTABS } from "../constants/ordertabs";
import { useState, useMemo } from "react";
import { ORDERDATA } from "../constants/data";
import TablePagination from "../components/TablePagination";
import TableFilters from "../components/TableFilters";
import { PlusIcon } from "lucide-react";

const Orders = () => {
    const [selectedTab, setSelectedTab] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Filtering logic
    const filteredOrders = useMemo(() => {
        console.log(selectedTab, "Selected tab");
        let ordersFiltersByStatus = ORDERDATA.filter((order) => {
            if (selectedTab === "") return true;
            return order.orderStatus === selectedTab;
        });
        if (!searchTerm) return ordersFiltersByStatus;

        const lowerTerm = searchTerm.toLowerCase();
        const searchTerms = lowerTerm.split(',').map(t => t.trim()).filter(Boolean);

        return ordersFiltersByStatus.filter((order) => {
            return searchTerms.some(term =>
                order.id.toLowerCase().includes(term) ||
                order.customer.name.toLowerCase().includes(term) ||
                order.customer.email.toLowerCase().includes(term)
            );
        });
    }, [searchTerm, selectedTab]);


    const paginatedOrders = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredOrders.slice(start, end);
    }, [filteredOrders, currentPage, itemsPerPage, searchTerm, selectedTab]);


    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="flex-none">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">All Orders</h1>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 rounded-sm text-sm font-medium text-white hover:bg-blue-900 shadow-sm  cursor-pointer"><PlusIcon /> Add Orders</button>
                </div>
                <div className="flex gap-4 border-b mb-6 pb-2 border-b-gray-200 overflow-hidden overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {ORDERTABS.map((tab) => (
                        <button key={tab.id} onClick={() => setSelectedTab(tab.value)} className={`cursor-pointer relative ${selectedTab === tab.value ? "before:content-[''] before:absolute before:top-[120%] before:left-0 before:w-full before:h-1 before:bg-blue-800 before:z-10  px-1" : "px-1"}`}>{tab.name}</button>
                    ))}
                </div>
                <TableFilters searchTerm={searchTerm} handleSearch={handleSearch} />
            </div>

            <div className="flex-1 min-h-0">
                <OrdersTable orders={paginatedOrders} searchTerm={searchTerm} />
            </div>

            <div className="flex-none">
                <TablePagination
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={Math.ceil(filteredOrders.length / itemsPerPage)}
                    handlePageChange={handlePageChange} />
            </div>
        </div>
    )
}
export default Orders;