import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { typeProductModule } from './modules/typeProduct/typeProduct.module';
import { presentationProductModule } from './modules/presentationProduct/presentationProduct.module';
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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: 'ec2-52-44-31-100.compute-1.amazonaws.com',
      port: 5432,
      username: 'ipjuprwaxyefcr',
      password: '75bbfbff9e72a43e86782bafa67d41a7fa5c1c9b14604d93dd1e3cae91133326',
      database: 'dedt789mdesu7o',
      entities: ['dist/entities/*.entity.js'],
      synchronize: true,
      ssl: true
    }),
    ProductModule,
    typeProductModule,
    presentationProductModule,
    presentationUnityModule,
    synonymsModule,
    orderDetailModule,
    orderModule,
    paymentMethodModule,
    userModule,
    idTypeModule,
    cityModule,
    departmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
