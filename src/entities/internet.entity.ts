import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";

@Entity('internet')
export class internet {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => seller, seller => seller.internet)
  seller: seller[];
}