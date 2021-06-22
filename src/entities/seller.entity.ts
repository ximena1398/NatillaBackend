import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BeforeInsert } from "typeorm";
import { nationality } from "./nationality.entity";
import { idType } from "./idType.entity";
import { municipality } from "./municipality.entity";
import { genre } from "./genre.entity";
import { civilStatus } from "./civilStatus.entity";
import { sisben } from "./sisben.entity";
import { victimOfConflict } from "./victimOfConflict.entity";
import { indigenousReservation } from "./indigenousReservation.entity";
import { eps } from "./eps.entity";
import { typeOfSeller } from "./typeOfSeller.entity";
import { ethnicity } from "./ethnicity.entity";
import { educationLevel } from "./educationLevel.entity";
import { typeOfDwelling } from "./typeOfDwelling.entity";
import { sellerServices } from "./sellerServices.entity";
import { sellerDisabilitys } from "./sellerDisabilitys.entity";
import { sellerProducts } from "./sellerProducts.entity";
const bcrypt = require('bcrypt');

@Entity('seller')
export class seller {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  secondName: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  surname: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  secondSurname: string;

  @Column({ unique: true })
  idNumber: number;

  @ManyToOne(() => municipality, municipality => municipality.seller)
  municipality: municipality;

  @ManyToOne(() => nationality, nationality => nationality.seller)
  nationality: nationality;

  @ManyToOne(() => idType, idType => idType.seller)
  idType: idType;

  @ManyToOne(() => genre, genre => genre.seller)
  genre: genre;

  @ManyToOne(() => civilStatus, civilStatus => civilStatus.seller)
  civilStatus: civilStatus;

  @ManyToOne(() => sisben, sisben => sisben.seller)
  sisben: sisben;

  @ManyToOne(() => victimOfConflict, victimOfConflict => victimOfConflict.seller)
  victimOfConflict: victimOfConflict;

  @ManyToOne(() => indigenousReservation, indigenousReservation => indigenousReservation.seller)
  indigenousReservation: indigenousReservation;

  @ManyToOne(() => eps, eps => eps.seller)
  eps: eps;

  @ManyToOne(() => typeOfSeller, typeOfSeller => typeOfSeller.seller)
  typeOfSeller: typeOfSeller;

  @ManyToOne(() => ethnicity, ethnicity => ethnicity.seller)
  ethnicity: ethnicity;

  @ManyToOne(() => educationLevel, educationLevel => educationLevel.seller)
  educationLevel: educationLevel;

  @ManyToOne(() => typeOfDwelling , typeOfDwelling  => typeOfDwelling .seller)
  typeOfDwelling  : typeOfDwelling  ;

  @OneToMany(() => sellerServices, sellerServices => sellerServices.seller)
  sellerServices: sellerServices[];

  @OneToMany(() => sellerDisabilitys, sellerDisabilitys => sellerDisabilitys.seller)
  sellerDisabilitys: sellerDisabilitys[];

  @OneToMany(() => sellerProducts, sellerProducts => sellerProducts.seller)
  sellerProducts: sellerProducts[];
}