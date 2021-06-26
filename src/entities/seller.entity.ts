import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BeforeInsert } from "typeorm";
import { department } from "./department.entity";
import { idType } from "./idType.entity";
import { municipality } from "./municipality.entity";
import { genre } from "./genre.entity";
import { civilStatus } from "./civilStatus.entity";
import { sisben } from "./sisben.entity";
import { indigenousReservation } from "./indigenousReservation.entity";
import { eps } from "./eps.entity";
import { typeOfSeller } from "./typeOfSeller.entity";
import { ethnicity } from "./ethnicity.entity";
import { educationLevel } from "./educationLevel.entity";
import { typeOfDwelling } from "./typeOfDwelling.entity";
import { sellerServices } from "./sellerServices.entity";
import { sellerDisabilitys } from "./sellerDisabilitys.entity";
import { sellerEthnicity } from "./sellerEthnicity.entity";
import { internet } from "./internet.entity";
import { sellerFamiliyNucleus } from "./sellerFamilyNucleus.entity";
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

  @Column()
  pension: boolean;

  @Column({ unique: true })
  idNumber: number;

  @ManyToOne(() => municipality, municipality => municipality.seller)
  municipality: municipality;

  @ManyToOne(() => department, department => department.seller)
  department: department;

  @ManyToOne(() => idType, idType => idType.seller)
  idType: idType;

  @ManyToOne(() => genre, genre => genre.seller)
  genre: genre;

  @ManyToOne(() => internet, internet => internet.seller)
  internet: internet;

  @ManyToOne(() => civilStatus, civilStatus => civilStatus.seller)
  civilStatus: civilStatus;

  @ManyToOne(() => sisben, sisben => sisben.seller)
  sisben: sisben;
/* 
  @ManyToOne(() => indigenousReservation, indigenousReservation => indigenousReservation.seller)
  indigenousReservation: indigenousReservation; */

  @ManyToOne(() => eps, eps => eps.seller)
  eps: eps;
/* 
  @ManyToOne(() => typeOfSeller, typeOfSeller => typeOfSeller.seller)
  typeOfSeller: typeOfSeller; */

  /* @ManyToOne(() => ethnicity, ethnicity => ethnicity.seller)
  ethnicity: ethnicity; */

  @ManyToOne(() => educationLevel, educationLevel => educationLevel.seller)
  educationLevel: educationLevel;

  @ManyToOne(() => typeOfDwelling , typeOfDwelling  => typeOfDwelling .seller)
  typeOfDwelling  : typeOfDwelling  ;

  @OneToMany(() => sellerServices, sellerServices => sellerServices.seller)
  sellerServices: sellerServices[];

  @OneToMany(() => sellerDisabilitys, sellerDisabilitys => sellerDisabilitys.seller)
  sellerDisabilitys: sellerDisabilitys[];

  @OneToMany(() => sellerEthnicity, sellerEthnicity => sellerEthnicity.seller)
  sellerEthnicity: sellerEthnicity[];

  @OneToMany(() => sellerFamiliyNucleus, sellerFamiliyNucleus => sellerFamiliyNucleus.seller)
  sellerFamiliyNucleus: sellerFamiliyNucleus[];
}