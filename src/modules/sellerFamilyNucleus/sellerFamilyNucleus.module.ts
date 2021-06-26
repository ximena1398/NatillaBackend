import { Module } from '@nestjs/common';
import { sellerFamiliyNucleusController } from './sellerFamilyNucleus.controller';
import { sellerFamiliyNucleusService } from './sellerFamilyNucleus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerFamiliyNucleus } from '../../entities/sellerFamilyNucleus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerFamiliyNucleus])
  ],
  controllers: [sellerFamiliyNucleusController],
  providers: [sellerFamiliyNucleusService]
})
export class sellerFamiliyNucleusModule {}
