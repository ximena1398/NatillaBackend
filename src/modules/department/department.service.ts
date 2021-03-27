import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { department } from '../../entities/department.entity';

@Injectable()
export class departmentService {
    
  constructor(
    @InjectRepository(department) private readonly departmentRepository: Repository<department>
  ) { }

  async getAllComic() {
    return await this.departmentRepository.find()
  }

  async getComicId(id) {
    return await this.departmentRepository.findOne(id)
  }

  async createComic(body) {
    return await this.departmentRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
