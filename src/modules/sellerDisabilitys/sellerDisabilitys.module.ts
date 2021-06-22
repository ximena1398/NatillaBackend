import { Module } from '@nestjs/common';
import { sellerDisabilitysController } from './sellerDisabilitys.controller';
import { sellerDisabilitysService } from './sellerDisabilitys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerDisabilitys } from '../../entities/sellerDisabilitys.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerDisabilitys])
  ],
  controllers: [sellerDisabilitysController],
  providers: [sellerDisabilitysService]
})
export class sellerDisabilitysModule {}
