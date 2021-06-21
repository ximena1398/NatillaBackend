import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { idTypeModule } from './modules/idType/idType.module';
import { cityModule } from './modules/city/city.module';
import { departmentModule } from './modules/department/department.module';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'ec2-54-235-108-217.compute-1.amazonaws.com',
      port: 5432,
      username: 'ryfjjwrnlplcbj',
      password: '2e8b18562155edae91d1074ceef4980a313a7bf56bed1a42a1b3ee40f6bceb2c',
      database: 'dd0qpjspcgdero',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
    }),
    ProductModule,
    typeProductModule,
    presentationUnityModule,
    synonymsModule,
    orderDetailModule,
    orderModule,
    paymentMethodModule,
    userModule,
    idTypeModule,
    cityModule,
    departmentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
