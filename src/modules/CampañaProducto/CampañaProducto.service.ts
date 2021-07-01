import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampañaProducto } from 'src/entities/CampañaProducto.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CampañaProductoService {
    
  constructor(
    @InjectRepository(CampañaProducto) private readonly CampañaProductoRepository: Repository<CampañaProducto>
  ) { }

  async getAll() {
    return await this.CampañaProductoRepository.find()
  }

  async getById(id) {
    return await this.CampañaProductoRepository.findOne(id)
  }

  async create(body) {
    return await this.CampañaProductoRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.CampañaProductoRepository.delete(id)
  }
}