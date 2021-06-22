import { Module } from '@nestjs/common';
import { typeOfDwellingController } from './typeOfDwelling.controller';
import { typeOfDwellingService } from './typeOfDwelling.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOfDwelling } from '../../entities/typeOfDwelling.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([typeOfDwelling])
  ],
  controllers: [typeOfDwellingController],
  providers: [typeOfDwellingService]
})
export class typeOfDwellingModule {}
