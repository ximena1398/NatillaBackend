import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller";
import { product } from "./product.entity";

@Entity('sellerProducts')
export class sellerProducts {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => product, product => product.sellerProducts)
  product: product;

  @ManyToOne(() => seller, seller => seller.sellerProducts)
  seller: seller;
}