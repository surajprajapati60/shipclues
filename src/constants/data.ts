import type { Order } from "../types/order";

export const ORDERDATA: Order[] = [
    {
        "id": "ORD-1001",
        "date": "2025-01-05 7:00am",
        "price": 124999,
        "paymentMethod": "COD",
        "product": {
            "title": "Apple 2024 MacBook Air 15″ Laptop with M3 chip",
            "quantity": 1,
            "sku": "MBA15-M3-38",
        },
        "packageDetails": {
            "deadWeight": "0.5 Kg",
            "dimensions": "10 x 10 x 10 (cm)",
            "volumetricWeight": "0.200 Kg"
        },
        "customer": {
            "name": "Rahul Sharma",
            "mobile": "+91-9876543210",
            "email": "rahul.sharma@gmail.com"
        },
        "pickupAddress": "Tech Warehouse, Andheri East, Mumbai, MH 400069",
        "deliveryAddress": "B-402, Green Heights, Pune, MH 411045",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1002",
        "date": "2025-01-06 10:00am",
        "price": 2499,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Logitech MX Master 3S Wireless Mouse",
            "quantity": 2,
            "sku": "LOGI-MX3S",
        },
        "packageDetails": {
            "deadWeight": "0.3 Kg",
            "dimensions": "12 x 8 x 6 (cm)",
            "volumetricWeight": "0.115 Kg"
        },
        "customer": {
            "name": "Ankit Verma",
            "mobile": "+91-9123456789",
            "email": "ankit.verma@gmail.com"
        },
        "pickupAddress": "Electro Hub, Noida Sector 62, UP 201309",
        "deliveryAddress": "Flat 12A, Skyline Apartments, Gurugram, HR 122018",
        "orderStatus": "pending"
    },
    {
        "id": "ORD-1003",
        "date": "2025-01-06 11:00am",
        "price": 79999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Samsung Galaxy S24 Ultra 5G",
            "quantity": 1,
            "sku": "SAMS-S24U",
        },
        "packageDetails": {
            "deadWeight": "0.45 Kg",
            "dimensions": "18 x 9 x 6 (cm)",
            "volumetricWeight": "0.195 Kg"
        },
        "customer": {
            "name": "Neha Singh",
            "mobile": "+91-9988776655",
            "email": "neha.singh@gmail.com"
        },
        "pickupAddress": "Samsung Smart Plaza, Connaught Place, Delhi 110001",
        "deliveryAddress": "House 45, Civil Lines, Jaipur, RJ 302006",
        "orderStatus": "live"
    },
    {
        "id": "ORD-1004",
        "date": "2025-01-07 12:00pm",
        "price": 1599,
        "paymentMethod": "COD",
        "product": {
            "title": "Boat Rockerz 450 Bluetooth Headphones",
            "quantity": 3,
            "sku": "BOAT-R450",
        },
        "packageDetails": {
            "deadWeight": "0.6 Kg",
            "dimensions": "20 x 15 x 10 (cm)",
            "volumetricWeight": "0.500 Kg"
        },
        "customer": {
            "name": "Pooja Mehta",
            "mobile": "+91-9012345678",
            "email": "pooja.mehta@gmail.com"
        },
        "pickupAddress": "Boat Audio Warehouse, Ahmedabad, GJ 380015",
        "deliveryAddress": "A-9, Shanti Nagar, Indore, MP 452001",
        "orderStatus": "pending"
    },
    {
        "id": "ORD-1005",
        "date": "2025-01-07 02:00pm",
        "price": 32999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Sony WH-1000XM5 Noise Cancelling Headphones",
            "quantity": 1,
            "sku": "SONY-XM5",
        },
        "packageDetails": {
            "deadWeight": "0.4 Kg",
            "dimensions": "22 x 18 x 8 (cm)",
            "volumetricWeight": "0.528 Kg"
        },
        "customer": {
            "name": "Aman Gupta",
            "mobile": "+91-9090909090",
            "email": "aman.gupta@gmail.com"
        },
        "pickupAddress": "Sony Distribution Center, Bengaluru, KA 560048",
        "deliveryAddress": "Flat 303, Orchid Residency, Kochi, KL 682030",
        "orderStatus": "cancelled"
    },
    {
        "id": "ORD-1006",
        "date": "2025-01-08 03:00pm",
        "price": 5999,
        "paymentMethod": "COD",
        "product": {
            "title": "Mi Smart Air Fryer 4L",
            "quantity": 1,
            "sku": "MI-AF4L",
        },
        "packageDetails": {
            "deadWeight": "4.2 Kg",
            "dimensions": "35 x 35 x 40 (cm)",
            "volumetricWeight": "9.800 Kg"
        },
        "customer": {
            "name": "Rohit Nair",
            "mobile": "+91-9345678123",
            "email": "rohit.nair@gmail.com"
        },
        "pickupAddress": "Mi Warehouse, Chennai, TN 600096",
        "deliveryAddress": "Villa 7, Palm Meadows, Trivandrum, KL 695014",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1007",
        "date": "2025-01-08 04:35pm",
        "price": 1299,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Amazon Basics USB-C Hub",
            "quantity": 4,
            "sku": "AMZ-USBHUB",
        },
        "packageDetails": {
            "deadWeight": "0.4 Kg",
            "dimensions": "15 x 10 x 5 (cm)",
            "volumetricWeight": "0.125 Kg"
        },
        "customer": {
            "name": "Kunal Patel",
            "mobile": "+91-9811122233",
            "email": "kunal.patel@gmail.com"
        },
        "pickupAddress": "Amazon Fulfillment Center, Surat, GJ 395007",
        "deliveryAddress": "C-21, Riverfront Society, Vadodara, GJ 390011",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1008",
        "date": "2025-01-09 05:45pm",
        "price": 45999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Apple iPad Air 5th Gen (256GB)",
            "quantity": 1,
            "sku": "IPAD-AIR5-256",
        },
        "packageDetails": {
            "deadWeight": "0.46 Kg",
            "dimensions": "25 x 18 x 5 (cm)",
            "volumetricWeight": "0.375 Kg"
        },
        "customer": {
            "name": "Sneha Iyer",
            "mobile": "+91-9445566778",
            "email": "sneha.iyer@gmail.com"
        },
        "pickupAddress": "Apple Authorized Store, Mumbai, MH 400050",
        "deliveryAddress": "Flat 5B, Sea View Apartments, Panaji, GA 403001",
        "orderStatus": "manifest"
    },
    {
        "id": "ORD-1009",
        "date": "2025-01-10 01:25pm",
        "price": 899,
        "paymentMethod": "COD",
        "product": {
            "title": "Nike Sports Water Bottle 1L",
            "quantity": 5,
            "sku": "NIKE-BOTTLE1L",
        },
        "packageDetails": {
            "deadWeight": "1.2 Kg",
            "dimensions": "30 x 20 x 15 (cm)",
            "volumetricWeight": "1.800 Kg"
        },
        "customer": {
            "name": "Vikas Malhotra",
            "mobile": "+91-9887766554",
            "email": "vikas.m@gmail.com"
        },
        "pickupAddress": "Nike Distribution Hub, Delhi NCR",
        "deliveryAddress": "Plot 18, Sector 15, Chandigarh 160015",
        "orderStatus": "pending"
    },
    {
        "id": "ORD-1010",
        "date": "2025-01-10 03:15pm",
        "price": 18999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Canon EOS 1500D DSLR Camera",
            "quantity": 1,
            "sku": "CANON-1500D",
        },
        "packageDetails": {
            "deadWeight": "1.8 Kg",
            "dimensions": "30 x 25 x 20 (cm)",
            "volumetricWeight": "3.000 Kg"
        },
        "customer": {
            "name": "Aditya Joshi",
            "mobile": "+91-9001122334",
            "email": "aditya.joshi@gmail.com"
        },
        "pickupAddress": "Canon Imaging Center, Pune, MH 411038",
        "deliveryAddress": "Row House 11, Baner Road, Pune, MH 411045",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1011",
        "date": "2025-01-11 09:10am",
        "price": 6999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "JBL Flip 6 Portable Bluetooth Speaker",
            "quantity": 1,
            "sku": "JBL-FLIP6"
        },
        "packageDetails": {
            "deadWeight": "0.55 Kg",
            "dimensions": "18 x 7 x 7 (cm)",
            "volumetricWeight": "0.180 Kg"
        },
        "customer": {
            "name": "Saurabh Kulkarni",
            "mobile": "+91-9823012345",
            "email": "saurabh.k@gmail.com"
        },
        "pickupAddress": "JBL Warehouse, Bhiwandi, MH 421302",
        "deliveryAddress": "Flat 12, Kothrud Residency, Pune, MH 411038",
        "orderStatus": "live"
    },
    {
        "id": "ORD-1012",
        "date": "2025-01-11 11:40am",
        "price": 21999,
        "paymentMethod": "COD",
        "product": {
            "title": "Fitbit Charge 6 Fitness Tracker",
            "quantity": 1,
            "sku": "FIT-CHG6"
        },
        "packageDetails": {
            "deadWeight": "0.25 Kg",
            "dimensions": "14 x 8 x 6 (cm)",
            "volumetricWeight": "0.135 Kg"
        },
        "customer": {
            "name": "Meenal Arora",
            "mobile": "+91-9871203344",
            "email": "meenal.arora@gmail.com"
        },
        "pickupAddress": "Fitbit Logistics Hub, Gurugram, HR 122016",
        "deliveryAddress": "C-18, Lajpat Nagar II, New Delhi 110024",
        "orderStatus": "pending"
    },
    {
        "id": "ORD-1013",
        "date": "2025-01-11 02:20pm",
        "price": 34999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Dyson V8 Absolute Cordless Vacuum Cleaner",
            "quantity": 1,
            "sku": "DY-V8-ABS"
        },
        "packageDetails": {
            "deadWeight": "2.6 Kg",
            "dimensions": "60 x 25 x 20 (cm)",
            "volumetricWeight": "5.000 Kg"
        },
        "customer": {
            "name": "Harsh Jain",
            "mobile": "+91-9899988877",
            "email": "harsh.jain@gmail.com"
        },
        "pickupAddress": "Dyson Fulfillment Center, Hosur, TN 635126",
        "deliveryAddress": "Villa 24, Whitefield, Bengaluru, KA 560066",
        "orderStatus": "manifest"
    },
    {
        "id": "ORD-1014",
        "date": "2025-01-12 10:05am",
        "price": 1799,
        "paymentMethod": "COD",
        "product": {
            "title": "Philips Beard Trimmer BT3221",
            "quantity": 2,
            "sku": "PHIL-BT3221"
        },
        "packageDetails": {
            "deadWeight": "0.65 Kg",
            "dimensions": "22 x 15 x 10 (cm)",
            "volumetricWeight": "0.550 Kg"
        },
        "customer": {
            "name": "Rakesh Yadav",
            "mobile": "+91-9311124455",
            "email": "rakesh.yadav@gmail.com"
        },
        "pickupAddress": "Philips Warehouse, Faridabad, HR 121003",
        "deliveryAddress": "House 118, Gomti Nagar, Lucknow, UP 226010",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1015",
        "date": "2025-01-12 01:30pm",
        "price": 54999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Asus ROG Strix Gaming Monitor 27″",
            "quantity": 1,
            "sku": "ASUS-ROG-27"
        },
        "packageDetails": {
            "deadWeight": "6.8 Kg",
            "dimensions": "70 x 45 x 20 (cm)",
            "volumetricWeight": "12.600 Kg"
        },
        "customer": {
            "name": "Nikhil Deshpande",
            "mobile": "+91-9765432109",
            "email": "nikhil.d@gmail.com"
        },
        "pickupAddress": "Asus Supply Chain Hub, Navi Mumbai, MH 400705",
        "deliveryAddress": "Flat 9C, Magarpatta City, Pune, MH 411028",
        "orderStatus": "live"
    },
    {
        "id": "ORD-1016",
        "date": "2025-01-12 04:15pm",
        "price": 999,
        "paymentMethod": "COD",
        "product": {
            "title": "TP-Link Wi-Fi Range Extender",
            "quantity": 3,
            "sku": "TPL-WA850RE"
        },
        "packageDetails": {
            "deadWeight": "0.9 Kg",
            "dimensions": "25 x 18 x 10 (cm)",
            "volumetricWeight": "0.750 Kg"
        },
        "customer": {
            "name": "Imran Khan",
            "mobile": "+91-9822334455",
            "email": "imran.khan@gmail.com"
        },
        "pickupAddress": "TP-Link Distribution, Hyderabad, TS 500081",
        "deliveryAddress": "Flat 204, Jubilee Hills, Hyderabad, TS 500033",
        "orderStatus": "returned"
    },
    {
        "id": "ORD-1017",
        "date": "2025-01-13 09:50am",
        "price": 28999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "GoPro HERO12 Black Action Camera",
            "quantity": 1,
            "sku": "GOPRO-H12"
        },
        "packageDetails": {
            "deadWeight": "0.38 Kg",
            "dimensions": "16 x 10 x 8 (cm)",
            "volumetricWeight": "0.215 Kg"
        },
        "customer": {
            "name": "Ananya Roy",
            "mobile": "+91-9830067788",
            "email": "ananya.roy@gmail.com"
        },
        "pickupAddress": "GoPro Logistics, Salt Lake, Kolkata, WB 700091",
        "deliveryAddress": "Flat 7A, Ballygunge, Kolkata, WB 700019",
        "orderStatus": "delivered"
    },
    {
        "id": "ORD-1018",
        "date": "2025-01-13 12:40pm",
        "price": 7499,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Seagate 2TB Portable External HDD",
            "quantity": 2,
            "sku": "SGT-EXT2TB"
        },
        "packageDetails": {
            "deadWeight": "1.4 Kg",
            "dimensions": "30 x 20 x 10 (cm)",
            "volumetricWeight": "1.000 Kg"
        },
        "customer": {
            "name": "Prateek Mishra",
            "mobile": "+91-9992211334",
            "email": "prateek.m@gmail.com"
        },
        "pickupAddress": "Seagate Warehouse, Greater Noida, UP 201310",
        "deliveryAddress": "Tower 6, ATS Greens, Noida, UP 201301",
        "orderStatus": "manifest"
    },
    {
        "id": "ORD-1019",
        "date": "2025-01-13 03:55pm",
        "price": 1999,
        "paymentMethod": "COD",
        "product": {
            "title": "Prestige Electric Kettle 1.5L",
            "quantity": 1,
            "sku": "PRE-KET15"
        },
        "packageDetails": {
            "deadWeight": "1.1 Kg",
            "dimensions": "25 x 20 x 18 (cm)",
            "volumetricWeight": "1.500 Kg"
        },
        "customer": {
            "name": "Shalini Bansal",
            "mobile": "+91-9810098765",
            "email": "shalini.b@gmail.com"
        },
        "pickupAddress": "Prestige Warehouse, Ludhiana, PB 141010",
        "deliveryAddress": "House 14, Model Town, Panipat, HR 132103",
        "orderStatus": "pending"
    },
    {
        "id": "ORD-1020",
        "date": "2025-01-14 10:30am",
        "price": 64999,
        "paymentMethod": "Prepaid",
        "product": {
            "title": "Lenovo ThinkPad E14 Gen 5 Laptop",
            "quantity": 1,
            "sku": "LEN-E14-G5"
        },
        "packageDetails": {
            "deadWeight": "1.7 Kg",
            "dimensions": "38 x 26 x 8 (cm)",
            "volumetricWeight": "1.320 Kg"
        },
        "customer": {
            "name": "Varun Khanna",
            "mobile": "+91-9876540099",
            "email": "varun.khanna@gmail.com"
        },
        "pickupAddress": "Lenovo Logistics Center, Manesar, HR 122050",
        "deliveryAddress": "Flat 15D, DLF Phase 5, Gurugram, HR 122009",
        "orderStatus": "delivered"
    }
]