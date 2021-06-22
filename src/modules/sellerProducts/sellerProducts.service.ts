import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sellerProducts } from 'src/entities/sellerProducts.entity';
import { Repository } from 'typeorm';
@Injectable()
export class sellerProductsService {
    
  constructor(
    @InjectRepository(sellerProducts) private readonly sellerProductsRepository: Repository<sellerProducts>
  ) { }

  async getAll() {
    return await this.sellerProductsRepository.find()
  }

  async getById(id) {
    return await this.sellerProductsRepository.findOne(id)
  }

  async create(body) {
    return await this.sellerProductsRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.sellerProductsRepository.delete(id)
  }
}
