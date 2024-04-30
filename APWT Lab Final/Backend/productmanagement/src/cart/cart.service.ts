import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async addToCart(productId: number, quantity: number) {
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (!product) {
      throw new Error('Product not found');
    }

    const cartItem = new Cart();
    cartItem.product = product;
    cartItem.quantity = quantity;
    cartItem.totalPrice = product.price * quantity;

    return this.cartRepository.save(cartItem);
  }
}
