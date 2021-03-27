import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { synonyms } from '../../entities/synonyms.entity';

@Injectable()
export class synonymsService {
    
  constructor(
    @InjectRepository(synonyms) private readonly synonymsRepository: Repository<synonyms>
  ) { }

  async getAllComic() {
    return await this.synonymsRepository.find()
  }

  async getComicId(id) {
    return await this.synonymsRepository.findOne(id)
  }

  async createComic(body) {
    return await this.synonymsRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
