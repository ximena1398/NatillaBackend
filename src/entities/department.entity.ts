import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { municipality } from "./municipality.entity";
import { seller } from "./seller.entity";



@Entity('nationality')
export class department {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => municipality, municipality => municipality.department)
  municipality: municipality[];

  @OneToMany(() => seller, seller => seller.department)
  seller: seller[];
}