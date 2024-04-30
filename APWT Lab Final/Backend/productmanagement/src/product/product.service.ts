import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private readonly productRepository : Repository<Product>)
  {
    
  }

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const existingProduct = await this.productRepository.findOne({where: {name: createProductDto.name}});
    if (existingProduct) {
      throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST);
    }
    let product: Product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;
    product.stock = createProductDto.stock;
    return this.productRepository.save(product);
  }

  findAll() : Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({where: {id:id}});
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(id);
    product.name = updateProductDto.name;
    product.description = updateProductDto.description;
    product.price = updateProductDto.price;
    product.stock = updateProductDto.stock;
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
    return this.productRepository.delete(id);
  }
}
