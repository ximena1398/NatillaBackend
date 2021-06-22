import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sellerServices } from "./sellerServices.entity";

@Entity('service')
export class service {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => sellerServices, sellerServices => sellerServices.service)
  sellerServices: sellerServices[];
}