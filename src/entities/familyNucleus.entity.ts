import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { sellerFamilyNucleus } from "./sellerFamilyNucleus.entity";

@Entity('familyNucleus')
export class familyNucleus {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  /* @OneToMany(() => seller, seller => seller.familyNucleus)
  seller: seller[]; */

  @OneToMany(() => sellerFamilyNucleus, sellerfamilyNucleus => sellerfamilyNucleus.familyNucleus)
  sellerFamilyNucleus: sellerFamilyNucleus[];
}