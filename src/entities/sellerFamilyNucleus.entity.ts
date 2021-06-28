import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { familyNucleus } from "./familyNucleus.entity";

@Entity('sellerFamilyNucleus')
export class sellerFamilyNucleus {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => familyNucleus, FamilyNucleus => FamilyNucleus.sellerFamilyNucleus)
  familyNucleus: familyNucleus;

  @ManyToOne(() => seller, seller => seller.sellerFamilyNucleus)
  seller: seller;
}