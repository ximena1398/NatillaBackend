import { Module } from '@nestjs/common';
import { internetController } from './internet.controller';
import { internetService } from './internet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { internet } from '../../entities/internet.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([internet])
  ],
  controllers: [internetController],
  providers: [internetService]
})
export class internetModule {}
