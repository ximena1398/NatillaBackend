import { Module } from '@nestjs/common';
import { FamiliyNucleusController } from './familyNucleus.controller';
import { FamiliyNucleusService } from './familyNucleus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { familiyNucleus } from '../../entities/familyNucleus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([familiyNucleus])
  ],
  controllers: [FamiliyNucleusController],
  providers: [FamiliyNucleusService]
})
export class FamiliyNucleusModule {}
