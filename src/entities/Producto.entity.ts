import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Venta } from "./Venta.entity";

@Entity('Producto')
export class Producto {
  
  @PrimaryGeneratedColumn()
  idProducto: Number;

  @Column({nullable:false})
  NombreProducto: String;

  @Column({nullable:false})
  Precio: number;

  @Column({nullable:false})
  Talla: String;

  @OneToMany(() => Venta, Venta => Venta.producto_idProducto)
  idVenta: Venta[];
}