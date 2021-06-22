import { Module } from '@nestjs/common';
import { productController } from './product.controller';
import { productService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from '../../entities/product.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([product])
  ],
  controllers: [productController],
  providers: [productService]
})
export class productModule {}
