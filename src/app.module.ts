import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { typeProductModule } from './modules/typeProduct/typeProduct.module';
import {presentationUnityModule} from './modules/presentationUnity/presentationUnity.module';
import {synonymsModule} from './modules/synonyms/synonyms.module';
import {orderModule} from './modules/order/order.module';
import {orderDetailModule} from './modules/orderDetail/orderDetail.module';
import {paymentMethodModule} from './modules/paymentMethod/paymentMethod.module';
import {userModule} from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
