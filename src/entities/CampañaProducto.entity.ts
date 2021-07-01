import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Campaña } from "./Campaña.entity";

@Entity('CampañaProducto')
export class CampañaProducto {
  
  @PrimaryGeneratedColumn()
  idCampañaProducto: Number;

  @Column({nullable:false})
  Precio: Number;

  @ManyToOne(() => Campaña, Campaña => Campaña.CampañaProducto_idCampañaProducto)
  Campaña_idCampaña: Campaña;
}