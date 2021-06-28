import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerFamilyNucleus } from 'src/entities/sellerFamilyNucleus.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerFamilyNucleusService {
    
  constructor(
    @InjectRepository(sellerFamilyNucleus) private readonly sellerFamilyNucleusRepository: Repository<sellerFamilyNucleus>
  ) { }

  async getAll() {
    return await this.sellerFamilyNucleusRepository.find()
  }

  async getById(id) {
    return await this.sellerFamilyNucleusRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerFamilyNucleusRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerFamilyNucleusRepository.delete(id)
  }
}
