import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sellerProducts } from "./sellerProducts.entity";


@Entity('product')
export class product {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => sellerProducts, sellerProducts => sellerProducts.product)
  sellerProducts: sellerProducts[];
}