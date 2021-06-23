import { Module } from '@nestjs/common';
import { departmentController } from './department.controller';
import { departmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { department } from '../../entities/department.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([department])
  ],
  controllers: [departmentController],
  providers: [departmentService]
})
export class departmentModule {}
