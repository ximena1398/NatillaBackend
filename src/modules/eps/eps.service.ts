import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { eps } from 'src/entities/eps.entity';
import { Repository } from 'typeorm';
@Injectable()
export class epsService {
    
  constructor(
    @InjectRepository(eps) private readonly epsRepository: Repository<eps>
  ) { }

  async getAll() {
    return await this.epsRepository.find()
  }

  async getById(id) {
    return await this.epsRepository.findOne(id)
  }

  async create(body) {
    return await this.epsRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.epsRepository.delete(id)
  }
}
