import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller";
import { disability } from "./disability.entity";

@Entity('sellerDisabilitys')
export class sellerDisabilitys {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => disability, disability => disability.sellerDisabilitys)
  disability: disability;

  @ManyToOne(() => seller, seller => seller.sellerDisabilitys)
  seller: seller;
}