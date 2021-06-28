import { Module } from '@nestjs/common';
import { familyNucleusController } from './familyNucleus.controller';
import { familyNucleusService } from './familyNucleus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { familyNucleus } from '../../entities/familyNucleus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([familyNucleus])
  ],
  controllers: [familyNucleusController],
  providers: [familyNucleusService]
})
export class FamilyNucleusModule {}
