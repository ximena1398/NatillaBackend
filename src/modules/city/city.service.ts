import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { city } from '../../entities/city.entity';

@Injectable()
export class cityService {
    
  constructor(
    @InjectRepository(city) private readonly cityRepository: Repository<city>
  ) { }

  async getAll() {
    return await this.cityRepository.find()
  }

  async getById(id) {
    return await this.cityRepository.findOne(id)
  }

  async create(body) {
    return await this.cityRepository.save(body)
  }

  async update(id: Number) {
    return "actualizado correctamente " + id
  }

  async delete(id: number) {
    return await this.cityRepository.delete(id)
  }
}
