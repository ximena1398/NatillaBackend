import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { presentationUnity } from "./presentationUnity.entity";
import { Product } from "./product.entity";


@Entity('presentationproduct')
export class presentationProduct {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('text')
  cantidad: Number;

  @OneToMany(() => Product, Product => Product.typeProduct)
  Products: Product[];

  @ManyToOne(() => presentationUnity, presentationUnity => presentationUnity.presentations)
  presentationUnity: presentationUnity;
}