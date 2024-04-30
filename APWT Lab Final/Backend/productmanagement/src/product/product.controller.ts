import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAdminAuthGuard, JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }
  @UseGuards(JwtAdminAuthGuard)
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }
  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
