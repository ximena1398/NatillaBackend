import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./product.entity";


@Entity('typeproduct')
export class typeProduct {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @Column('varchar', { name: 'image_url', length: 300 })
  imageUrl: String;

  @OneToMany(() => Product, Product => Product.typeProduct)
  Products: Product[];
}