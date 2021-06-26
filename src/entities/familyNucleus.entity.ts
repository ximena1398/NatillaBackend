import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { sellerFamiliyNucleus } from "./sellerFamilyNucleus.entity";

@Entity('familiyNucleus')
export class familiyNucleus {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  /* @OneToMany(() => seller, seller => seller.familiyNucleus)
  seller: seller[]; */

  @OneToMany(() => sellerFamiliyNucleus, sellerfamiliyNucleus => sellerfamiliyNucleus.familiyNucleus)
  sellerFamiliyNucleus: sellerFamiliyNucleus[];
}