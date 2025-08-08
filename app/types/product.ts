export interface ProductData {
    id: number;
    name: string;
    slug: string;
    price: number;
    metadata:{
        image: string;
        alt: string;
    }
    price_sale?: number; // Optional field for sale price
}