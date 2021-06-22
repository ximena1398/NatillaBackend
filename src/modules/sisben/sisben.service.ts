import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sisben } from 'src/entities/sisben.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sisbenService {
    
  constructor(
    @InjectRepository(sisben) private readonly sisbenRepository: Repository<sisben>
  ) { }

  async getAll() {
    return await this.sisbenRepository.find()
  }

  async getById(id) {
    return await this.sisbenRepository.findOne(id)
  }

  async create(body) {
    return await this.sisbenRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sisbenRepository.delete(id)
  }
}
