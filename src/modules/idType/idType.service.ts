import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { idType } from '../../entities/idType.entity';

@Injectable()
export class idTypeService {
    
  constructor(
    @InjectRepository(idType) private readonly idTypeRepository: Repository<idType>
  ) { }

  async getAllComic() {
    return await this.idTypeRepository.find()
  }

  async getComicId(id) {
    return await this.idTypeRepository.findOne(id)
  }

  async createComic(body) {
    return await this.idTypeRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.idTypeRepository.delete(id)
  }
}
