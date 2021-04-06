import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { order } from "./order.entity";



@Entity('paymentMethod')
export class paymentMethod {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => order, order => order.paymentMethod)
  order: order[];
}