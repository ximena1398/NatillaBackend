import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sisbenLetter } from 'src/entities/sisbenLetter.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sisbenLetterService {
    
  constructor(
    @InjectRepository(sisbenLetter) private readonly sisbenLetterRepository: Repository<sisbenLetter>
  ) { }

  async getAll() {
    return await this.sisbenLetterRepository.find()
  }

  async getById(id) {
    return await this.sisbenLetterRepository.findOne(id)
  }

  async create(body) {
    return await this.sisbenLetterRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sisbenLetterRepository.delete(id)
  }
}
