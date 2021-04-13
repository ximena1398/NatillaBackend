import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BeforeInsert } from "typeorm";
import { city } from "./city.entity";
import { idType } from "./idType.entity";
import { order } from "./order.entity";
const bcrypt = require('bcrypt');

@Entity('user')
export class user {

  @PrimaryGeneratedColumn('uuid') id: string;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string;
  
  @Column({
    type: 'varchar',
    nullable: false
  })
  email: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({ unique: true })
  identificacion: string;

  @Column()
  direccion: string;

  @Column()
  celular: string;

  @Column()
  numerotarjeta: string;

  @OneToMany(() => order, order => order.user)
  order: order[];

  @ManyToOne(() => idType, idType => idType.user)
  idType: idType;

  @ManyToOne(() => city, city => city.user)
  city: city;
}