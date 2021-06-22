import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class productService {
    
  constructor(
    @InjectRepository(product) private readonly productRepository: Repository<product>
  ) { }

  async getAll() {
    return await this.productRepository.find()
  }

  async getById(id) {
    return await this.productRepository.findOne(id)
  }

  async create(body) {
    return await this.productRepository.save(body)
  }

  /* async update(id: Number) {
    return "actualizado correctamente " + id
  } */

  async delete(id: number) {
    return await this.productRepository.delete(id)
  }
}
