import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) {}

  async addToCart(cartId: number, productId: number) {
    const cart = await this.cartRepository.findOne(cartId, { relations: ['products'] });
    const product = await this.productRepository.findOne(productId);

    if (!cart || !product) {
      throw new Error('Cart or Product not found');
    }

    cart.products.push(product);
    return this.cartRepository.save(cart);
  }
}
