import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { sellerEthnicity } from "./sellerEthnicity.entity";

@Entity('ethnicity')
export class ethnicity {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  /* @OneToMany(() => seller, seller => seller.ethnicity)
  seller: seller[]; */

  @OneToMany(() => sellerEthnicity, sellerEthnicity => sellerEthnicity.ethnicity)
  sellerEthnicity: sellerEthnicity[];
}