import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { idType } from 'src/entities/idType.entity';
import { Repository } from 'typeorm';
@Injectable()
export class idTypeService {
    
  constructor(
    @InjectRepository(idType) private readonly idTypeRepository: Repository<idType>
  ) { }

  async getAll() {
    return await this.idTypeRepository.find()
  }

  async getById(id) {
    return await this.idTypeRepository.findOne(id)
  }

  async create(body) {
    return await this.idTypeRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.idTypeRepository.delete(id)
  }
}
