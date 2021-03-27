import { Module } from '@nestjs/common';
import { idTypeController } from './idType.controller';
import { idTypeService } from './idType.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { idType } from '../../entities/idType.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([idType])
  ],
  controllers: [idTypeController],
  providers: [idTypeService]
})
export class idTypeModule {}
