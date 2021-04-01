import { Module } from '@nestjs/common';
import { presentationAmountController } from './presentationAmount.controller';
import { presentationAmountService } from './presentationAmount.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { presentationAmount } from '../../entities/presentationAmount.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([presentationAmount])
  ],
  controllers: [presentationAmountController],
  providers: [presentationAmountService]
})
export class presentationAmountModule { }
