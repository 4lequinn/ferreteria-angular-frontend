export interface Product {
    id?: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string,
    price: number;
    stock: number;
    image: string;
    category: number;
}