import { Module } from '@nestjs/common';
import { typeOfSellerController } from './typeOfSeller.controller';
import { typeOfSellerService } from './typeOfSeller.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOfSeller } from '../../entities/typeOfSeller.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([typeOfSeller])
  ],
  controllers: [typeOfSellerController],
  providers: [typeOfSellerService]
})
export class typeOfSellerModule {}
