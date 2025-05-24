export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
    isOnSale?: boolean;
    tags: string[];
}
