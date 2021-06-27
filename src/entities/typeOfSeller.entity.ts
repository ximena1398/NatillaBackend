/* import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";

@Entity('typeOfSeller')
export class typeOfSeller {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => seller, seller => seller.typeOfSeller)
  seller: seller[];
} */