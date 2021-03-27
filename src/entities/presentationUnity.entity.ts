import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { presentationProduct } from "./presentationProduct.entity";


@Entity('presentationUnity')
export class presentationUnity {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @OneToMany(() => presentationProduct, presentationProduct => presentationProduct.presentationUnity)
  presentations: presentationProduct[];
}