import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/entities/Producto.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductoService {
    
  constructor(
    @InjectRepository(Producto) private readonly ProductoRepository: Repository<Producto>
  ) { }

  async getAll() {
    return await this.ProductoRepository.find()
  }

  async getById(id) {
    return await this.ProductoRepository.findOne(id)
  }

  async create(body) {
    return await this.ProductoRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.ProductoRepository.delete(id)
  }
}
