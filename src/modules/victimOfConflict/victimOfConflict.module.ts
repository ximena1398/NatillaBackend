import { Module } from '@nestjs/common';
import { victimOfConflictController } from './victimOfConflict.controller';
import { victimOfConflictService } from './victimOfConflict.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { victimOfConflict } from '../../entities/victimOfConflict.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([victimOfConflict])
  ],
  controllers: [victimOfConflictController],
  providers: [victimOfConflictService]
})
export class victimOfConflictModule {}
