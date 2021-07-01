import { Module } from '@nestjs/common';
import { ClienteController } from './Cliente.controller';
import { ClienteService } from './Cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../../entities/Cliente.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Cliente])
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
