import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { department } from '../../entities/department.entity';

@Injectable()
export class departmentService {
    
  constructor(
    @InjectRepository(department) private readonly departmentRepository: Repository<department>
  ) { }

  async getAll() {
    return await this.departmentRepository.find()
  }

  async getById(id) {
    return await this.departmentRepository.findOne(id)
  }

  async create(body) {
    return await this.departmentRepository.save(body)
  }

  async update(id: Number) {
    return "actualizado correctamente " + id
  }

  async delete(id: number) {
    return await this.departmentRepository.delete(id)
  }
}
