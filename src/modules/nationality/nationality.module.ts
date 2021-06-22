import { Module } from '@nestjs/common';
import { nationalityController } from './nationality.controller';
import { nationalityService } from './nationality.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nationality } from '../../entities/nationality.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([nationality])
  ],
  controllers: [nationalityController],
  providers: [nationalityService]
})
export class nationalityModule {}
