export interface Product {
    id: string;
    title: string;
    images: string[];
    price: number;
    oldPrice?: number;
    isOnSale?: boolean;
    tags: string[];
}
