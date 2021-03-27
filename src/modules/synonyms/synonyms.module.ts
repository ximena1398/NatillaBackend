import { Module } from '@nestjs/common';
import { synonymsController } from './synonyms.controller';
import { synonymsService } from './synonyms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { synonyms } from '../../entities/synonyms.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([synonyms])
  ],
  controllers: [synonymsController],
  providers: [synonymsService]
})
export class synonymsModule {}
