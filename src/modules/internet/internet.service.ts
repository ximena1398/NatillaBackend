import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { internet } from 'src/entities/internet.entity';
import { Repository } from 'typeorm';
@Injectable()
export class internetService {
    
  constructor(
    @InjectRepository(internet) private readonly internetRepository: Repository<internet>
  ) { }

  async getAll() {
    return await this.internetRepository.find()
  }

  async getById(id) {
    return await this.internetRepository.findOne(id)
  }

  async create(body) {
    return await this.internetRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.internetRepository.delete(id)
  }
}
