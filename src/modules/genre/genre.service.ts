import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genre } from 'src/entities/genre.entity';
import { Repository } from 'typeorm';
@Injectable()
export class genreService {
    
  constructor(
    @InjectRepository(genre) private readonly genreRepository: Repository<genre>
  ) { }

  async getAll() {
    return await this.genreRepository.find()
  }

  async getById(id) {
    return await this.genreRepository.findOne(id)
  }

  async create(body) {
    return await this.genreRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.genreRepository.delete(id)
  }
}
