import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { city } from "./city.entity";



@Entity('department')
export class department {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => city, city => city.department)
  city: city[];
}