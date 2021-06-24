import { Module } from '@nestjs/common';
import { sisbenNumberController } from './sisbenNumber.controller';
import { sisbenNumberService } from './sisbenNumber.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sisbenNumber } from '../../entities/sisbenNumber.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sisbenNumber])
  ],
  controllers: [sisbenNumberController],
  providers: [sisbenNumberService]
})
export class sisbenNumberModule {}
