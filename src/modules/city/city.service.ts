import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { city } from '../../entities/city.entity';

@Injectable()
export class cityService {
    
  constructor(
    @InjectRepository(city) private readonly cityRepository: Repository<city>
  ) { }

  async getAllComic() {
    return await this.cityRepository.find()
  }

  async getComicId(id) {
    return await this.cityRepository.findOne(id)
  }

  async createComic(body) {
    return await this.cityRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
