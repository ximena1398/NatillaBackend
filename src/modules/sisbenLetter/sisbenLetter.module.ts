import { Module } from '@nestjs/common';
import { sisbenLetterController } from './sisbenLetter.controller';
import { sisbenLetterService } from './sisbenLetter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sisbenLetter } from '../../entities/sisbenLetter.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([sisbenLetter])
  ],
  controllers: [sisbenLetterController],
  providers: [sisbenLetterService]
})
export class sisbenLetterModule {}
