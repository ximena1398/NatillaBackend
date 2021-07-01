import { Module } from '@nestjs/common';
import { ProductoController } from './Producto.controller';
import { ProductoService } from './Producto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from '../../entities/Producto.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Producto])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}