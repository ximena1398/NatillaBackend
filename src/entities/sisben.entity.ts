import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller.entity";

@Entity('sisben')
export class sisben {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying')
  letter: String;

  @Column()
  number: number;

  @OneToMany(() => seller, seller => seller.genre)
  seller: seller[];
}