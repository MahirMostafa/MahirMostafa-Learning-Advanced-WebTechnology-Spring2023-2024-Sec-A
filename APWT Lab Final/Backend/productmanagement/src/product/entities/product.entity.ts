import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cart } from '../../cart/entities/cart.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'text', nullable: true })
  description: string;

    @ManyToOne(() => Cart, cart => cart.products)
    cart: Cart;

}
