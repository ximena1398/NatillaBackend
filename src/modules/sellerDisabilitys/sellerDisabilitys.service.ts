import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerDisabilitys } from 'src/entities/sellerDisabilitys.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerDisabilitysService {
    
  constructor(
    @InjectRepository(sellerDisabilitys) private readonly sellerDisabilitysRepository: Repository<sellerDisabilitys>
  ) { }

  async getAll() {
    return await this.sellerDisabilitysRepository.find()
  }

  async getById(id) {
    return await this.sellerDisabilitysRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerDisabilitysRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerDisabilitysRepository.delete(id)
  }
}
