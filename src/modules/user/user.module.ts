import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from '../../entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([user])
  ],
  controllers: [userController],
  providers: [userService]
})
export class userModule {}
