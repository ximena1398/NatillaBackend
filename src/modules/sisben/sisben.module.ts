import { Module } from '@nestjs/common';
import { sisbenController } from './sisben.controller';
import { sisbenService } from './sisben.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sisben } from '../../entities/sisben.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sisben])
  ],
  controllers: [sisbenController],
  providers: [sisbenService]
})
export class sisbenModule {}
