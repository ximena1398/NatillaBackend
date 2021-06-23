import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sellerDisabilitys } from "./sellerDisabilitys.entity";


@Entity('disability')
export class disability {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => sellerDisabilitys, sellerDisabilitys => sellerDisabilitys.disability)
  sellerDisabilitys: sellerDisabilitys[];
}