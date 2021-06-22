import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { victimOfConflict } from 'src/entities/victimOfConflict.entity';
import { Repository } from 'typeorm';
@Injectable()
export class victimOfConflictService {
    
  constructor(
    @InjectRepository(victimOfConflict) private readonly victimOfConflictRepository: Repository<victimOfConflict>
  ) { }

  async getAll() {
    return await this.victimOfConflictRepository.find()
  }

  async getById(id) {
    return await this.victimOfConflictRepository.findOne(id)
  }

  async create(body) {
    return await this.victimOfConflictRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.victimOfConflictRepository.delete(id)
  }
}
