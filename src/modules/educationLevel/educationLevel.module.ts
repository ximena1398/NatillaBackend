import { Module } from '@nestjs/common';
import { educationLevelController } from './educationLevel.controller';
import { educationLevelService } from './educationLevel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { educationLevel } from '../../entities/educationLevel.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([educationLevel])
  ],
  controllers: [educationLevelController],
  providers: [educationLevelService]
})
export class educationLevelModule {}
