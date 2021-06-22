import { Module } from '@nestjs/common';
import { genreController } from './genre.controller';
import { genreService } from './genre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { genre } from '../../entities/genre.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([genre])
  ],
  controllers: [genreController],
  providers: [genreService]
})
export class genreModule {}
