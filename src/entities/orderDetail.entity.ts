import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { order } from "./order.entity";
import { Product } from "./product.entity";


@Entity('orderDetail')
export class orderDetail {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying')
  cantidad: Number;

  @ManyToOne(() => Product, Product => Product.orderDetail)
  Product: Product;

  @ManyToOne(() => order, order => order.orderDetail)
  order: order;
}