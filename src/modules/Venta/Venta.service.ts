import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from 'src/entities/Venta.entity';
import { Repository } from 'typeorm';
@Injectable()
export class VentaService {
    
  constructor(
    @InjectRepository(Venta) private readonly VentaRepository: Repository<Venta>
  ) { }

  async getAll() {
    return await this.VentaRepository.find()
  }

  async getById(id) {
    return await this.VentaRepository.findOne(id)
  }

  async create(body) {
    return await this.VentaRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.VentaRepository.delete(id)
  }
}
