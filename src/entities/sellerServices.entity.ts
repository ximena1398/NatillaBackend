import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";
import { service } from "./service.entity";

@Entity('sellerServices')
export class sellerServices {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @ManyToOne(() => service, service => service.sellerServices)
  service: service;

  @ManyToOne(() => seller, seller => seller.sellerServices)
  seller: seller;
}