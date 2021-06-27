/* import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { indigenousReservation } from 'src/entities/indigenousReservation.entity';
import { Repository } from 'typeorm';
@Injectable()
export class indigenousReservationService {
    
  constructor(
    @InjectRepository(indigenousReservation) private readonly indigenousReservationRepository: Repository<indigenousReservation>
  ) { }

  async getAll() {
    return await this.indigenousReservationRepository.find()
  }

  async getById(id) {
    return await this.indigenousReservationRepository.findOne(id)
  }

  async create(body) {
    return await this.indigenousReservationRepository.save(body)
  }

  async delete(id: number) {
    return await this.indigenousReservationRepository.delete(id)
  }
} */
