import { Module } from '@nestjs/common';
import { serviceController } from './service.controller';
import { serviceService } from './service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { service } from '../../entities/service.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([service])
  ],
  controllers: [serviceController],
  providers: [serviceService]
})
export class serviceModule {}
