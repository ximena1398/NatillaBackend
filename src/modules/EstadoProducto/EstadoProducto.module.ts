import { Module } from '@nestjs/common';
import { EstadoProductoController } from './EstadoProducto.controller';
import { EstadoProductoService } from './EstadoProducto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoProducto } from '../../entities/EstadoProducto.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([EstadoProducto])
  ],
  controllers: [EstadoProductoController],
  providers: [EstadoProductoService]
})
export class EstadoProductoModule {}