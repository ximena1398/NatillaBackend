import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/Cliente.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ClienteService {
    
  constructor(
    @InjectRepository(Cliente) private readonly ClienteRepository: Repository<Cliente>
  ) { }

  async getAll() {
    return await this.ClienteRepository.find()
  }

  async getById(id) {
    return await this.ClienteRepository.findOne(id)
  }

  async create(body) {
    return await this.ClienteRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.ClienteRepository.delete(id)
  }
}
