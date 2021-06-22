import { Module } from '@nestjs/common';
import { civilStatusController } from './civilStatus.controller';
import { civilStatusService } from './civilStatus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { civilStatus } from '../../entities/civilStatus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([civilStatus])
  ],
  controllers: [civilStatusController],
  providers: [civilStatusService]
})
export class civilStatusModule {}
