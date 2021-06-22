import { Module } from '@nestjs/common';
import { disabilityController } from './disability.controller';
import { disabilityService } from './disability.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { disability } from '../../entities/disability.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([disability])
  ],
  controllers: [disabilityController],
  providers: [disabilityService]
})
export class disabilityModule {}
