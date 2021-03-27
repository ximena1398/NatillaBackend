import { Module } from '@nestjs/common';
import { cityController } from './city.controller';
import { cityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { city } from '../../entities/city.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([city])
  ],
  controllers: [cityController],
  providers: [cityService]
})
export class cityModule {}
