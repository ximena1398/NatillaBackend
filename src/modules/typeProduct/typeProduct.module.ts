import { Module } from '@nestjs/common';
import { typeProductController } from './typeProduct.controller';
import { typeProductService } from './typeProduct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeProduct } from '../../entities/typeproduct.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([typeProduct])
  ],
  controllers: [typeProductController],
  providers: [typeProductService]
})
export class typeProductModule {}
