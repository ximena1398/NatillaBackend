import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Product } from "./product.entity";


@Entity('synonyms')
export class synonyms {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => Product, Product => Product.synonyms)
  Product: Product;
}