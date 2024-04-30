import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  product: Product;

  @Column('int')
  quantity: number;

  @Column('decimal')
  totalPrice: number;
}
