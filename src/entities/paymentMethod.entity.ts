import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { order } from "./order.entity";



@Entity('paymentMethod')
export class paymentMethod {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @Column()
  numerotarjeta: Number;

  @OneToMany(() => order, order => order.paymentMethod)
  order: order[];
}