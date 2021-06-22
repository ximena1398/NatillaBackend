import { Module } from '@nestjs/common';
import { epsController } from './eps.controller';
import { epsService } from './eps.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { eps } from '../../entities/eps.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([eps])
  ],
  controllers: [epsController],
  providers: [epsService]
})
export class epsModule {}
