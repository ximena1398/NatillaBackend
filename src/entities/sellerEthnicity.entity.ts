import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { ethnicity } from "./ethnicity.entity";

@Entity('sellerEthnicity')
export class sellerEthnicity {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => ethnicity, ethnicity => ethnicity.sellerEthnicity)
  ethnicity: ethnicity;

  @ManyToOne(() => seller, seller => seller.sellerEthnicity)
  seller: seller;
}