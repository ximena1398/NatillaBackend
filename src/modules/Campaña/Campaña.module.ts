import { Module } from '@nestjs/common';
import { CampañaController } from './Campaña.controller';
import { CampañaService } from './Campaña.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaña } from '../../entities/Campaña.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Campaña])
  ],
  controllers: [CampañaController],
  providers: [CampañaService]
})
export class CampañaModule {}