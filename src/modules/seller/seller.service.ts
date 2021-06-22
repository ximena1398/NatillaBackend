import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { seller } from 'src/entities/seller.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerService {
    
  constructor(
    @InjectRepository(seller) private readonly sellerRepository: Repository<seller>
  ) { }

  async getAll() {
    return await this.sellerRepository.find()
  }

  async getById(id) {
    return await this.sellerRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerRepository.delete(id)
  }
}
