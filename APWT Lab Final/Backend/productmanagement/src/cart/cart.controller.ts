import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(JwtGuard)
  @Post()
  addToCart(@Body() createCartDto: CreateCartDto) {
    return this.cartService.addToCart(createCartDto.productId, createCartDto.quantity);
  }
}
