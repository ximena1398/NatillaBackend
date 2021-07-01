import { Module } from '@nestjs/common';
import { CampañaProductoController } from './CampañaProducto.controller';
import { CampañaProductoService } from './CampañaProducto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampañaProducto } from '../../entities/CampañaProducto.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([CampañaProducto])
  ],
  controllers: [CampañaProductoController],
  providers: [CampañaProductoService]
})
export class CampañaProductoModule {}