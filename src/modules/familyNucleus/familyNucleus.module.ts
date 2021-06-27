import { Module } from '@nestjs/common';
import { familiyNucleusController } from './familyNucleus.controller';
import { familiyNucleusService } from './familyNucleus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { familiyNucleus } from '../../entities/familyNucleus.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([familiyNucleus])
  ],
  controllers: [familiyNucleusController],
  providers: [familiyNucleusService]
})
export class FamiliyNucleusModule {}
