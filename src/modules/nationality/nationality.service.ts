import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nationality } from 'src/entities/nationality.entity';
import { Repository } from 'typeorm';
@Injectable()
export class nationalityService {
    
  constructor(
    @InjectRepository(nationality) private readonly nationalityRepository: Repository<nationality>
  ) { }

  async getAll() {
    return await this.nationalityRepository.find()
  }

  async getById(id) {
    return await this.nationalityRepository.findOne(id)
  }

  async create(body) {
    return await this.nationalityRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.nationalityRepository.delete(id)
  }
}
