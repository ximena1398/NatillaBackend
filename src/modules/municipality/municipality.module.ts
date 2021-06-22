import { Module } from '@nestjs/common';
import { municipalityController } from './municipality.controller';
import { municipalityService } from './municipality.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { municipality } from '../../entities/municipality.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([municipality])
  ],
  controllers: [municipalityController],
  providers: [municipalityService]
})
export class municipalityModule {}
