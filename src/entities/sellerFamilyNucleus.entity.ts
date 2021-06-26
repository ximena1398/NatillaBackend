import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { familiyNucleus } from "./familyNucleus.entity";

@Entity('sellerFamiliyNucleus')
export class sellerFamiliyNucleus {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => familiyNucleus, FamiliyNucleus => FamiliyNucleus.sellerFamiliyNucleus)
  familiyNucleus: familiyNucleus;

  @ManyToOne(() => seller, seller => seller.sellerFamiliyNucleus)
  seller: seller;
}