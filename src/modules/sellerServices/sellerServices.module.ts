import { Module } from '@nestjs/common';
import { sellerServicesController } from './sellerServices.controller';
import { sellerServicesService } from './sellerServices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerServices } from '../../entities/sellerServices.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerServices])
  ],
  controllers: [sellerServicesController],
  providers: [sellerServicesService]
})
export class sellerServicesModule {}
