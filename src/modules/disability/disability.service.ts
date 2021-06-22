import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { disability } from '../../entities/disability.entity';

@Injectable()
export class disabilityService {
    
  constructor(
    @InjectRepository(disability) private readonly disabilityRepository: Repository<disability>
  ) { }

  async getAll() {
    return await this.disabilityRepository.find()
  }

  async getById(id) {
    return await this.disabilityRepository.findOne(id)
  }

  async create(body) {
    return await this.disabilityRepository.save(body)
  }

  async update(id: Number) {
    return "actualizado correctamente " + id
  }

  async delete(id: number) {
    return await this.disabilityRepository.delete(id)
  }
}
