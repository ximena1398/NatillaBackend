import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sellerEthnicity } from "./sellerEthnicity.entity";


@Entity('product')
export class product {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  /* @OneToMany(() => sellerEthnicity, sellerEthnicity => sellerEthnicity.product)
  sellerEthnicity: sellerEthnicity[]; */
}