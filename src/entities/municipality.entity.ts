import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { department } from "./department.entity";
import {seller} from './seller.entity'



@Entity('municipality')
export class municipality {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => seller, seller => seller.municipality)
  seller: seller[];

  @ManyToOne(()=>department, department=>department.municipality)
  department: department
}