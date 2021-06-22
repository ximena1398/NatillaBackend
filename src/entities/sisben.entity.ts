import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { seller } from "./seller";

@Entity('sisben')
export class sisben {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  letter: String;

  @Column()
  number: number;

  @OneToMany(() => seller, seller => seller.genre)
  seller: seller[];
}