import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { CampañaProducto } from "./CampañaProducto.entity";

@Entity('Campaña')
export class Campaña {
  
  @PrimaryGeneratedColumn()
  idCampaña: Number;

  @Column({nullable:false})
  NombreCampaña: String;

  @OneToMany(() => CampañaProducto, CampañaProducto => CampañaProducto.Campaña_idCampaña)
  CampañaProducto_idCampañaProducto: CampañaProducto[];
}