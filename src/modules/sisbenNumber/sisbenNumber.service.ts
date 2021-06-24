import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sisbenNumber } from 'src/entities/sisbenNumber.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sisbenNumberService {
    
  constructor(
    @InjectRepository(sisbenNumber) private readonly sisbenNumberRepository: Repository<sisbenNumber>
  ) { }

  async getAll() {
    return await this.sisbenNumberRepository.find()
  }

  async getById(id) {
    return await this.sisbenNumberRepository.findOne(id)
  }

  async create(body) {
    return await this.sisbenNumberRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sisbenNumberRepository.delete(id)
  }
}
