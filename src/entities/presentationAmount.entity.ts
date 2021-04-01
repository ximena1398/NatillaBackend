import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { presentationUnity } from "./presentationUnity.entity";
import { Product } from "./product.entity";


@Entity('presentationamount')
export class presentationAmount {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('text')
  cantidad: Number;

  @OneToMany(() => Product, Product => Product.presentationAmount)
  Products: Product[];

}