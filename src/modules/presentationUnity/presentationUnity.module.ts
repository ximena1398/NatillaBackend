import { Module } from '@nestjs/common';
import { presentationUnityController } from './presentationUnity.controller';
import { presentationUnityService } from './presentationUnity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { presentationUnity } from '../../entities/presentationUnity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([presentationUnity])
  ],
  controllers: [presentationUnityController],
  providers: [presentationUnityService]
})
export class presentationUnityModule { }
