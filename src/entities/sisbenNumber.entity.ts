import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sisben } from "./sisben.entity";

@Entity('sisbenNumber')
export class sisbenNumber {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  number: number;

  @OneToMany(() => sisben, sisben => sisben.sisbenNumber)
  sisben: sisben[];
}