import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private readonly ProductRepository: Repository<Product>
  ) { }

  async getAllComic() {
    return await this.ProductRepository.find()
  }

  async getComicId(id) {
    return await this.ProductRepository.findOne(id)
  }

  async createComic(body) {
    return await this.ProductRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: Number) {
    return "eliminado correctamente " + id
  }
}
