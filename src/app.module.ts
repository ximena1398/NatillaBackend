import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { civilStatusModule } from './modules/civilStatus/civilStatus.module';
import { disabilityModule } from './modules/disability/disability.module';
import { educationLevelModule } from './modules/educationLevel/educationLevel.module';
import { epsModule } from './modules/eps/eps.module';
import { ethnicityModule } from './modules/ethnicity/ethnicity.module';
import { genreModule } from './modules/genre/genre.module';
import { idTypeModule } from './modules/idType/idType.module';
import { indigenousReservationModule } from './modules/indigenousReservation/indigenousReservation.module';
import { municipalityModule } from './modules/municipality/municipality.module';
import { departmentModule } from './modules/department/department.module';
import { productModule } from './modules/product/product.module';
import { sellerModule } from './modules/seller/seller.module';
import { sellerProductsModule } from './modules/sellerProducts/sellerProducts.module';
import { sellerDisabilitysModule } from './modules/sellerDisabilitys/sellerDisabilitys.module';
import { serviceModule } from './modules/service/service.module';
import { sisbenModule } from './modules/sisben/sisben.module';
import { typeOfDwellingModule } from './modules/typeOfDwelling/typeOfDwelling.module';
import { typeOfSellerModule } from './modules/typeOfSeller/typeOfSeller.module';
import { userModule } from './modules/user/user.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'ec2-54-224-194-214.compute-1.amazonaws.com',
      port: 5432,
      username: 'hnmavabvuzeoqm',
      password: 'f802cf828786b1f2de5e03ff521761a4a844652c1191807000ceb074d67616ee',
      database: 'd2ubjfcsovi3pl',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
    }),
    civilStatusModule,
    disabilityModule,
    educationLevelModule,
    epsModule,
    ethnicityModule,
    genreModule,
    idTypeModule,
    indigenousReservationModule,
    municipalityModule,
    departmentModule,
    productModule,
    sellerModule,
    sellerProductsModule,
    sellerDisabilitysModule,
    sellerProductsModule,
    serviceModule,
    sisbenModule,
    typeOfDwellingModule,
    typeOfSellerModule,
    userModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
