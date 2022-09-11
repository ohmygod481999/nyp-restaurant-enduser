export enum OrderStatus {
    CREATED = "created",
    PEDNING = "pending",
    SUCCESS = "success",
}

export interface Product {
    id: number;
    name: string;
    price: number;
    thumbnail: string;
}

export interface OrderItem {
    id: number;
    product: Product;
    quantity: number;
}

export interface Order {
    id: number;
    status: OrderStatus;
    company_id: number;
    store_id: number;
    table_id: number;
    created_at: Date;
    order_items: OrderItem[];
}
