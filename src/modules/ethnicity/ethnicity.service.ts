import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ethnicity } from 'src/entities/ethnicity.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ethnicityService {
    
  constructor(
    @InjectRepository(ethnicity) private readonly ethnicityRepository: Repository<ethnicity>
  ) { }

  async getAll() {
    return await this.ethnicityRepository.find()
  }

  async getById(id) {
    return await this.ethnicityRepository.findOne(id)
  }

  async create(body) {
    return await this.ethnicityRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.ethnicityRepository.delete(id)
  }
}
