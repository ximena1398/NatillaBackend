
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, Double } from "typeorm";
import { orderDetail } from "./orderDetail.entity";
import { paymentMethod } from "./paymentMethod.entity";
import { user } from "./user.entity";

@Entity('order')
export class order {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  preciototal: Number;

  @Column({type: 'timestamp'})
  fecha: Date;

  @Column()
  direccion: String;

  @Column()
  fotofactura: String;

  @OneToMany(() => orderDetail, orderDetail => orderDetail.order)
  orderDetail: orderDetail[];

  @ManyToOne(()=>paymentMethod, paymentMethod=>paymentMethod.order)
  paymentMethod: paymentMethod;

  @ManyToOne(()=>user, user=>user.order)
  user: user;
}