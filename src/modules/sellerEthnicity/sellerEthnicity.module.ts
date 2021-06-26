import { Module } from '@nestjs/common';
import { sellerEthnicityController } from './sellerEthnicity.controller';
import { sellerEthnicityService } from './sellerEthnicity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerEthnicity } from '../../entities/sellerEthnicity.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerEthnicity])
  ],
  controllers: [sellerEthnicityController],
  providers: [sellerEthnicityService]
})
export class sellerEthnicityModule {}
