import { Module } from '@nestjs/common';
import { orderController } from './order.controller';
import { orderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { order } from '../../entities/order.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([order])
  ],
  controllers: [orderController],
  providers: [orderService]
})
export class orderModule {}
