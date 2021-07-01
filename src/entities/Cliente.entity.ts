import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Venta } from "./Venta.entity";

@Entity('Cliente')
export class Cliente {
  
  @PrimaryGeneratedColumn()
  idCliente: Number;

  @Column({nullable:false})
  Nombre: String;

  @OneToMany(() => Venta, Venta => Venta.cliente_idCliente)
  idVenta: Venta[];
}