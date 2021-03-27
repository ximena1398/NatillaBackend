import { Module } from '@nestjs/common';
import { paymentMethodController } from './paymentMethod.controller';
import {paymentMethodService } from './paymentMethod.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paymentMethod } from '../../entities/paymentMethod.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([paymentMethod])
  ],
  controllers: [paymentMethodController],
  providers: [paymentMethodService]
})
export class paymentMethodModule {}
