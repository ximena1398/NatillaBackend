import { Module } from '@nestjs/common';
import { ethnicityController } from './ethnicity.controller';
import { ethnicityService } from './ethnicity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ethnicity } from '../../entities/ethnicity.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ethnicity])
  ],
  controllers: [ethnicityController],
  providers: [ethnicityService]
})
export class ethnicityModule {}
