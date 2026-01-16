import { Eye, MoreVertical, } from "lucide-react";
import type { Order } from "../types/order";


const TableHeader = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return <th className={`p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider ${className}`}>{children}</th>
}


interface OrdersTableProps {
    orders: Order[];
    searchTerm: string;
}


const OrderStatus = ({ status }: { status: Order["orderStatus"] }) => {
    return (
        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-sm font-bold capitalize w-fit
        ${status === 'live' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}
        ${status === 'pending' ? 'bg-orange-50 text-orange-700' : ''}
        ${status === 'cancelled' ? 'bg-red-50 text-red-700' : ''}
    `}>
            {status}
        </span>
    )
}

const OrdersTable = ({
    orders,
    searchTerm
}: OrdersTableProps) => {

    return (
        <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-auto w-full">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                    <thead className="sticky top-0 z-10 bg-white">
                        <tr className="bg-white border-b border-gray-100 shadow-sm">
                            <th className="p-4 w-10 sticky top-0 bg-white">
                                <input type="checkbox" className="h-4 w-4 border border-gray-300 rounded flex items-center justify-center cursor-pointer"></input>
                            </th>
                            <TableHeader>Order Date</TableHeader>
                            <TableHeader>Payment</TableHeader>
                            <TableHeader>Product Details</TableHeader>
                            <TableHeader>Package Details</TableHeader>
                            <TableHeader>Customer Details</TableHeader>
                            <TableHeader>Pickup Address</TableHeader>
                            <TableHeader>Delivery Address</TableHeader>
                            <TableHeader>Order Status</TableHeader>
                            <TableHeader>Actions</TableHeader>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="p-4 align-top">
                                    <input type="checkbox" className="h-4 w-4 border border-gray-300 rounded flex items-center justify-center cursor-pointer mt-1"></input>
                                </td>

                                <td className="p-4 align-top">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-bold text-blue-600 ">{order.id}</span>
                                        <span className="text-xs text-gray-500">{order.date}</span>
                                        <span className="mt-1 text-sm text-gray-500">Custom</span>
                                    </div>
                                </td>

                                <td className="p-4 align-top">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm text-gray-700">{"\u20B9"}{order.price}</span>
                                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-sm font-bold uppercase w-fit
                                                ${order.paymentMethod === 'COD' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'}
                                            `}>
                                            {order.paymentMethod}
                                        </span>
                                    </div>
                                </td>

                                <td className="p-4 align-top flex items-center gap-1 max-w-[200px]">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-start justify-between gap-1">
                                            <span className="text-xs text-gray-700 line-clamp-2" title={order.product.title}>
                                                {order.product.title}
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500">QTY: {order.product.quantity}</span>
                                        <span className="text-xs text-gray-500">SKU: {order.product.sku}</span>
                                    </div>
                                    <Eye className="h-3.5 w-3.5 text-blue-600 shrink-0 cursor-pointer" />
                                </td>

                                <td className="p-4 align-top">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs text-gray-600">Dead wt. : {order.packageDetails.deadWeight}</span>
                                        <span className="text-xs text-gray-600">{order.packageDetails.dimensions}</span>
                                        <div className="text-xs text-gray-600">
                                            Volumetric wt.:<span className="text-gray-500">{order.packageDetails.volumetricWeight}</span>
                                        </div>

                                    </div>
                                </td>

                                <td className="p-4 align-top">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-xs font-medium text-gray-700">{order.customer.name}</span>
                                        <span className="text-xs text-gray-500">{order.customer.mobile}</span>
                                        <span className="text-xs text-gray-500 break-words">{order.customer.email}</span>
                                    </div>
                                </td>

                                <td className="p-4 align-top max-w-[150px]">
                                    <p className="text-xs text-gray-600 leading-snug">
                                        {order.pickupAddress}
                                    </p>
                                </td>

                                <td className="p-4 align-top max-w-[150px]">
                                    <p className="text-xs text-gray-600 leading-snug">
                                        {order.deliveryAddress}
                                    </p>
                                </td>

                                <td className="p-4 align-top">
                                    <div className="flex flex-col gap-2 items-start">
                                        <OrderStatus status={order.orderStatus} />

                                        {(order.orderStatus === 'pending') && (
                                            <button className="px-3 py-1.5 bg-blue-800 text-white text-xs font-medium rounded shadow-sm hover:bg-blue-900 transition-colors cursor-pointer">
                                                Ship Now
                                            </button>
                                        )}
                                    </div>
                                </td>

                                <td className="p-4 align-top text-center">
                                    <button className="p-1.5 bg-[#dee5f6] hover:bg-gray-100 rounded-full transition-colors inline-block cursor-pointer">
                                        <MoreVertical className="h-5 w-5 text-blue-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && (
                            <tr>
                                <td colSpan={10} className="p-8 text-center text-gray-500">
                                    No orders found {searchTerm ? "matching " + searchTerm : ""}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;