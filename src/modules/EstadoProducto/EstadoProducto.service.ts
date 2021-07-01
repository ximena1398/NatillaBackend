import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstadoProducto } from 'src/entities/EstadoProducto.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EstadoProductoService {
    
  constructor(
    @InjectRepository(EstadoProducto) private readonly EstadoProductoRepository: Repository<EstadoProducto>
  ) { }

  async getAll() {
    return await this.EstadoProductoRepository.find()
  }

  async getById(id) {
    return await this.EstadoProductoRepository.findOne(id)
  }

  async create(body) {
    return await this.EstadoProductoRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.EstadoProductoRepository.delete(id)
  }
}
