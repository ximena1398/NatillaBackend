import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { typeOfDwelling } from 'src/entities/typeOfDwelling.entity';
import { Repository } from 'typeorm';
@Injectable()
export class typeOfDwellingService {
    
  constructor(
    @InjectRepository(typeOfDwelling) private readonly typeOfDwellingRepository: Repository<typeOfDwelling>
  ) { }

  async getAll() {
    return await this.typeOfDwellingRepository.find()
  }

  async getById(id) {
    return await this.typeOfDwellingRepository.findOne(id)
  }

  async create(body) {
    return await this.typeOfDwellingRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.typeOfDwellingRepository.delete(id)
  }
}
