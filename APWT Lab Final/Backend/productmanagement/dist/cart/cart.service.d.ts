import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Product } from '../product/entities/product.entity';
export declare class CartService {
    private readonly cartRepository;
    private readonly productRepository;
    constructor(cartRepository: Repository<Cart>, productRepository: Repository<Product>);
    addToCart(productId: number, quantity: number): Promise<Cart>;
}
