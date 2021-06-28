import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { familyNucleus } from '../../entities/familyNucleus.entity';
import { Repository } from 'typeorm';
@Injectable()
export class familyNucleusService {
    
  constructor(
    @InjectRepository(familyNucleus) private readonly familyNucleusRepository: Repository<familyNucleus>
  ) { }

  async getAll() {
    return await this.familyNucleusRepository.find()
  }

  async getById(id) {
    return await this.familyNucleusRepository.findOne(id)
  }

  async create(body) {
    return await this.familyNucleusRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.familyNucleusRepository.delete(id)
  }
}
