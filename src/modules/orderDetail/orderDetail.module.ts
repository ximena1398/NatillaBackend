import { Module } from '@nestjs/common';
import { orderDetailController } from './orderDetail.controller';
import { orderDetailService } from './orderDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orderDetail } from '../../entities/orderDetail.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([orderDetail])
  ],
  controllers: [orderDetailController],
  providers: [orderDetailService]
})
export class orderDetailModule {}
