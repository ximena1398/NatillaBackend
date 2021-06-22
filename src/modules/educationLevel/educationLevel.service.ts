import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { educationLevel } from '../../entities/educationLevel.entity';

@Injectable()
export class educationLevelService {
    
  constructor(
    @InjectRepository(educationLevel) private readonly educationLevelRepository: Repository<educationLevel>
  ) { }

  async getAllComic() {
    return await this.educationLevelRepository.find()
  }

  async getComicId(id) {
    return await this.educationLevelRepository.findOne(id)
  }

  async createComic(body) {
    return await this.educationLevelRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.educationLevelRepository.delete(id)
  }
}
