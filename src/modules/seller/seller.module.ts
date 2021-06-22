import { Module } from '@nestjs/common';
import { sellerController } from './seller.controller';
import { sellerService } from './seller.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { seller } from '../../entities/seller.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([seller])
  ],
  controllers: [sellerController],
  providers: [sellerService]
})
export class sellerModule {}
