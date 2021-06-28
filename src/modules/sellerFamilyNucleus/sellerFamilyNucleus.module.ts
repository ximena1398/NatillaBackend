import { Module } from '@nestjs/common';
import { sellerFamilyNucleusController } from './sellerFamilyNucleus.controller';
import { sellerFamilyNucleusService } from './sellerFamilyNucleus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sellerFamilyNucleus } from '../../entities/sellerFamilyNucleus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sellerFamilyNucleus])
  ],
  controllers: [sellerFamilyNucleusController],
  providers: [sellerFamilyNucleusService]
})
export class sellerFamilyNucleusModule {}
