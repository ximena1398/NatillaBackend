import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { city } from "./city.entity";
import { idType } from "./idType.entity";
import { order } from "./order.entity";


@Entity('user')
export class user {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column('character varying', { unique: true })
  nombre: String;

  @Column()
  identificacion:Number;

  @Column()
  direccion: String;

  @Column()
  correo: String;

  @Column()
  celular: Number;

  @Column()
  contraseña: String;

  @OneToMany(() => order, order => order.user)
  order: order[];

  @ManyToOne(() => idType, idType => idType.user)
  idType: idType;

  @ManyToOne(() => city, city => city.user)
  city: city;
}