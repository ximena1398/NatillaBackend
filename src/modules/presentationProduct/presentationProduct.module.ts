import { Module } from '@nestjs/common';
import { presentationProductController } from './presentationProduct.controller';
import { presentationProductService } from './presentationProduct.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { presentationProduct } from '../../entities/presentationProduct.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([presentationProduct])
  ],
  controllers: [presentationProductController],
  providers: [presentationProductService]
})
export class presentationProductModule { }
