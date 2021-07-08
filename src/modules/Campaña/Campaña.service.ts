import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaña } from 'src/entities/Campaña.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CampañaService {

  constructor(
    @InjectRepository(Campaña) private readonly CampañaRepository: Repository<Campaña>
  ) { }

  async getAll() {
    return await this.CampañaRepository.createQueryBuilder("Campaña")
      .getManyAndCount();
  }

  async getById(id) {
    return await this.CampañaRepository.findOne(id)
  }

  async create(body) {
    return await this.CampañaRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.CampañaRepository.delete(id)
  }
}