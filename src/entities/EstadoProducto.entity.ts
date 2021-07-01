import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Venta } from "./Venta.entity";

@Entity('EstadoProducto')
export class EstadoProducto {
  
  @PrimaryGeneratedColumn()
  idEstadoProducto: Number;

  @Column({nullable:false})
  NombreEstado: String;

  @OneToMany(() => Venta, Venta => Venta.estadoProducto_idEstadoProducto)
  idVenta: Venta[];
}