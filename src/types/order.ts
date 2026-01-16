// Payment methods
export type PaymentMethod = "COD" | "Prepaid";

// Order Status
export type OrderStatus =
    | "pending"
    | "returned"
    | "error"
    | "live"
    | "manifest"
    | "delivered"
    | "cancelled";

// Product details
export interface Product {
    title: string;
    quantity: number;
    sku: string;
}

// Customer details
export interface Customer {
    name: string;
    mobile: string;
    email: string;
}

// Complete Order interface
export interface Order {
    id: string;
    date: string;
    price: number;
    paymentMethod: PaymentMethod;
    product: Product;
    customer: Customer;
    pickupAddress: string;
    deliveryAddress: string;
    orderStatus: OrderStatus;
    packageDetails: {
        deadWeight: string;
        dimensions: string;
        volumetricWeight: string;
    }
}
