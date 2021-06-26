import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerEthnicity } from 'src/entities/sellerEthnicity.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerEthnicityService {
    
  constructor(
    @InjectRepository(sellerEthnicity) private readonly sellerEthnicityRepository: Repository<sellerEthnicity>
  ) { }

  async getAll() {
    return await this.sellerEthnicityRepository.find()
  }

  async getById(id) {
    return await this.sellerEthnicityRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerEthnicityRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerEthnicityRepository.delete(id)
  }
}
