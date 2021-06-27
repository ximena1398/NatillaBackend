import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { familiyNucleus } from '../../entities/familyNucleus.entity';
import { Repository } from 'typeorm';
@Injectable()
export class familiyNucleusService {
    
  constructor(
    @InjectRepository(familiyNucleus) private readonly familiyNucleusRepository: Repository<familiyNucleus>
  ) { }

  async getAll() {
    return await this.familiyNucleusRepository.find()
  }

  async getById(id) {
    return await this.familiyNucleusRepository.findOne(id)
  }

  async create(body) {
    return await this.familiyNucleusRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.familiyNucleusRepository.delete(id)
  }
}
