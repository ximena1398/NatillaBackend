import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { sisben } from "./sisben.entity";

@Entity('sisbenLetter')
export class sisbenLetter {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  letter: String;

  @OneToMany(() => sisben, sisben => sisben.sisbenLetter)
  sisben: sisben[];
}