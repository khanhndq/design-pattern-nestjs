import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '../interface/product.interface';
@Entity('products')
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 100,
    type: 'varchar',
    nullable: false,
  })
  name: string;
  @Column({
    type: 'int',
    nullable: false,
  })
  price: number;
  @Column({
    length: 255,
    type: 'varchar',
    nullable: true,
  })
  description: string;
}
