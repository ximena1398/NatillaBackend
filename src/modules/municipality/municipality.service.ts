import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { municipality } from 'src/entities/municipality.entity';
import { Repository } from 'typeorm';
@Injectable()
export class municipalityService {
    
  constructor(
    @InjectRepository(municipality) private readonly municipalityRepository: Repository<municipality>
  ) { }

  async getAll() {
    return await this.municipalityRepository.find()
  }

  async getMunicipalityByDepartment(id) {
    return await this.municipalityRepository.createQueryBuilder("municipality")
      .where("municipality.department = :id")
      .setParameters({ id: id })
      .innerJoinAndSelect("municipality.department", "department")
      .orderBy('municipality.nombre', 'ASC')
      .getMany();
  }

  async getById(id) {
    return await this.municipalityRepository.findOne(id)
  }

  async create(body) {
    return await this.municipalityRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.municipalityRepository.delete(id)
  }
}
