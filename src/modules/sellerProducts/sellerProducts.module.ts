import { Module } from '@nestjs/common';
import { sellerProductsController } from './sellerProducts.controller';
import { sellerProductsService } from './sellerProducts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerProducts } from '../../entities/sellerProducts.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerProducts])
  ],
  controllers: [sellerProductsController],
  providers: [sellerProductsService]
})
export class sellerProductsModule {}
