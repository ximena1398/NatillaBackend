import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { product } from "./product.entity";
import { sisbenNumber } from "./sisbenNumber.entity";
import { sisbenLetter } from "./sisbenLetter.entity";

@Entity('sisben')
export class sisben {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => sisbenNumber, sisbenNumber => sisbenNumber.sisben)
  sisbenNumber: sisbenNumber;

  @ManyToOne(() => sisbenLetter, sisbenLetter => sisbenLetter.sisben)
  sisbenLetter: sisbenLetter;

  @OneToMany(() => seller, seller => seller.sisben)
  seller: seller[];
}