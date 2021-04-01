import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./product.entity";


@Entity('presentationUnity')
export class presentationUnity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => Product, Product => Product.presentationUnity)
  product: Product[];
}