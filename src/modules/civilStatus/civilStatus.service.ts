import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { civilStatus } from 'src/entities/civilStatus.entity';
import { Repository } from 'typeorm';
@Injectable()
export class civilStatusService {
    
  constructor(
    @InjectRepository(civilStatus) private readonly civilStatusRepository: Repository<civilStatus>
  ) { }

  async getAll() {
    return await this.civilStatusRepository.find()
  }

  async getById(id) {
    return await this.civilStatusRepository.findOne(id)
  }

  async create(body) {
    return await this.civilStatusRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.civilStatusRepository.delete(id)
  }
}
