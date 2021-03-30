import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { typeProduct } from '../../entities/typeproduct.entity';

@Injectable()
export class typeProductService {
    
  constructor(
    @InjectRepository(typeProduct) private readonly typeProductRepository: Repository<typeProduct>
  ) { }

  async getAllComic() {
    return await this.typeProductRepository.find()
  }

  async getComicId(id) {
    return await this.typeProductRepository.findOne(id)
  }

  async createComic(body) {
    return await this.typeProductRepository.save(body)
  }

  async updateComic(id: Number) {
    return "actualizado correctamente " + id
  }

  async deleteComic(id: number) {
    return await this.typeProductRepository.delete(id)
  }
}
