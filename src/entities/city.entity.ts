import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { user } from "./user.entity";
import {department} from './department.entity';


@Entity('city')
export class city {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => user, user => user.city)
  user: user[];

  @ManyToOne(() => department, department => department.city)
  department: department;
}