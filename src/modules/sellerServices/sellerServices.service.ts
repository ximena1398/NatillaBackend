import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerServices } from 'src/entities/sellerServices.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerServicesService {
    
  constructor(
    @InjectRepository(sellerServices) private readonly sellerServicesRepository: Repository<sellerServices>
  ) { }

  async getAll() {
    return await this.sellerServicesRepository.find()
  }

  async getById(id) {
    return await this.sellerServicesRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerServicesRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerServicesRepository.delete(id)
  }
}
