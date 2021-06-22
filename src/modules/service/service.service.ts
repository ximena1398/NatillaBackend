import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { service } from 'src/entities/service.entity';
import { Repository } from 'typeorm';
@Injectable()
export class serviceService {
    
  constructor(
    @InjectRepository(service) private readonly serviceRepository: Repository<service>
  ) { }

  async getAll() {
    return await this.serviceRepository.find()
  }

  async getById(id) {
    return await this.serviceRepository.findOne(id)
  }

  async create(body) {
    return await this.serviceRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.serviceRepository.delete(id)
  }
}
