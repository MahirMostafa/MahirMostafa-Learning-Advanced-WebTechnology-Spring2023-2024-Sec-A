import { Product } from '../../product/entities/product.entity';
export declare class Cart {
    id: number;
    product: Product;
    quantity: number;
    totalPrice: number;
}
