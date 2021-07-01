import { Module } from '@nestjs/common';
import { VentaController } from './Venta.controller';
import { VentaService } from './Venta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from '../../entities/Venta.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Venta])
  ],
  controllers: [VentaController],
  providers: [VentaService]
})
export class VentaModule {}