import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerFamiliyNucleus } from 'src/entities/sellerFamilyNucleus.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerFamiliyNucleusService {
    
  constructor(
    @InjectRepository(sellerFamiliyNucleus) private readonly sellerFamiliyNucleusRepository: Repository<sellerFamiliyNucleus>
  ) { }

  async getAll() {
    return await this.sellerFamiliyNucleusRepository.find()
  }

  async getById(id) {
    return await this.sellerFamiliyNucleusRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerFamiliyNucleusRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerFamiliyNucleusRepository.delete(id)
  }
}
