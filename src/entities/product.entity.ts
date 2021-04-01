import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany } from "typeorm";
import { typeProduct } from "./typeproduct.entity";
import {presentationAmount} from "./presentationAmount.entity";
import {presentationUnity} from "./presentationUnity.entity"
import { synonyms } from "./synonyms.entity";
import { orderDetail } from "./orderDetail.entity";

@Entity('product')
export class Product{

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @Column('text')
  precio: Number;

  @Column('text')
  cantidad: Number;

  @Column('varchar', { name: 'image_url', length: 300 })
  imageUrl: String;

  @OneToMany(() => synonyms, synonyms => synonyms.Product)
  synonyms: synonyms[];

  @OneToMany(() => orderDetail, orderDetail => orderDetail.Product)
  orderDetail: orderDetail[];

  @ManyToOne(() => typeProduct, typeProduct => typeProduct.Products)
  typeProduct: typeProduct;

  @ManyToOne(() => presentationAmount, presentationProduct => presentationProduct.Products)
  presentationAmount: presentationAmount;

  @ManyToOne(() => presentationUnity, presentationUnity => presentationUnity.product)
  presentationUnity: presentationUnity;

}