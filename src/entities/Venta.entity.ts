import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Producto } from "./Producto.entity";
import { EstadoProducto } from "./EstadoProducto.entity";

@Entity('Venta')
export class Venta {
  
  @PrimaryGeneratedColumn()
  idVenta: Number;

  @Column({nullable:false})
  CantidadProducto: Number;

  @Column({nullable:false})
  PrecioVenta: Number;

  @ManyToOne(() => Cliente, Cliente => Cliente.idVenta)
  cliente_idCliente: Cliente[];

  @ManyToOne(() => Producto, Producto => Producto.idVenta)
  producto_idProducto: Producto[];

  @ManyToOne(() => EstadoProducto, EstadoProducto => EstadoProducto.idVenta)
  estadoProducto_idEstadoProducto: EstadoProducto[];

}